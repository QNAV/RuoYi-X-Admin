import { useQueryDictSysYesNo } from '@/models';
import ButtonEdit from '@/pages/system/config/components/ButtonEdit';
import ButtonRemove from '@/pages/system/config/components/ButtonRemove';
import type { SysConfigAddBo, SysConfigVo } from '@/services/system/data-contracts';
import { genColumnItem } from '@/utils';
import type { ProColumns, ProFormColumnsType } from '@ant-design/pro-components';

// configId 参数主键
const [ColumnItemTableConfigId] = genColumnItem({
  title: '参数主键',
  dataIndex: 'configId',
  table: {
    valueType: 'text',
    hideInSearch: true,
  },
});

// configName 参数名称
const [ColumnItemTableConfigName, , ColumnItemFormConfigName] = genColumnItem({
  title: '参数名称',
  dataIndex: 'configName',
  table: {
    valueType: 'text',
  },
  form: {
    valueType: 'text',
    formItemProps: {
      rules: [
        {
          required: true,
        },
      ],
    },
  },
});

// configKey 参数键名
const [ColumnItemTableConfigKey, , ColumnItemFormConfigKey] = genColumnItem({
  title: '参数键名',
  dataIndex: 'configKey',
  table: {
    valueType: 'text',
  },
  form: {
    valueType: 'text',
    formItemProps: {
      rules: [
        {
          required: true,
        },
      ],
    },
  },
});

// configValue 参数键值
const [ColumnItemTableConfigValue, , ColumnItemFormConfigValue] = genColumnItem({
  title: '参数键值',
  dataIndex: 'configValue',
  table: {
    valueType: 'text',
  },
  form: {
    valueType: 'text',
    formItemProps: {
      rules: [
        {
          required: true,
        },
      ],
    },
  },
});

// configType 是否系统内置
const useColumnItemConfigType = () => {
  const { valueEnumSysYesNo } = useQueryDictSysYesNo();

  return genColumnItem({
    title: '系统内置',
    dataIndex: 'configType',
    valueEnum: valueEnumSysYesNo,
    table: {
      valueType: 'select',
    },
    form: {
      valueType: 'radio',
      formItemProps: {
        rules: [
          {
            required: true,
          },
        ],
      },
    },
  });
};

// remark 备注
const [ColumnItemTableRemark, , ColumnItemFormRemark] = genColumnItem({
  title: '备注',
  dataIndex: 'remark',
  table: {
    valueType: 'textarea',
    hideInSearch: true,
  },
  form: {
    valueType: 'textarea',
  },
});

// createTime 创建时间
const [ColumnItemTableCreateTime] = genColumnItem({
  title: '创建时间',
  dataIndex: 'createTime',
  table: {
    valueType: 'dateTime',
    hideInSearch: true,
    sorter: true,
  },
});
// createTimeRange 创建时间
const [ColumnItemTableCreateTimeRange] = genColumnItem({
  title: '创建时间',
  dataIndex: 'createTimeRange',
  table: {
    valueType: 'dateTimeRange',
    hideInTable: true,
  },
});

export const useTableColumns = (): ProColumns<SysConfigVo>[] => {
  const [ColumnItemTableConfigType] = useColumnItemConfigType();

  return [
    ColumnItemTableConfigId,
    ColumnItemTableConfigName,
    ColumnItemTableConfigKey,
    ColumnItemTableConfigValue,
    ColumnItemTableConfigType,
    ColumnItemTableRemark,
    ColumnItemTableCreateTime,
    ColumnItemTableCreateTimeRange,
    {
      title: '操作',
      valueType: 'option',
      fixed: 'right',
      render: (dom, entity) => {
        return (
          <>
            <ButtonEdit record={entity} />
            <ButtonRemove configIds={[entity.configId]} />
          </>
        );
      },
    },
  ];
};

export const useFormColumns = (): ProFormColumnsType<SysConfigAddBo>[] => {
  const [, , ColumnItemFormConfigType] = useColumnItemConfigType();

  return [
    ColumnItemFormConfigName,
    ColumnItemFormConfigKey,
    ColumnItemFormConfigValue,
    ColumnItemFormConfigType,
    ColumnItemFormRemark,
  ];
};
