import { useQueryDictSysNormalDisable } from '@/models';
import type { SysRole, SysRoleVo } from '@/services/system/data-contracts';
import { genColumnItem } from '@/utils';
import type { ProDescriptionsItemProps, ProFormColumnsType, ProListMetas } from '@ant-design/pro-components';

// roleName 角色名称
const rulesRoleName = [{ required: true, message: '请输入角色名称' }];
export const [, ColumnItemDescriptionsRoleName, ColumnItemFormRoleName, ColumnItemMetaRoleName] = genColumnItem({
  title: '角色名称',
  dataIndex: 'roleName',
  descriptions: {
    valueType: 'text',
    formItemProps: {
      rules: rulesRoleName,
    },
  },
  form: {
    valueType: 'text',
    formItemProps: {
      rules: rulesRoleName,
    },
  },
  meta: {
    valueType: 'text',
  },
});

// roleId 角色编号
export const [, ColumnItemDescriptionsRoleId] = genColumnItem({
  title: '角色编号',
  dataIndex: 'roleId',
  descriptions: {
    valueType: 'text',
  },
});

// roleKey 权限字符
const tooltipRoleKey = "控制器中定义的权限字符，如：@PreAuthorize(`@ss.hasRole('admin')`)";
const rulesRoleKey = [{ required: true, message: '请输入权限字符' }];
export const [, ColumnItemDescriptionsRoleKey, ColumnItemFormRoleKey, ColumnItemMetaRoleKey] = genColumnItem({
  title: '权限字符',
  dataIndex: 'roleKey',
  descriptions: {
    valueType: 'text',
    tooltip: tooltipRoleKey,
    formItemProps: {
      rules: rulesRoleKey,
    },
  },
  form: {
    valueType: 'text',
    tooltip: tooltipRoleKey,
    formItemProps: {
      rules: rulesRoleKey,
    },
  },
  meta: {
    valueType: 'text',
  },
});

// status 状态
const initialValueStatus: SysRole['status'] = 'NORMAL';
const useColumnItemStatus = () => {
  const { valueEnumSysNormalDisable } = useQueryDictSysNormalDisable();

  return genColumnItem({
    title: '状态',
    dataIndex: 'status',
    valueEnum: valueEnumSysNormalDisable,
    table: {
      valueType: 'select',
    },
    form: {
      initialValue: initialValueStatus,
      valueType: 'radio',
      colProps: {
        span: 12,
      },
    },
    meta: {
      valueType: 'select',
    },
  });
};

// roleSort 显示排序
const rulesRoleSort = [{ required: true, message: '请输入显示排序' }];
export const [, ColumnItemDescriptionsRoleSort, ColumnItemFormRoleSort] = genColumnItem({
  title: '显示排序',
  dataIndex: 'roleSort',
  descriptions: {
    valueType: 'digit',
    formItemProps: {
      initialValue: 0,
      rules: rulesRoleSort,
    },
  },
  form: {
    valueType: 'digit',
    formItemProps: {
      initialValue: 0,
      rules: rulesRoleSort,
    },
    colProps: {
      span: 12,
    },
  },
});

// remark 备注
const [, ColumnItemDescriptionsRemark, ColumnItemFormRemark] = genColumnItem({
  title: '备注',
  dataIndex: 'remark',
  descriptions: {
    valueType: 'textarea',
  },
  form: {
    valueType: 'textarea',
  },
});

// createTime 创建时间
const [, ColumnItemDescriptionsCreateTime] = genColumnItem({
  title: '创建时间',
  dataIndex: 'createTime',
  descriptions: {
    valueType: 'dateTime',
  },
});

export const useMetas = (): ProListMetas => {
  const [, , , ColumnItemMetaStatus] = useColumnItemStatus();
  return {
    title: ColumnItemMetaRoleName,
    subTitle: ColumnItemMetaStatus,
    description: ColumnItemMetaRoleKey,
  };
};

export const useFormColumns = (): ProFormColumnsType[] => {
  const [, , ColumnItemFormStatus] = useColumnItemStatus();

  return [
    ColumnItemFormRoleName,
    ColumnItemFormRoleKey,
    ColumnItemFormStatus,
    ColumnItemFormRoleSort,
    ColumnItemFormRemark,
  ];
};

export const baseDescriptionsColumns: ProDescriptionsItemProps[] = [
  ColumnItemDescriptionsRoleId,
  ColumnItemDescriptionsCreateTime,
];

export const useDescriptionsColumns = (): ProDescriptionsItemProps<SysRoleVo>[] => {
  const [, ColumnItemDescriptionsStatus] = useColumnItemStatus();

  return [
    ColumnItemDescriptionsStatus,
    ColumnItemDescriptionsRoleSort,
    ColumnItemDescriptionsRoleName,
    ColumnItemDescriptionsRoleKey,
    ColumnItemDescriptionsRemark,
  ];
};
