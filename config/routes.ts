import type { MenuDataItem } from '@ant-design/pro-components';

const customRoutes: MenuDataItem[] = [
  {
    name: '系统管理',
    path: '/system',
    routes: [
      {
        name: '用户管理',
        path: '/system/user',
        component: '@/pages/system/user',
        isKeepalive: true,
      },
      {
        name: '角色管理',
        path: '/system/role',
        component: '@/pages/system/role',
        access: 'canReadSysRole',
        isKeepalive: true,
      },
      {
        name: '菜单管理',
        path: '/system/menu',
        component: '@/pages/system/menu',
        access: 'canReadSysMenu',
        isKeepalive: true,
      },
      {
        name: '部门管理',
        path: '/system/dept',
        component: '@/pages/system/dept',
        isKeepalive: true,
      },
      {
        name: '岗位管理',
        path: '/system/post',
        component: '@/pages/system/post',
        isKeepalive: true,
      },
      {
        name: '字典管理',
        path: '/system/dict',
        component: '@/pages/system/dict',
        isKeepalive: true,
      },
      {
        name: '参数管理',
        path: '/system/config',
        component: '@/pages/system/config',
        isKeepalive: true,
      },
      {
        name: '通知公告',
        path: '/system/notice',
        component: '@/pages/system/notice',
        isKeepalive: true,
      },
      {
        name: '日志管理',
        path: '/system/log',
        routes: [
          {
            name: '操作日志',
            path: '/system/log/operlog',
            component: '@/pages/monitor/operlog',
            isKeepalive: true,
          },
          {
            name: '登录日志',
            path: '/system/log/logininfor',
            component: '@/pages/monitor/logininfor',
            isKeepalive: true,
          },
        ],
      },
      {
        name: '文件管理',
        path: '/system/oss',
        component: '@/pages/system/oss',
        isKeepalive: true,
      },
    ],
  },
  {
    name: '系统监控',
    path: '/monitor',
    routes: [
      {
        name: '在线用户',
        path: '/monitor/online',
        component: '@/pages/monitor/online',
        isKeepalive: true,
      },
      {
        name: '数据监控',
        path: '/monitor/druid',
        component: '@/pages/monitor/druid',
        isKeepalive: true,
      },
      {
        name: '缓存管理',
        path: '/monitor/cache',
        component: '@/pages/monitor/cache',
        isKeepalive: true,
      },
      {
        name: 'Admin 监控',
        path: '/monitor/Admin',
        component: '@/pages/monitor/admin',
        access: '/monitor/Admin',
        isKeepalive: true,
      },
      {
        name: '任务调度中心',
        path: '/monitor/Xxljob',
        component: '@/pages/monitor/job',
        isKeepalive: true,
      },
    ],
  },
  {
    name: '系统工具',
    path: '/tool',
    routes: [
      {
        name: '表单构建',
        path: '/tool/build',
        component: '@/pages/tool/build',
        isKeepalive: true,
      },
      {
        name: '代码生成',
        path: '/tool/gen',
        component: '@/pages/tool/gen',
        isKeepalive: true,
      },
      {
        name: '代码生成详情',
        path: '/tool/gen-edit/:tableId',
        component: '@/pages/tool/gen-edit',
        isKeepalive: true,
      },
      {
        name: '系统接口',
        path: '/tool/swagger',
        component: '@/pages/tool/swagger',
        isKeepalive: true,
      },
    ],
  },
  {
    name: '测试菜单',
    path: '/demo',
    routes: [
      {
        name: '测试单表',
        path: '/demo/demo',
        component: '@/pages/demo/demo',
        isKeepalive: true,
      },
      {
        name: '测试树表',
        path: '/demo/tree',
        component: '@/pages/demo/tree',
        isKeepalive: true,
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
    path: '/settings',
    component: '@/pages/settings',
    hideInMenu: true,
    isKeepalive: true,
  },
  {
    name: '登录',
    path: '/login',
    component: '@/pages/login',
    hideInMenu: true,
    headerRender: false,
    footerRender: false,
    menuRender: false,
  },
  {
    name: '403',
    path: '/403',
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
