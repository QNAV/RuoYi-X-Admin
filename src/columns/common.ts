import { MapEnableDisableStatus } from '@/constants';
import type { ProItem } from '@/types';

// 序号
export const CIndex: ProItem = {
  title: '序号',
  dataIndex: 'index',
  key: 'index',
  valueType: 'indexBorder',
};

// 创建时间
export const CCreateTime: ProItem = {
  title: '创建时间',
  dataIndex: 'createTime',
  key: 'createTime',
  valueType: 'dateTime',
  hideInSearch: true,
};

// 更新时间
export const CUpdateTime: ProItem = {
  title: '更新时间',
  dataIndex: 'updateTime',
  key: 'updateTime',
  valueType: 'dateTime',
  hideInSearch: true,
};

// 启用/禁用 状态
export const CEnableDisableStatus: ProItem = {
  title: '状态',
  dataIndex: 'status',
  key: 'status',
  valueType: 'radio',
  valueEnum: MapEnableDisableStatus,
};

// 创建时间范围
export const CCreateTimeRange: ProItem = {
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
};
