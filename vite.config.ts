import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import postcssPxtorem from 'postcss-pxtorem'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '127.0.0.1',
    port: 5001
  },
  css: {
    postcss: {
      plugins: [
        require('autoprefixer')({
          overrideBrowserslist: [
            '> 1%',
            'last 2 versions',
            'not dead'
          ]
        }),
        require('postcss-pxtorem')({
          rootValue: 16, // 基准值，1rem = 16px
          propList: ['*'], // 需要转换的属性，* 表示所有
          selectorBlackList: ['.norem'], // 忽略的类名，不进行转换
          replace: true,
          mediaQuery: false,
          minPixelValue: 2, // 最小转换值，小于 2px 不转换
          exclude: /node_modules/i // 排除 node_modules
        })
      ]
    }
  }
})