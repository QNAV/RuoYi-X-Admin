import type { ProItem } from '@/types';

// 角色名称
export const CRoleName: ProItem = {
  title: '角色名称',
  dataIndex: 'roleName',
  key: 'roleName',
  valueType: 'text',
};

// 角色ID
export const CRoleId: ProItem = {
  title: '角色ID',
  dataIndex: 'roleId',
  key: 'roleId',
  valueType: 'text',
  hideInSearch: true,
  editable: false,
};

// 权限字符
export const CRoleKey: ProItem = {
  title: '权限字符',
  dataIndex: 'roleKey',
  key: 'roleKey',
  valueType: 'text',
};

// 角色排序
export const CRoleSort: ProItem = {
  title: '显示排序',
  dataIndex: 'roleSort',
  key: 'roleSort',
  valueType: 'text',
  hideInSearch: true,
};
