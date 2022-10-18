import { generateColumns } from '@/utils';

// 创建时间
export const [TCreateTime, FCreateTime, DCreateTime] = generateColumns(
  {
    title: '创建时间',
    dataIndex: 'createTime',
    key: 'createTime',
    valueType: 'dateTime',
    editable: false,
    hideInSearch: true,
  },
  {
    table: {
      sorter: true,
    },
  },
);

// 创建时间范围
export const [TCreateTimeRange] = generateColumns(
  {
    title: '创建时间',
    dataIndex: 'createTimeRange',
    key: 'createTimeRange',
    valueType: 'dateTimeRange',
    hideInTable: true,
  },
  {
    table: {
      search: {
        transform: (value: any[]) => {
          return {
            beginCreateTime: value[0],
            endCreateTime: value[1],
          };
        },
      },
    },
    form: {
      transform: (value: any[]) => {
        return {
          beginCreateTime: value[0],
          endCreateTime: value[1],
        };
      },
    },
  },
);
