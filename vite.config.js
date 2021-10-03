import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  // sourcemap: true,
  minify: 'esbuild',
  outDir: 'dist',
  plugins: [vue()],
  // 配置前端服务地址和端口
  server: {
    host: '0.0.0.0',
    port: 8000,
    // 是否开启 https
    https: false,
  },
  // 设置别名
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      components: path.resolve(__dirname, 'src/components'),
      assets: path.resolve(__dirname, 'src/assets'),
      views: path.resolve(__dirname, 'src/views'),
      utils: path.resolve(__dirname, 'src/utils'),
      apis: path.resolve(__dirname, 'src/apis'),
    },
  },

  // sass预处理
  css: {
    preprocessorOptions: {
      scss: {
        // @/ 是 src/ 的别名
        // 所以这里假设你有 `src/assets/scss/variables.scss` 这个文件
        // additionalData: `@import "@/assets/scss/variables.scss";`
      },
    },
  },
  // 配置Dep优化行为
  optimizeDeps: {
    include: ['lodash-es'],
  },
  proxy: { // 本地开发环境通过代理实现跨域，生产环境使用 nginx 转发
    '/api': {
      target: 'http://127.0.0.1:3000/', // 后端服务实际地址
      changeOrigin: true,
      rewrite: (url) => url.replace(/^\/api/, ''),
    },
  },
});
