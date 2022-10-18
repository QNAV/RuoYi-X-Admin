import { EnableDisableStatusMap } from '@/constants';
import type { ProItem } from '@/typings';
import { generateColumns } from '@/utils';

// 序号
export const CIndex: ProItem = {
  title: '序号',
  dataIndex: 'index',
  key: 'index',
  valueType: 'indexBorder',
  editable: false,
  width: 60,
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
  valueType: 'select',
  valueEnum: EnableDisableStatusMap,
};

// 备注
export const CRemark: ProItem = {
  title: '备注',
  dataIndex: 'remark',
  key: 'remark',
  valueType: 'textarea',
  hideInSearch: true,
};

export const [TRemark, FRemark, DRemark] = generateColumns({
  title: '备注',
  dataIndex: 'remark',
  key: 'remark',
  valueType: 'textarea',
  hideInSearch: true,
});

// 排序
export const COrderNum: ProItem = {
  title: '排序',
  dataIndex: 'orderNum',
  key: 'orderNum',
  valueType: 'digit',
};

// 创建者
export const CCreateBy: ProItem = {
  title: '创建者',
  dataIndex: 'createBy',
  key: 'createBy',
  valueType: 'text',
};
