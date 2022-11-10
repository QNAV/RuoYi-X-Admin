import react from '@vitejs/plugin-react';
import jotaiDebugLabel from 'jotai/babel/plugin-debug-label';
import jotaiReactRefresh from 'jotai/babel/plugin-react-refresh';
import { visualizer } from 'rollup-plugin-visualizer';
import type { UserConfig } from 'vite';
import { defineConfig, loadEnv } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';

const plugins: UserConfig['plugins'] = [react({ babel: { plugins: [jotaiDebugLabel, jotaiReactRefresh] } })];

const pluginVis = visualizer({
  open: true,
  gzipSize: true,
});

const genPluginHTML = (injectGhScript: boolean) =>
  createHtmlPlugin({
    minify: false,
    inject: {
      data: {
        injectScript: injectGhScript ? `<script src="/404.js"></script>` : '',
      },
    },
  });

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  plugins.push(genPluginHTML(mode === 'gh'));

  if (process.env.vis) {
    plugins.push(pluginVis);
  }

  return {
    base: env.VITE_BASE_NAME,
    plugins,
    resolve: {
      alias: [{ find: '@/', replacement: '/src/' }],
    },
  };
});
