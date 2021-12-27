import { defineConfig } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';
import ElementPlus from 'unplugin-element-plus/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ElementPlus({
      useSource: true,
    }),
  ],
  resolve: {
    alias: {
      // 设置 `@` 指向 `src` 目录
      '@': resolve(__dirname, 'src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // element-plus 自定义主题
        additionalData: '@use "@/style/element/index.scss" as *;',
      },
    },
  },
  base: './', // 设置打包路径
  server: {
    port: 4000, // 设置服务启动端口号
    open: true, // 设置服务启动完成时是否自动打开默认浏览器
    cors: true, // 设置服务是否允许跨域
    // 设置代理
    proxy: {
      '/api': {
        target: 'https://oa-api.517rxt.com',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace('/api/', '/'),
      },
    },
  },
});
