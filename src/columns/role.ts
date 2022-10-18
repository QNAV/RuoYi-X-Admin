import { generateColumns } from '@/utils';

export const [TRoleName, FRoleName, DRoleName] = generateColumns(
  {
    title: '角色名称',
    dataIndex: 'roleName',
    key: 'roleName',
    valueType: 'text',
  },
  {
    form: {
      formItemProps: {
        required: true,
        rules: [{ required: true, message: '请输入角色名称' }],
      },
    },
  },
);

export const [TRoleKey, FRoleKey, DRoleKey] = generateColumns(
  {
    title: '权限字符',
    dataIndex: 'roleKey',
    key: 'roleKey',
    valueType: 'text',
    tooltip: "控制器中定义的权限字符，如：@PreAuthorize(`@ss.hasRole('admin')`)",
  },
  {
    form: {
      formItemProps: {
        required: true,
        rules: [{ required: true, message: '请输入权限字符' }],
      },
    },
  },
);

export const [, , DRoleId] = generateColumns({
  title: '角色编号',
  dataIndex: 'roleId',
  key: 'roleId',
  valueType: 'text',
  editable: false,
});

// 角色排序
export const [, FDRoleSort, DRoleSort] = generateColumns(
  {
    title: '显示排序',
    dataIndex: 'roleSort',
    key: 'roleSort',
    valueType: 'digit',
  },
  {
    form: {
      formItemProps: {
        required: true,
        rules: [{ required: true, message: '请输入显示排序' }],
      },
    },
  },
);
