import {
  getRoutesAccessKeysMap,
  getRoutesKeepAliveKeys,
  getRoutesKeepAliveLocal,
  lazyLoadLayouts,
  lazyLoadPage,
} from '@/utils';
import type { IndexRouteObject, NonIndexRouteObject } from 'react-router-dom';

interface CustomIndexRouteObject extends IndexRouteObject {
  name?: string;
  access?: string;
  isKeepAlive?: boolean;
}

interface CustomNonIndexRouteObject extends NonIndexRouteObject {
  name?: string;
  access?: string;
  isKeepAlive?: boolean;
  children?: Route[];
}

export type Route = CustomIndexRouteObject | CustomNonIndexRouteObject;

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
            access: 'canReadSysUser',
            isKeepAlive: true,
          },
          {
            name: '角色管理',
            path: 'role',
            element: lazyLoadPage('system/role'),
            access: 'canReadSysRole',
            isKeepAlive: true,
          },
          {
            name: '菜单管理',
            path: 'menu',
            element: lazyLoadPage('system/menu'),
            access: 'canReadSysMenu',
            isKeepAlive: true,
          },
          {
            name: '部门管理',
            path: 'dept',
            element: lazyLoadPage('system/dept'),
            access: 'canReadSysDept',
            isKeepAlive: true,
          },
          {
            name: '岗位管理',
            path: 'post',
            element: lazyLoadPage('system/post'),
            access: 'canReadSysPost',
            isKeepAlive: true,
          },
          {
            name: '字典管理',
            path: 'dict',
            element: lazyLoadPage('system/dict'),
            access: 'canReadSysDict',
            isKeepAlive: true,
          },
          {
            name: '字典详情',
            path: 'dict/:dictType',
            element: lazyLoadPage('system/dictDetails'),
            access: 'canReadSysDict',
            isKeepAlive: true,
          },
          {
            name: '参数管理',
            path: 'config',
            element: lazyLoadPage('system/config'),
            access: 'canReadSysConfig',
            isKeepAlive: true,
          },
          {
            name: '通知公告',
            path: 'notice',
            element: lazyLoadPage('system/notice'),
            access: 'canReadSysNotice',
            isKeepAlive: true,
          },
          {
            name: '日志管理',
            path: 'log',
            children: [
              {
                name: '操作日志',
                path: 'operlog',
                element: lazyLoadPage('monitor/operlog'),
                access: 'canReadSysOperLog',
                isKeepAlive: true,
              },
              {
                name: '登录日志',
                path: 'logininfor',
                element: lazyLoadPage('monitor/logininfor'),
                access: 'canReadSysLogininfor',
                isKeepAlive: true,
              },
            ],
          },
          {
            name: '文件管理',
            path: 'oss',
            element: lazyLoadPage('system/oss'),
            access: 'canReadSysOSS',
            isKeepAlive: true,
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
            access: 'canReadMonitorOnline',
            isKeepAlive: true,
          },
          {
            name: '数据监控',
            path: 'druid',
            element: lazyLoadPage('monitor/druid'),
            access: 'canReadMonitorDruid',
            isKeepAlive: true,
          },
          {
            name: '缓存管理',
            path: 'cache',
            element: lazyLoadPage('monitor/cache'),
            access: 'canReadMonitorCache',
            isKeepAlive: true,
          },
          {
            name: 'Admin 监控',
            path: 'admin',
            element: lazyLoadPage('monitor/admin'),
            access: 'canReadMonitorAdmin',
            isKeepAlive: true,
          },
          {
            name: '任务调度中心',
            path: 'xxl-job',
            element: lazyLoadPage('monitor/job'),
            access: 'canReadMonitorXxlJob',
            isKeepAlive: true,
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
            access: 'canReadToolBuild',
            isKeepAlive: true,
          },
          {
            name: '代码生成',
            path: 'gen',
            element: lazyLoadPage('tool/gen'),
            access: 'canReadToolGen',
            isKeepAlive: true,
          },
          {
            name: '代码生成详情',
            path: 'gen-edit/:tableId',
            element: lazyLoadPage('tool/gen-edit'),
            access: 'canQueryToolGen',
            isKeepAlive: true,
          },
          {
            name: '系统接口',
            path: 'swagger',
            element: lazyLoadPage('tool/swagger'),
            access: 'canReadToolSwagger',
            isKeepAlive: true,
          },
        ],
      },
      {
        name: '测试菜单',
        path: 'demo',
        children: [
          {
            name: '测试单表',
            path: 'demo',
            element: lazyLoadPage('demo/demo'),
            access: 'canReadDemoDemo',
            isKeepAlive: true,
          },
          {
            name: '测试树表',
            path: 'tree',
            element: lazyLoadPage('demo/tree'),
            access: 'canReadDemoTree',
            isKeepAlive: true,
          },
        ],
      },
      {
        name: '个人中心',
        path: 'settings',
        element: lazyLoadPage('settings'),
        isKeepAlive: true,
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

export const accessKeysMap = getRoutesAccessKeysMap(routes);
export const keepAliveRoutes = getRoutesKeepAliveKeys(layoutRoutes);
export const keepAliveLocal = getRoutesKeepAliveLocal(layoutRoutes);
