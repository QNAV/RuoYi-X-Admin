import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import type { UserConfig } from 'vite';
import { defineConfig } from 'vite';

const plugins: UserConfig['plugins'] = [react()];

if (process.env.vis) {
  plugins.push(
    visualizer({
      gzipSize: true,
    }),
  );
}

let LOGIN_PATH_NAME = '/login';
let base = '/';

if (process.env.gh) {
  LOGIN_PATH_NAME = '/RuoYi-X-Umi/login';
  base = '/RuoYi-X-Umi/';
}

// https://vitejs.dev/config/
export default defineConfig({
  base,
  plugins,
  resolve: {
    alias: [
      { find: '@/', replacement: '/src/' },
      { find: /^~antd/, replacement: 'antd' },
    ],
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  define: {
    LOGIN_PATH_NAME: JSON.stringify(LOGIN_PATH_NAME),
  },
});
