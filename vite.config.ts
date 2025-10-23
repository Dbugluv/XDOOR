import react from '@vitejs/plugin-react'
import autoprefixer from 'autoprefixer'
import path from 'path'
import pxtorem from 'postcss-pxtorem'
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
    postcss: {
      plugins: [
        autoprefixer({
          overrideBrowserslist: ['> 1%', 'last 2 versions', 'not dead'],
        }),
        pxtorem({
          rootValue: 24,
          propList: ['*', '!border*', '!box-shadow', '!text-shadow'], // 排除某些属性
          selectorBlackList: [
            '.norem',
            '.pc-',
            '.device-desktop',
            '.device-tablet',
            'html',
            'body',
          ], // 增加更多排除类
          replace: true,
          mediaQuery: false,
          minPixelValue: 2,
          exclude: /node_modules|src[\\/]styles[\\/]pc/, // 排除 PC 端样式目录
        }),
      ],
    },
  },
})
