import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/guide/build.html#library-mode
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'speech-to-text-web',
      fileName: 'speech-to-text-web',
    },
  },
  server: {
    // 允许特定的 ngrok 域名访问
    allowedHosts: ['all'],
    // 如果你频繁更换 ngrok 地址，可用 ['all']，但仅限开发环境！
    // allowedHosts: ['all'],
  },
  plugins: [dts()],
});
