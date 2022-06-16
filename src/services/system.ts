import type { MenuType } from '@/constants';
import { request } from '@/utils';

export interface GetMenuListParams {
  menuId?: string;
  menuName?: string;
  parentId?: string;
  orderNum?: string;
  path?: string;
  component?: string;
  isFrame?: string;
  isCache?: string;
  menuType?: string;
  visible?: string;
  status?: string;
  perms?: string;
  icon?: string;
  createBy?: string;
  createTime?: string;
  updateBy?: string;
  updateTime?: string;
  remark?: string;
  pageSize?: string;
  currentPage?: string;
  filter?: string;
  sorter?: string;
}

export interface MenuDataItem {
  searchValue?: any;
  createBy: string;
  createTime: string;
  updateBy: string;
  updateTime: string;
  params: Record<any, any>;
  parentName?: any;
  parentId: number;
  children: MenuDataItem[];
  menuId: number;
  menuName: string;
  orderNum: number;
  path: string;
  component: string;
  queryParam: string;
  isFrame: string;
  isCache: string;
  menuType: MenuType;
  visible: string;
  status: string;
  perms: string;
  icon: string;
  remark: string;
}

/**
 * 菜单权限业务对象Req
 */
export interface CreateMenuData {
  /**
   * 组件路径
   */
  component?: string;
  /**
   * 创建者
   */
  createBy?: string;
  /**
   * 创建时间
   */
  createTime?: Date;
  /**
   * 菜单图标
   */
  icon?: string;
  /**
   * 是否缓存（0缓存 1不缓存）
   */
  isCache?: string;
  /**
   * 是否为外链（0是 1否）
   */
  isFrame?: string;
  /**
   * 菜单ID
   */
  menuId?: number;
  /**
   * 菜单名称
   */
  menuName?: string;
  /**
   * 类型（M目录 C菜单 F按钮）
   */
  menuType?: string;
  /**
   * 显示顺序
   */
  orderNum?: number;
  /**
   * 请求参数
   */
  params?: { [key: string]: any };
  /**
   * 父菜单ID
   */
  parentId?: number;
  /**
   * 父菜单名称
   */
  parentName?: string;
  /**
   * 路由地址
   */
  path?: string;
  /**
   * 权限字符串
   */
  perms?: string;
  /**
   * 路由参数
   */
  queryParam?: string;
  /**
   * 备注
   */
  remark?: string;
  /**
   * 搜索值
   */
  searchValue?: string;
  /**
   * 菜单状态（0显示 1隐藏）
   */
  status?: string;
  /**
   * 更新者
   */
  updateBy?: string;
  /**
   * 更新时间
   */
  updateTime?: Date;
  /**
   * 显示状态（0显示 1隐藏）
   */
  visible?: string;
}

export type MenuData = MenuDataItem[];

// 查询菜单列表
export const reqGetMenuList = (params?: GetMenuListParams) => request<MenuData>({ url: '/system/menu/list', params });

// 删除菜单
export const reqDeleteMenu = (menuId: number) => request({ url: `/system/menu/${menuId}`, method: 'DELETE' });

// 新增菜单
export const reqCreateMenu = (data: CreateMenuData) => request({ url: '/system/menu', method: 'POST', data });

// 更新菜单
export const reqUpdateMenu = (data: CreateMenuData) => request({ url: '/system/menu', method: 'PUT', data });

// 查询菜单详情
export const reqGetMenuDetail = (menuId: number) => request<MenuDataItem>({ url: `/system/menu/${menuId}` });
