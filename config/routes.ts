import type { MenuDataItem } from '@ant-design/pro-components';

const customRoutes: MenuDataItem[] = [
  {
    name: '系统管理',
    path: '/system',
    routes: [
      {
        name: '用户管理',
        path: 'user',
        component: '@/pages/system/user',
      },
      {
        name: '角色管理',
        path: 'role',
        component: '@/pages/system/role',
        access: 'canReadSysRole',
      },
      {
        name: '菜单管理',
        path: 'menu',
        component: '@/pages/system/menu',
        access: 'canReadSysMenu',
      },
      {
        name: '部门管理',
        path: 'dept',
        component: '@/pages/system/dept',
      },
      {
        name: '岗位管理',
        path: 'post',
        component: '@/pages/system/post',
      },
      {
        name: '字典管理',
        path: 'dict',
        component: '@/pages/system/dict',
      },
      {
        name: '参数管理',
        path: 'config',
        component: '@/pages/system/config',
      },
      {
        name: '通知公告',
        path: 'notice',
        component: '@/pages/system/notice',
      },
      {
        name: '日志管理',
        path: 'log',
        routes: [
          {
            name: '操作日志',
            path: 'operlog',
            component: '@/pages/monitor/operlog',
          },
          {
            name: '登录日志',
            path: 'logininfor',
            component: '@/pages/monitor/logininfor',
          },
        ],
      },
      {
        name: '文件管理',
        path: 'oss',
        component: '@/pages/system/oss',
      },
    ],
  },
  {
    name: '系统监控',
    path: 'monitor',
    routes: [
      {
        name: '在线用户',
        path: 'online',
        component: '@/pages/monitor/online',
      },
      {
        name: '数据监控',
        path: 'druid',
        component: '@/pages/monitor/druid',
      },
      {
        name: '缓存管理',
        path: 'cache',
        component: '@/pages/monitor/cache',
      },
      {
        name: 'Admin 监控',
        path: 'Admin',
        component: '@/pages/monitor/admin',
        access: '/monitor/Admin',
      },
      {
        name: '任务调度中心',
        path: 'Xxljob',
        component: '@/pages/monitor/job',
      },
    ],
  },
  {
    name: '系统工具',
    path: 'tool',
    routes: [
      {
        name: '表单构建',
        path: 'build',
        component: '@/pages/tool/build',
      },
      {
        name: '代码生成',
        path: 'gen',
        component: '@/pages/tool/gen',
      },
      {
        name: '代码生成详情',
        path: 'gen-edit/:tableId',
        component: '@/pages/tool/gen-edit',
      },
      {
        name: '系统接口',
        path: 'swagger',
        component: '@/pages/tool/swagger',
      },
    ],
  },
  {
    name: '测试菜单',
    path: 'demo',
    routes: [
      {
        name: '测试单表',
        path: 'demo',
        component: '@/pages/demo/demo',
      },
      {
        name: '测试树表',
        path: 'tree',
        component: '@/pages/demo/tree',
      },
    ],
  },
];

export const publicRoutes: MenuDataItem[] = [
  {
    name: '首页',
    path: '/',
    component: '@/pages/home',
    hideInMenu: true,
  },
  {
    name: '个人中心',
    path: 'settings',
    component: '@/pages/settings',
    hideInMenu: true,
  },
  {
    name: '登录',
    path: 'login',
    component: '@/pages/login',
    hideInMenu: true,
    headerRender: false,
    footerRender: false,
    menuRender: false,
  },
  {
    name: '403',
    path: '403',
    component: '@/pages/403',
    hideInMenu: true,
  },
  {
    name: '404',
    path: '*',
    component: '@/pages/404',
    hideInMenu: true,
  },
];

export default [...customRoutes, ...publicRoutes];
