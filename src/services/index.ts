import { request } from '@/utils';

export const reqGetDeptTree = request('/system/user/deptTree', {
  method: 'GET',
});
