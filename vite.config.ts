import react from '@vitejs/plugin-react';
import jotaiDebugLabel from 'jotai/babel/plugin-debug-label';
import jotaiReactRefresh from 'jotai/babel/plugin-react-refresh';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';

const baseMap = {
  development: '/',
  staging: '/',
  production: '/',
  gh: '/RuoYi-X-Admin/',
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    base: baseMap[mode],
    plugins: [
      react({ babel: { plugins: [jotaiDebugLabel, jotaiReactRefresh] } }),
      {
        ...visualizer({
          open: true,
        }),
        apply: () => !!process.env.vis,
      },
      createHtmlPlugin({
        inject: {
          data: {
            injectScript: mode === 'gh' ? `<script src="/404.js"></script>` : '',
          },
        },
      }),
    ],
    resolve: {
      alias: [{ find: '@/', replacement: '/src/' }],
    },
  };
});
