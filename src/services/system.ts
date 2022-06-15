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

export type MenuData = MenuDataItem[];

// 查询菜单列表
export const reqGetMenuList = (params?: GetMenuListParams) => request<MenuData>({ url: '/system/menu/list', params });
