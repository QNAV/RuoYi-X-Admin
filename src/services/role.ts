// 查询角色列表
import { convertPaginationData, request } from '@/utils';

export const reqGetRoleList = (params: API.PaginationParameters) =>
  request<API.PaginationData>({ url: '/system/role/list', params }).then((data) => convertPaginationData(data));
