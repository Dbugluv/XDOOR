import react from '@vitejs/plugin-react'
import path from 'path'
import postcssPxtorem from 'postcss-pxtorem'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    host: '127.0.0.1',
    port: 5001,
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 注意这里是 additionalData，不是 prependData
        additionalData: `
          @use "@/styles/pxto" as *;
          @use "@/styles/var" as *;
          @use "@/styles/mixin" as *;
        `,
      },
    },
    postcss: {
      plugins: [
        postcssPxtorem({
          rootValue: 16,
          propList: ['*'],
          // 排除PC端组件或添加媒体查询限制
          exclude: /(pc-|desktop)/i,
          mediaQuery: true, // 允许在媒体查询中转换
        }),
      ],
    },
  },
})
