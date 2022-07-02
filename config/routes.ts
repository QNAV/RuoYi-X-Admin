import type { Route } from '@ant-design/pro-layout/es/typings';

export const customRoutes: Route[] = [
  {
    path: '/system',
    routes: [
      {
        path: 'user',
        component: '@/pages/system/user',
      },
      {
        path: 'role',
        component: '@/pages/system/role',
      },
      {
        path: 'menu',
        component: '@/pages/system/menu',
        access: 'canReadSysMenu',
      },
      {
        path: 'dept',
        component: '@/pages/system/dept',
      },
      {
        path: 'post',
        component: '@/pages/system/post',
      },
      {
        path: 'dict',
        component: '@/pages/system/dict',
      },
      {
        path: 'config',
        component: '@/pages/system/config',
      },
      {
        path: 'notice',
        component: '@/pages/system/notice',
      },
      {
        name: 'log',
        path: 'log',
        routes: [
          {
            path: 'operlog',
            component: '@/pages/monitor/operlog',
          },
          {
            path: 'logininfor',
            component: '@/pages/monitor/logininfor',
          },
        ],
      },
      {
        path: 'oss',
        component: '@/pages/system/oss',
      },
    ],
  },
  {
    name: 'monitor',
    path: 'monitor',
    routes: [
      {
        path: 'online',
        component: '@/pages/monitor/online',
      },
      {
        path: 'druid',
        component: '@/pages/monitor/druid',
      },
      {
        path: 'cache',
        component: '@/pages/monitor/cache',
      },
      {
        path: 'Admin',
        component: '@/pages/monitor/admin',
        access: '/monitor/Admin',
      },
      {
        path: 'Xxljob',
        component: '@/pages/monitor/job',
      },
    ],
  },
  {
    path: 'tool',
    routes: [
      {
        path: 'build',
        component: '@/pages/tool/build',
      },
      {
        path: 'gen',
        component: '@/pages/tool/gen',
      },
      {
        path: 'gen-edit/:tableId',
        component: '@/pages/tool/gen-edit',
      },
      {
        path: 'swagger',
        component: '@/pages/tool/swagger',
      },
    ],
  },
  {
    path: 'demo',
    routes: [
      {
        path: 'demo',
        component: '@/pages/demo/demo',
      },
      {
        path: 'tree',
        component: '@/pages/demo/tree',
      },
    ],
  },
];

const publicRoutes: Route[] = [
  {
    name: '首页',
    path: '/',
    component: '@/pages/home',
  },
  {
    name: '个人中心',
    path: 'settings',
    component: '@/pages/settings',
  },
  {
    name: '登录',
    path: 'login',
    component: '@/pages/login',
    headerRender: false,
    footerRender: false,
    menuRender: false,
  },
  {
    path: '403',
    component: '@/pages/403',
    headerRender: false,
    footerRender: false,
    menuRender: false,
  },
  {
    path: '404',
    component: '@/pages/404',
    headerRender: false,
    footerRender: false,
    menuRender: false,
  },
  {
    path: '*',
    redirect: '404',
  },
];

export default [...customRoutes, ...publicRoutes];
