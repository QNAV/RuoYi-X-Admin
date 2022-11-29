import { getRoutesAccessKeysMap, getRoutesSettingsMap, lazyLoadLayouts, lazyLoadPage } from '@/utils';
import type { IndexRouteObject, NonIndexRouteObject } from 'react-router-dom';

interface CustomIndexRouteObject extends IndexRouteObject {
  name?: string;
  access?: string | string[];
  hideInTab?: boolean;
  closableTab?: boolean;
  isKeepAlive?: boolean;
}

interface CustomNonIndexRouteObject extends NonIndexRouteObject {
  name?: string;
  access?: string | string[];
  hideInTab?: boolean;
  closableTab?: boolean;
  isKeepAlive?: boolean;
  children?: Route[];
}

export type Route = CustomIndexRouteObject | CustomNonIndexRouteObject;

const customRoutes: Route[] = [
  {
    name: '测试菜单',
    path: 'demo',
    children: [
      {
        name: '测试单表',
        path: 'demo',
        element: lazyLoadPage('demo/demo'),
        access: 'demo:demo:list',
      },
      {
        name: '测试树表',
        path: 'tree',
        element: lazyLoadPage('demo/tree'),
        access: 'demo:tree:list',
      },
    ],
  },
];

export const layoutRoutes: Route[] = [
  {
    name: '首页',
    path: '/',
    element: lazyLoadLayouts(),
    children: [
      {
        name: '首页',
        index: true,
        element: lazyLoadPage('home'),
      },
      {
        name: '系统管理',
        path: 'system',
        children: [
          {
            name: '用户管理',
            path: 'user',
            element: lazyLoadPage('system/user'),
            access: 'system:user:list',
          },
          {
            name: '角色管理',
            path: 'role',
            element: lazyLoadPage('system/role'),
            access: 'system:role:list',
          },
          {
            name: '角色授权',
            path: 'role-auth/:roleId',
            element: lazyLoadPage('system/roleAuth'),
            access: 'system:role:list',
          },
          {
            name: '菜单管理',
            path: 'menu',
            element: lazyLoadPage('system/menu'),
            access: 'system:menu:list',
          },
          {
            name: '部门管理',
            path: 'dept',
            element: lazyLoadPage('system/dept'),
            access: 'system:dept:list',
          },
          {
            name: '岗位管理',
            path: 'post',
            element: lazyLoadPage('system/post'),
            access: 'system:post:list',
          },
          {
            name: '字典管理',
            path: 'dict',
            element: lazyLoadPage('system/dict'),
            access: 'system:dict:list',
          },
          {
            name: '字典管理-详情',
            path: 'dict/:dictType',
            element: lazyLoadPage('system/dictDetails'),
            access: 'system:dict:query',
            isKeepAlive: true,
          },
          {
            name: '参数管理',
            path: 'config',
            element: lazyLoadPage('system/config'),
            access: 'system:config:list',
          },
          {
            name: '通知公告',
            path: 'notice',
            element: lazyLoadPage('system/notice'),
            access: 'system:notice:list',
          },
          {
            name: '日志管理',
            path: 'log',
            children: [
              {
                name: '操作日志',
                path: 'operlog',
                element: lazyLoadPage('monitor/operlog'),
                access: 'monitor:operlog:list',
              },
              {
                name: '登录日志',
                path: 'logininfor',
                element: lazyLoadPage('monitor/logininfor'),
                access: 'monitor:logininfor:list',
              },
            ],
          },
          {
            name: '文件管理',
            path: 'oss',
            element: lazyLoadPage('system/oss'),
            access: 'system:oss:list',
          },
        ],
      },
      {
        name: '系统监控',
        path: 'monitor',
        children: [
          {
            name: '在线用户',
            path: 'online',
            element: lazyLoadPage('monitor/online'),
            access: 'monitor:online:list',
          },
          {
            name: '数据监控',
            path: 'druid',
            element: lazyLoadPage('monitor/druid'),
            access: 'monitor:druid:list',
          },
          {
            name: '缓存管理',
            path: 'cache',
            element: lazyLoadPage('monitor/cache'),
            access: 'monitor:cache:list',
          },
          {
            name: 'Admin 监控',
            path: 'Admin',
            element: lazyLoadPage('monitor/admin'),
            access: 'monitor:admin:list',
          },
          {
            name: '任务调度中心',
            path: 'XxlJob',
            element: lazyLoadPage('monitor/job'),
            access: 'monitor:xxljob:list',
          },
        ],
      },
      {
        name: '系统工具',
        path: 'tool',
        children: [
          {
            name: '表单构建',
            path: 'build',
            element: lazyLoadPage('tool/build'),
            access: 'tool:build:list',
          },
          {
            name: '代码生成',
            path: 'gen',
            element: lazyLoadPage('tool/gen'),
            access: 'tool:gen:list',
          },
          {
            name: '代码生成详情',
            path: 'gen-edit/:tableId',
            element: lazyLoadPage('tool/gen-edit'),
            access: 'tool:gen:list',
          },
          {
            name: '系统接口',
            path: 'swagger',
            element: lazyLoadPage('tool/swagger'),
            access: 'tool:swagger:list',
          },
        ],
      },
      {
        name: '个人中心',
        path: 'settings',
        element: lazyLoadPage('settings'),
      },
      {
        name: '403',
        path: '403',
        element: lazyLoadPage('exception/403'),
        hideInTab: true,
      },
      ...customRoutes,
      {
        name: '404',
        path: '*',
        element: lazyLoadPage('exception/404'),
        hideInTab: true,
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
];

export const accessKeysMap = getRoutesAccessKeysMap(routes);
export const accessRoutes = Object.keys(accessKeysMap);

export const settingsMap = getRoutesSettingsMap(routes);
export const isKeepAliveRoutes = Object.keys(settingsMap).filter((key) => settingsMap[key].isKeepAlive);
export const isKeepAliveRoutesSet = new Set(isKeepAliveRoutes);
