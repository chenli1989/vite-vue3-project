import { defineConfig } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [
        ElementPlusResolver({
          importStyle: 'sass',
        }),
      ],
    }),
  ],
  resolve: {
    alias: [
      // 设置 `@` 指向 `src` 目录
      { find: '@', replacement: resolve(__dirname, 'src') },
    ],
  },
  css: {
    preprocessorOptions: {
      scss: {
        // element-plus 自定义主题
        additionalData: '@use "@/styles/element/index.scss" as *;',
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
        target: 'http://api.xxx.com',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace('/api/', '/'),
      },
    },
  },
});
