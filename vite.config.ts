import { defineConfig } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';
import styleImport from 'vite-plugin-style-import';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // ui库style按需加载配置
    styleImport({
      libs: [
        {
          libraryName: 'element-plus',
          esModule: true,
          ensureStyleFile: true,
          resolveStyle: (name) => {
            const cname = name.slice(3);
            return `element-plus/packages/theme-chalk/src/${cname}.scss`;
          },
          resolveComponent: (name) => {
            return `element-plus/lib/${name}`;
          },
        },
      ],
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
        additionalData: '@import "@/style/element-variables.scss";',
      },
    },
  },
  base: './', // 设置打包路径
  server: {
    port: 4000, // 设置服务启动端口号
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
