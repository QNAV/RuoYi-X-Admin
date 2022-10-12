import type { ProItem } from '@/typings';

// 字典编号
export const CDictId: ProItem = {
  title: '字典编号',
  dataIndex: 'dictId',
  key: 'dictId',
  valueType: 'text',
  hideInSearch: true,
  editable: false,
};

// 字典名称
export const CDictName: ProItem = {
  title: '字典名称',
  dataIndex: 'dictName',
  key: 'dictName',
  valueType: 'text',
};

// 字典类型
export const CDictType: ProItem = {
  title: '字典类型',
  dataIndex: 'dictType',
  key: 'dictType',
  valueType: 'text',
};
