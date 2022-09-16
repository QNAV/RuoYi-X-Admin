import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import type { UserConfig } from 'vite';
import { defineConfig } from 'vite';

const plugins: UserConfig['plugins'] = [react()];

if (process.env.vis) {
  plugins.push(visualizer());
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
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
    LOGIN_PATH_NAME: '/login',
  },
});
