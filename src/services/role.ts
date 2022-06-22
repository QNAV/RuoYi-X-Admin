import { request } from '@/utils';

// 查询角色列表
export const reqGetRoleList = (params: API.PaginationParameters) =>
  request({ url: '/system/role/list', params, convertToProData: true });
