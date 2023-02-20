import { RouteError } from '@/components';
import Layouts from '@/layouts';
import { lazyLoad } from '@/utils';
import type { RouteObject } from 'react-router-dom';

const customRoutes: RouteObject[] = [
  {
    path: 'demo',
    children: [
      {
        path: 'demo',
        element: lazyLoad('demo/demo'),
      },
      {
        path: 'tree',
        element: lazyLoad('demo/tree'),
      },
    ],
  },
];

export const layoutRoutes: RouteObject[] = [
  {
    path: '/',
    errorElement: <RouteError />,
    element: <Layouts />,
    children: [
      {
        index: true,
        element: lazyLoad('home'),
      },
      {
        path: 'system',
        children: [
          {
            path: 'user',
            element: lazyLoad('system/user'),
          },
          {
            path: 'role',
            element: lazyLoad('system/role'),
          },
          {
            path: 'role-auth/:roleId',
            element: lazyLoad('system/roleAuth'),
          },
          {
            path: 'menu',
            element: lazyLoad('system/menu'),
          },
          {
            path: 'dept',
            element: lazyLoad('system/dept'),
          },
          {
            path: 'post',
            element: lazyLoad('system/post'),
          },
          {
            path: 'dict',
            element: lazyLoad('system/dict'),
          },
          {
            path: 'dict/:dictType',
            element: lazyLoad('system/dictDetails'),
          },
          {
            path: 'config',
            element: lazyLoad('system/config'),
          },
          {
            path: 'notice',
            element: lazyLoad('system/notice'),
          },
          {
            path: 'log',
            children: [
              {
                path: 'operlog',
                element: lazyLoad('monitor/operlog'),
              },
              {
                path: 'logininfor',
                element: lazyLoad('monitor/logininfor'),
              },
            ],
          },
          {
            path: 'oss',
            element: lazyLoad('system/oss'),
          },
          {
            path: 'oss-config',
            element: lazyLoad('system/ossConfig'),
          },
        ],
      },
      {
        path: 'monitor',
        children: [
          {
            path: 'admin',
            element: lazyLoad('monitor/admin'),
          },
          {
            path: 'online',
            element: lazyLoad('monitor/online'),
          },
          {
            path: 'cache',
            element: lazyLoad('monitor/cache'),
          },
          {
            path: 'cache-list',
            element: lazyLoad('monitor/cacheList'),
          },
          {
            path: 'xxl-job',
            element: lazyLoad('monitor/xxlJob'),
          },
        ],
      },
      {
        path: 'tool',
        children: [
          { path: 'build', element: lazyLoad('tool/build') },
          {
            path: 'gen',
            element: lazyLoad('tool/gen'),
          },
          {
            path: 'gen-edit/:tableId',
            element: lazyLoad('tool/gen-edit'),
          },
          {
            path: 'swagger',
            element: lazyLoad('tool/swagger'),
          },
        ],
      },
      {
        path: 'settings',
        element: lazyLoad('settings'),
      },
      ...customRoutes,
    ],
  },
];

export const routes: RouteObject[] = [
  ...layoutRoutes,
  {
    path: 'login',
    element: lazyLoad('login'),
  },
];
