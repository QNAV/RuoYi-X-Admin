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
  },
  presets: [require.resolve('umi-presets-pro')],
  openAPI: {
    requestLibPath: "import { request } from '@/utils'",
    schemaPath: 'https://test-ryx-admin-api.p.quicknav.cn/v3/api-docs?group=2.%E7%B3%BB%E7%BB%9F%E6%A8%A1%E5%9D%97',
    projectName: 'swagger',
    mock: false,
  },
  routes,
  keepalive: [/./],
  tabsLayout: {},
});
