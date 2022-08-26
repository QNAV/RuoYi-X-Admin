import { defineConfig } from '@umijs/max';
import routes from './routes';

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
  openAPI: [
    {
      requestLibPath: "import { request } from '@/utils'",
      schemaPath: 'https://test-ryx-admin-api.p.quicknav.cn/v3/api-docs?group=2.%E7%B3%BB%E7%BB%9F%E6%A8%A1%E5%9D%97',
      projectName: 'sys',
      mock: false,
    },
    {
      requestLibPath: "import { requestGenerator as request } from '@/utils'",
      schemaPath:
        'https://test-ryx-admin-api.p.quicknav.cn/v3/api-docs?group=3.%E4%BB%A3%E7%A0%81%E7%94%9F%E6%88%90%E6%A8%A1%E5%9D%97',
      projectName: 'gen',
      mock: false,
    },
  ],
  routes,
});
