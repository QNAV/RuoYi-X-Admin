import { getColumn } from '@/utils';

// 创建时间
export const CCreateTime = getColumn('table', {
  title: '创建时间',
  dataIndex: 'createTime',
  key: 'createTime',
  valueType: 'dateTime',
  editable: false,
  hideInSearch: true,
  sorter: true,
});

// 创建时间范围
export const CCreateTimeRange = getColumn('table', {
  title: '创建时间',
  dataIndex: 'createTimeRange',
  key: 'createTimeRange',
  valueType: 'dateTimeRange',
  hideInTable: true,
  search: {
    transform: (value: any[]) => {
      return {
        beginCreateTime: value[0],
        endCreateTime: value[1],
      };
    },
  },
});
