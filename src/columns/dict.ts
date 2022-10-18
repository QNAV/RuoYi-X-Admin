import { useQueryDict } from '@/models';
import type { ProItem } from '@/typings';
import { generateColumns } from '@/utils';

// 字典编号
export const CDictId: ProItem = {
  title: '字典编号',
  dataIndex: 'dictId',
  key: 'dictId',
  valueType: 'text',
  hideInSearch: true,
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

// 字典编码
export const CDictCode: ProItem = {
  title: '字典编码',
  dataIndex: 'dictCode',
  key: 'dictCode',
  valueType: 'text',
  hideInSearch: true,
};

// 字典排序
export const CDictSort: ProItem = {
  title: '字典排序',
  dataIndex: 'dictSort',
  key: 'dictSort',
  valueType: 'text',
  hideInSearch: true,
};

// 字典标签
export const CDictLabel: ProItem = {
  title: '字典标签',
  dataIndex: 'dictLabel',
  key: 'dictLabel',
  valueType: 'text',
};

// 字典键值
export const CDictValue: ProItem = {
  title: '字典键值',
  dataIndex: 'dictValue',
  key: 'dictValue',
  valueType: 'text',
  hideInSearch: true,
};

// 启用禁用状态
export const useStatusNormalDisable = () => {
  const { data } = useQueryDict('sys_normal_disable');

  return generateColumns(
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      valueType: 'select',
      valueEnum: data ?? {},
    },
    {
      form: {
        valueType: 'radio',
        formItemProps: {
          required: true,
          rules: [{ required: true, message: '请选择状态' }],
        },
      },
    },
  );
};
