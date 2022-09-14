import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteEsLint from 'vite-plugin-eslint';
import viteCompression from 'vite-plugin-compression';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	base: './',
	plugins: [react(), viteEsLint(), viteCompression()],
	resolve: {
		alias: {
			'@': '/src'
		}
	},
	css: {
		preprocessorOptions: {
			less: {
				javascriptEnabled: true,
				modifyVars: {
					hack: `true; @import (reference) "${path.resolve('src/styles/antd.less')}";`
				}
			}
		}
	}
});
