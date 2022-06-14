// https://next.umijs.org/docs/max/layout-menu
export interface MenuDataItem {
  // 菜单名称
  name?: string;
  // 图标
  icon?: string;
  // 新页面打开
  target?: string;
  // 不展示顶栏
  headerRender?: boolean;
  // 不展示页脚
  footerRender?: boolean;
  // 不展示菜单
  menuRender?: boolean;
  // 不展示菜单顶栏
  menuHeaderRender?: boolean;
  // 权限配置，需要与 plugin-access 插件配合使用
  access?: string;
  // 隐藏子菜单
  hideChildrenInMenu?: boolean;
  // 隐藏自己和子菜单
  hideInMenu?: boolean;
  // 在面包屑中隐藏
  hideInBreadcrumb?: boolean;
  // 子项往上提，仍旧展示,
  flatMenu?: boolean;
}

// https://next.umijs.org/docs/guides/routes
export interface Route extends MenuDataItem {
  path: string;
  component?: string;
  // 表示是否严格匹配，即 location 是否和 path 完全对应上
  exact?: boolean;
  // 配置路由跳转
  redirect?: string;
  // 配置路由的高阶组件封装
  wrappers?: string;
  // 子路由
  routes?: Route[];
}

const publicRoutes: Route[] = [
  {
    name: '首页',
    path: '/',
    component: '@/pages/home',
    hideInMenu: true,
  },
  {
    name: '登录',
    path: 'login',
    component: '@/pages/login',
    headerRender: false,
    footerRender: false,
    menuRender: false,
    menuHeaderRender: false,
    hideInMenu: true,
  },
  {
    name: '个人中心',
    path: 'settings',
    component: '@/pages/settings',
    hideInMenu: true,
  },
  {
    path: '403',
    component: '@/pages/403',
  },
  {
    path: '*',
    component: '@/pages/404',
  },
];

const routes: Route[] = [
  {
    name: 'system',
    path: '/system',
    routes: [
      {
        name: 'user',
        path: 'user',
        component: '@/pages/system/user',
        access: '/system/user',
      },
      {
        name: 'menu',
        path: 'menu',
        component: '@/pages/system/menu',
        access: '/system/menu',
      },
      {
        name: 'role',
        path: 'role',
        component: '@/pages/system/role',
        access: '/system/role',
      },
      {
        name: 'dept',
        path: 'dept',
        component: '@/pages/system/dept',
        access: '/system/dept',
      },
      {
        name: 'post',
        path: 'post',
        component: '@/pages/system/post',
        access: '/system/post',
      },
      {
        name: 'dict',
        path: 'dict',
        component: '@/pages/system/dict',
        access: '/system/dict',
      },
      {
        name: 'config',
        path: 'config',
        component: '@/pages/system/config',
        access: '/system/config',
      },
      {
        name: 'notice',
        path: 'notice',
        component: '@/pages/system/notice',
        access: '/system/notice',
      },
      {
        name: 'log',
        path: 'log',
        routes: [
          {
            name: 'operlog',
            path: 'operlog',
            component: '@/pages/monitor/operlog',
            access: '/system/log/operlog',
          },
          {
            name: 'loginInfo',
            path: 'logininfor',
            component: '@/pages/monitor/logininfor',
            access: '/system/log/logininfor',
          },
        ],
      },
      {
        name: 'oss',
        path: 'oss',
        component: '@/pages/system/oss',
        access: '/system/oss',
      },
    ],
  },
  {
    name: 'monitor',
    path: 'monitor',
    routes: [
      {
        name: 'online',
        path: 'online',
        component: '@/pages/monitor/online',
        access: '/monitor/online',
      },
      {
        name: 'Xxljob',
        path: 'Xxljob',
        component: '@/pages/monitor/job',
        access: '/monitor/XxlJob',
      },
      {
        name: 'druid',
        path: 'druid',
        component: '@/pages/monitor/druid',
        access: '/monitor/druid',
      },
      {
        name: 'Admin',
        path: 'Admin',
        component: '@/pages/monitor/admin',
        access: '/monitor/Admin',
      },
      {
        name: 'cache',
        path: 'cache',
        component: '@/pages/monitor/cache',
        access: '/monitor/cache',
      },
    ],
  },
  {
    name: 'tool',
    path: 'tool',
    routes: [
      {
        name: 'gen',
        path: 'gen',
        component: '@/pages/tool/gen',
        access: '/tool/gen',
      },
      {
        name: 'build',
        path: 'build',
        component: '@/pages/tool/build',
        access: '/tool/build',
      },
      {
        name: 'swagger',
        path: 'swagger',
        component: '@/pages/tool/swagger',
        access: '/tool/swagger',
      },
    ],
  },
];

export default [...routes, ...publicRoutes];
