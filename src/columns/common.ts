import { EnableDisableStatusMap } from '@/constants';
import type { ProItem } from '@/types';

// 序号
export const CIndex: ProItem = {
  title: '序号',
  dataIndex: 'index',
  key: 'index',
  valueType: 'indexBorder',
  editable: false,
  width: 60,
};

// 创建时间
export const CCreateTime: ProItem = {
  title: '创建时间',
  dataIndex: 'createTime',
  key: 'createTime',
  valueType: 'dateTime',
  editable: false,
  hideInSearch: true,
  sorter: true,
};

// 更新时间
export const CUpdateTime: ProItem = {
  title: '更新时间',
  dataIndex: 'updateTime',
  key: 'updateTime',
  valueType: 'dateTime',
  editable: false,
  hideInSearch: true,
  sorter: true,
};

// 启用/禁用 状态
export const CEnableDisableStatus: ProItem = {
  title: '状态',
  dataIndex: 'status',
  key: 'status',
  valueType: 'radio',
  valueEnum: EnableDisableStatusMap,
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

// 备注
export const CRemark: ProItem = {
  title: '备注',
  dataIndex: 'remark',
  key: 'remark',
  valueType: 'textarea',
  hideInSearch: true,
};

// 排序
export const COrderNum: ProItem = {
  title: '排序',
  dataIndex: 'orderNum',
  key: 'orderNum',
  valueType: 'digit',
};
