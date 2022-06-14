import { request } from '@/utils';

export type GetMenuListParams = {
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
};

// 查询菜单列表
export const reqGetMenuList = (params?: GetMenuListParams) => request({ url: '/system/menu/list', params });
