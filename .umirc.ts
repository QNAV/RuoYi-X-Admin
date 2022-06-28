import { defineConfig } from '@umijs/max';
import { join } from 'path';
import routes from './config/routes';

export default defineConfig({
  npmClient: 'pnpm',
  tailwindcss: {},
  layout: {
    title: 'RuoYi X Umi',
  },
  antd: {},
  model: {},
  initialState: {},
  moment2dayjs: {},
  access: {},
  mfsu: false,
  define: {
    LOGIN_PATH_NAME: '/login',
  },
  presets: [require.resolve('umi-presets-pro')],
  openAPI: {
    requestLibPath: "import { request } from '@/utils'",
    schemaPath: join(__dirname, 'config', 'open-api.json'),
    mock: false,
  },
  routes,
});
