import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

const env = loadEnv(process.env.NODE_ENV as string, process.cwd(), 'VITE_');

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: env.VITE_BACKEND_URL,
        changeOrigin: true,
      },
    },
  },
});
