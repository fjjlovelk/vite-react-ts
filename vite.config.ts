import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteEsLint from 'vite-plugin-eslint';
import viteCompression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react(), viteEsLint(), viteCompression()],
  resolve: {
    alias: {
      '@': '/src'
    }
  }
});
