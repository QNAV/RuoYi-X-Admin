import { defineConfig } from '@umijs/max';
import routes from './config/routes';

export default defineConfig({
  npmClient: 'pnpm',
  tailwindcss: {},
  layout: {
    title: '若依后台管理系统',
  },
  antd: {},
  model: {},
  initialState: {},
  moment2dayjs: {},
  access: {},
  define: {
    LOGIN_PATH_NAME: '/login',
  },
  routes,
});
