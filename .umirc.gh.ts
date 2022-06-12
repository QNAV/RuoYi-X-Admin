import { defineConfig } from '@umijs/max';

export default defineConfig({
  define: {
    LOGIN_PATH_NAME: '/RuoYi-X-Umi/login',
    TOKEN_KEY: 'RUOYI_TOKEN',
    API_HOST: 'http://localhost:8080',
  },
  publicPath: '/RuoYi-X-Umi/',
});
