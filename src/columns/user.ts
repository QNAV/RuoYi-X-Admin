import type { ProItem } from '@/typings';

// 用户编号
export const CUserId: ProItem = {
  dataIndex: 'userId',
  key: 'userId',
  title: '用户编号',
  valueType: 'text',
  editable: false,
  hideInSearch: true,
};

// 用户名称
export const CUserName: ProItem = {
  dataIndex: 'userName',
  key: 'userName',
  title: '用户名称',
  valueType: 'text',
};

// 用户昵称
export const CNickName: ProItem = {
  dataIndex: 'nickName',
  key: 'nickName',
  title: '用户昵称',
  valueType: 'text',
  hideInSearch: true,
};

// 部门名称
export const CUserDeptName: ProItem = {
  dataIndex: ['dept', 'deptName'],
  key: 'deptDeptName',
  title: '部门名称',
  valueType: 'text',
  hideInSearch: true,
};

// 手机号码
export const CUserPhone: ProItem = {
  dataIndex: 'phoneNumber',
  key: 'phoneNumber',
  title: '手机号码',
  valueType: 'text',
};
