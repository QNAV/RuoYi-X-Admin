import { defineConfig } from '@umijs/max';
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
  define: {
    LOGIN_PATH_NAME: '/login',
    GITHUB_URL: 'https://github.com/QNAV/RuoYi-X-Umi',
  },
  routes,
});
