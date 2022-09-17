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

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  console.log('mode', mode);
  return {
    mode: mode === 'development' ? 'development' : 'production',
    base: mode === 'gh' ? `/RuoYi-X-Admin/` : '/',
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
  };
});
