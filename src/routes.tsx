import { lazyLoadLayouts, lazyLoadPage } from '@/utils';
import type { IndexRouteObject, NonIndexRouteObject } from 'react-router-dom';

type CustomIndexRouteObject = IndexRouteObject & CustomRouteObject;

interface CustomNonIndexRouteObject extends NonIndexRouteObject, CustomRouteObject {
  children?: Route[];
}

export interface CustomRouteObject {
  /**
   * @description: 路由名称，用做 tab 标签页的标题
   */
  name?: string;
  /**
   * @description: 路由权限
   */
  access?: string | string[];
  /**
   * @description: 是否隐藏路由，用于隐藏 tab 标签页, 默认为 false
   */
  hideInTab?: boolean;
  /**
   * @description: 是否可关闭 tab 标签页, 默认为 true
   */
  closableTab?: boolean;
  /**
   * @description: 是否缓存页面, 默认为 false
   */
  isKeepAlive?: boolean;
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
    errorElement: lazyLoadPage('error'),
    element: lazyLoadLayouts(),
    children: [
      {
        name: '首页',
        index: true,
        element: lazyLoadPage('home'),
        closableTab: false,
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
            access: 'system:dict:list',
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
            name: '缓存管理',
            path: 'cache',
            element: lazyLoadPage('monitor/cache'),
            access: 'monitor:cache:list',
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
        ],
      },
      {
        name: '个人中心',
        path: 'settings',
        element: lazyLoadPage('settings'),
      },
      ...customRoutes,
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
