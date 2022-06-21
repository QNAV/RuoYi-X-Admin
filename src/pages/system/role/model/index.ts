import { useQuery } from 'react-query';

const key = 'systemRole';

export const queryKey = [key, 'roleList'];

// 查询角色列表
export const useQueryRoleList = () => useQuery;
