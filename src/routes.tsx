import { getRoutesKeepAliveKeys, getRoutesKeepAliveLocal, lazyLoadLayouts, lazyLoadPage } from '@/utils';
import type { RouteObject } from 'react-router-dom';
import { useRoutes } from 'react-router-dom';

export interface Route extends RouteObject {
  name?: string;
  isKeepalive?: boolean;
  children?: Route[];
}

export const layoutRoutes: Route[] = [
  {
    name: '首页',
    path: '/',
    element: lazyLoadLayouts(),
    children: [
      {
        name: '示例 1',
        path: 'demo1',
        element: lazyLoadPage('demo1'),
        isKeepalive: true,
      },
      {
        name: '示例 2',
        path: 'demo2',
        element: lazyLoadPage('demo2'),
        isKeepalive: true,
      },
    ],
  },
];

export const routes: Route[] = [
  ...layoutRoutes,
  {
    name: '登录',
    path: 'login',
    element: lazyLoadPage('login'),
  },
  {
    name: '500',
    path: '500',
    element: lazyLoadPage('exception/500'),
  },
  {
    name: '403',
    path: '403',
    element: lazyLoadPage('exception/403'),
  },
  {
    name: '404',
    path: '*',
    element: lazyLoadPage('exception/404'),
  },
];

export const keepAliveRoutes = getRoutesKeepAliveKeys(layoutRoutes);
export const keepAliveLocal = getRoutesKeepAliveLocal(layoutRoutes);

export const Element = () => useRoutes(routes);
