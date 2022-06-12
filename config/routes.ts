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

const routes: Route[] = [
  {
    name: '首页',
    path: '/',
    component: '@/pages/home',
    hideInMenu: true,
  },
  {
    name: '登录',
    path: '/login',
    component: '@/pages/login',
    headerRender: false,
    footerRender: false,
    menuRender: false,
    menuHeaderRender: false,
    hideInMenu: true,
  },
  {
    name: '个人中心',
    path: '/settings',
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

export default routes;
