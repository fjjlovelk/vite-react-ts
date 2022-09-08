import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteEsLint from 'vite-plugin-eslint';
import viteCompression from 'vite-plugin-compression';
import vitePluginImp from 'vite-plugin-imp';
import path from 'path';
import fs from 'fs';
import lessToJS from 'less-vars-to-js';

// 将less样式转换为json键值对
const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, 'src/styles/antd.less'), 'utf8')
);

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    react(),
    viteEsLint(),
    viteCompression(),
    vitePluginImp({
      libList: [
        {
          libName: 'antd',
          style: name => `antd/es/${name}/style`
        }
      ]
    })
  ],
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: themeVariables
      }
    }
  }
});
