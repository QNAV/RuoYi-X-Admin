import type { EnableDisableStatus, MenuType } from '@/constants';
import { request } from '@/utils';
import type { Key } from 'react';

export interface GetMenuListParams {
  menuName?: string;
  visible?: EnableDisableStatus;
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
   * 菜单图标
   */
  icon?: string;
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
  params?: Record<string, Key>;
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
