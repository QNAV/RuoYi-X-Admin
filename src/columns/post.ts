import type { ProItem } from '@/types';

// 岗位编号
export const CPostId: ProItem = {
  dataIndex: 'postId',
  key: 'postId',
  title: '岗位编号',
  valueType: 'text',
  hideInSearch: true,
};

// 岗位编码
export const CPostCode: ProItem = {
  dataIndex: 'postCode',
  key: 'postCode',
  title: '岗位编码',
  valueType: 'text',
};

// 岗位名称
export const CPostName: ProItem = {
  dataIndex: 'postName',
  key: 'postName',
  title: '岗位名称',
  valueType: 'text',
};

// 显示顺序
export const CPostSort: ProItem = {
  dataIndex: 'postSort',
  key: 'postSort',
  title: '显示顺序',
  valueType: 'text',
  hideInSearch: true,
};
