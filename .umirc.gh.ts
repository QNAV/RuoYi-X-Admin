import { defineConfig } from '@umijs/max';

export default defineConfig({
  define: {
    TOKEN_KEY: 'RUOYI_TOKEN',
    API_HOST: 'https://test-ryx-admin-api.p.quicknav.cn',
    LOGIN_PATH_NAME: '/RuoYi-X-Umi/login',
  },
  publicPath: '/RuoYi-X-Umi/',
  base: '/RuoYi-X-Umi/',
  headScripts: [
    `(function () {
      let redirect = sessionStorage.redirect;
      delete sessionStorage.redirect;
      if (redirect && redirect !== location.href) {
        history.replaceState(null, null, redirect);
      }
    })();`,
  ],
});
