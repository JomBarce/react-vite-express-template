import dotenv from 'dotenv';
dotenv.config();

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const BACKEND_PORT = Number(process.env.PORT) || 9001;

export default defineConfig({
  plugins: [react()],
  server: {
    port: 9000,
    proxy: {
      '/api': {
        target: `http://localhost:${BACKEND_PORT}`,
        changeOrigin: true,
      },
    }
  },
  build: {  
    target: 'esnext',
    outDir: 'dist/',
  },
})
