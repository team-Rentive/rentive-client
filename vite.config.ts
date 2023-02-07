import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
	// import React from 'react'를 `auto-import` 해주는 jsx 헬퍼
	esbuild: {
		jsxInject: `import React from 'react'`,
	},
});
