import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    allowedHosts: ['42309bd19a41.ngrok-free.app'],
    // allowedHosts: ['all'], // 仅开发环境下可用
  },
});
