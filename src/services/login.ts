import { request } from '@/utils';

export interface LoginByPwdParams {
  code: string;
  password: string;
  username: string;
  uuid: string;
}

export interface LoginBySmsParams {
  phonenumber: string;
  smsCode: string;
}

export interface LoginResponse {
  token: string;
}

export interface GetCaptchaImageResponse {
  img: string;
  uuid: string;
}

export interface Role {
  admin: boolean;
  createBy: string;
  createTime: string;
  dataScope: string;
  delFlag: string;
  deptCheckStrictly: boolean;
  deptIds: string;
  flag: boolean;
  menuCheckStrictly: boolean;
  menuIds: string;
  params: any;
  remark: string;
  roleId: number;
  roleKey: string;
  roleName: string;
  roleSort: string;
  searchValue: string;
  status: string;
  updateBy: string;
  updateTime: string;
}

export interface Dept {
  ancestors: string;
  children: any[];
  delFlag: string;
  deptId: number;
  deptName: string;
  email: string;
  leader: string;
  orderNum: string;
  params: any;
  parentId: number;
  parentName: string;
  phone: string;
  remark: string;
  searchValue: string;
  status: string;
  createBy: string;
  createTime: string;
  updateBy: string;
  updateTime: string;
}

export interface CurrentUser {
  avatar: string;
  userName: string;
  nickName: string;
  userId: string;
  sex: string;
  email: string;
  signature: string;
  remark: string;
  title: string;
  group: string;
  tags: { key: string; label: string }[];
  notifyCount: number;
  unreadCount: number;
  country: string;
  access: string;
  geographic: {
    province: { label: string; key: string };
    city: { label: string; key: string };
  };
  address: string;
  phonenumber: string;
  dept: Dept;
  roles: Role[];
  permissions: string[];
  createTime: string;
}

export interface GetUserInfoResponse {
  permissions: string[];
  roles: string[];
  user: CurrentUser;
}

/**
 * 其他元素
 *
 * 路由显示信息
 */
export interface Meta {
  /**
   * 设置该路由的图标，对应路径src/assets/icons/svg
   */
  icon: string;
  /**
   * 内链地址（http(s)://开头）
   */
  link: string;
  /**
   * 设置为true，则不会被 <keep-alive>缓存
   */
  noCache: boolean;
  /**
   * 设置该路由在侧边栏和面包屑中展示的名字
   */
  title: string;
}

/**
 * 路由配置信息
 */
export interface UserRoute {
  /**
   * 当你一个路由下面的 children 声明的路由大于1个时，自动会变成嵌套的模式--如组件页面
   */
  alwaysShow?: boolean;
  /**
   * 子路由
   */
  children: UserRoute[];
  /**
   * 组件地址
   */
  component: string;
  /**
   * 是否隐藏路由，当设置 true 的时候该路由不会再侧边栏出现
   */
  hidden: boolean;
  /**
   * 其他元素
   */
  meta: Meta;
  /**
   * 路由名字
   */
  name: string;
  /**
   * 路由地址
   */
  path: string;
  /**
   * 路由参数：如 {"id": 1, "name": "ry"}
   */
  query: string;
  /**
   * 重定向地址，当设置 noRedirect 的时候该路由在面包屑导航中不可被点击
   */
  redirect: string;
}

// 账号密码登录
export const reqLoginByPwd = (params: LoginByPwdParams) => request('/login', { method: 'POST', data: params });

// 短信验证码登录
export const reqLoginBySms = (params: LoginBySmsParams) => request('/login/sms', { method: 'POST', data: params });

// TODO 小程序登录

// 登出
export const reqLogout = () => request('/logout', { method: 'POST' });

// 获取图片验证码
export const reqGetCaptchaImage = () => request('/captchaImage');

// TODO 获取短信验证码

// 查询用户信息
export const reqGetUserInfo = () => request('/getInfo');

// 查询用户路由信息
export const reqGetUserRoutes = () => request('/getRouters');
