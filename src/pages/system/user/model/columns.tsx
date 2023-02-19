import { useQueryDictSysNormalDisable, useQueryDictSysUserSex } from '@/models';
import ButtonEdit from '@/pages/system/user/components/ButtonEdit';
import ButtonRemove from '@/pages/system/user/components/ButtonRemove';
import ButtonResetPwd from '@/pages/system/user/components/ButtonResetPwd';
import type { SysUserAddBo, SysUserVo } from '@/services/system/data-contracts';
import { sysConfigGetConfigKeySkipErrorHandler, sysUserGetDeptTree, sysUserGetInfo } from '@/services/system/System';
import type { ValueEnum } from '@/utils';
import { genColumnItem, mergeColumnItem, regEmail, regPassword, regPhone } from '@/utils';
import type { ProColumns, ProFormColumnsType } from '@ant-design/pro-components';
import { useQuery } from '@tanstack/react-query';
import { useRequest } from 'ahooks';

// userId 用户编号
const [ColumnItemTableUserId] = genColumnItem({
  title: '用户编号',
  dataIndex: 'userId',
  table: {
    valueType: 'text',
    hideInSearch: true,
  },
});

// userName 用户名称
const [ColumnItemTableUserName, , ColumnItemFormUserName] = genColumnItem({
  title: '用户名称',
  dataIndex: 'userName',
  table: {
    valueType: 'text',
  },
  form: {
    valueType: 'text',
    formItemProps: {
      rules: [{ required: true }],
    },
  },
});

// nickName 用户昵称
const [ColumnItemTableNickName, , ColumnItemFormNickName] = genColumnItem({
  title: '用户昵称',
  dataIndex: 'nickName',
  table: {
    valueType: 'text',
    hideInSearch: true,
  },
  form: {
    valueType: 'text',
  },
});

// dept deptName 部门名称
const [ColumnItemTableDeptName] = genColumnItem({
  title: '部门名称',
  dataIndex: ['dept', 'deptName'],
  table: {
    valueType: 'text',
    hideInSearch: true,
  },
});

// phoneNumber 手机号码
const [ColumnItemTablePhoneNumber, , ColumnItemFormPhoneNumber] = genColumnItem({
  title: '手机号码',
  dataIndex: 'phoneNumber',
  table: {
    valueType: 'text',
    copyable: true,
  },
  form: {
    valueType: 'text',
    formItemProps: {
      rules: [{ pattern: regPhone, message: '手机号码格式不正确' }],
    },
    fieldProps: {
      maxLength: 11,
    },
  },
});

// status 状态
const initialValueStatus: SysUserAddBo['status'] = 'NORMAL';
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
    },
  });
};

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

// password 用户密码
const useColumnItemPassword = (useInitialValue = false) => {
  const { data } = useQuery(['sysConfigGetConfigKeySkipErrorHandler', 'sys.user.initPassword'], async () => {
    const { data } = await sysConfigGetConfigKeySkipErrorHandler({ configKey: 'sys.user.initPassword' });
    return data.msg;
  });
  return genColumnItem({
    title: '用户密码',
    dataIndex: 'password',
    form: {
      valueType: 'password',
      initialValue: useInitialValue ? data : undefined,
      formItemProps: {
        rules: [
          { required: true },
          { pattern: regPassword, message: '密码长度应在6-20之间，只能包含字母、数字和下划线' },
        ],
      },
    },
  });
};

// deptId 归属部门
const useColumnItemDeptId = () => {
  const { data: treeData = [] } = useRequest(() => sysUserGetDeptTree({}));

  return genColumnItem({
    title: '归属部门',
    dataIndex: 'deptId',
    form: {
      valueType: 'treeSelect',
      fieldProps: {
        treeData: treeData,
        fieldNames: {
          value: 'id',
        },
      },
    },
  });
};

// email 邮箱
const [, , ColumnItemFormEmail] = genColumnItem({
  title: '邮箱',
  dataIndex: 'email',
  form: {
    valueType: 'text',
    formItemProps: {
      rules: [{ pattern: regEmail, message: '邮箱格式错误' }],
    },
  },
});

// sex 用户性别
const initialValueSex: SysUserAddBo['sex'] = 'UNKNOWN';
const useColumnItemSex = () => {
  const { valueEnumSysUserSex } = useQueryDictSysUserSex();

  return genColumnItem({
    title: '用户性别',
    dataIndex: 'sex',
    valueEnum: valueEnumSysUserSex,
    form: {
      valueType: 'radio',
      initialValue: initialValueSex,
    },
  });
};

// postIds 岗位
const useColumnItemPostIds = (valueEnum: ValueEnum) => {
  return genColumnItem({
    title: '岗位',
    dataIndex: 'postIds',
    valueEnum,
    form: {
      valueType: 'select',
      fieldProps: {
        mode: 'multiple',
      },
      colProps: {
        span: 24,
      },
    },
  });
};

// roleIds 角色
const useColumnItemRoleIds = (valueEnum: ValueEnum) => {
  return genColumnItem({
    title: '角色',
    dataIndex: 'roleIds',
    valueEnum,
    form: {
      valueType: 'select',
      fieldProps: {
        mode: 'multiple',
      },
      colProps: {
        span: 24,
      },
    },
  });
};

// remark 备注
const [, , ColumnItemFormRemark] = genColumnItem({
  title: '备注',
  dataIndex: 'remark',
  form: {
    valueType: 'textarea',
    colProps: {
      span: 24,
    },
  },
});

export const useResetPwdFormColumns = (): ProFormColumnsType[] => {
  const [, , ColumnItemFormPassword] = useColumnItemPassword();

  return [
    mergeColumnItem(ColumnItemFormUserName, {
      readonly: true,
    }),
    ColumnItemFormPassword,
  ];
};

export const useTableColumns = (): ProColumns<SysUserVo>[] => {
  const [ColumnItemTableStatus] = useColumnItemStatus();

  return [
    ColumnItemTableUserId,
    ColumnItemTableUserName,
    ColumnItemTableNickName,
    ColumnItemTableDeptName,
    ColumnItemTablePhoneNumber,
    ColumnItemTableStatus,
    ColumnItemTableCreateTime,
    ColumnItemTableCreateTimeRange,
    {
      title: '操作',
      valueType: 'option',
      render: (dom, entity) => {
        if (entity.userId === 1) {
          return null;
        }

        return (
          <>
            <ButtonEdit userId={entity.userId} />

            <ButtonRemove userIds={[entity.userId]} />

            <ButtonResetPwd record={entity} />
          </>
        );
      },
      fixed: 'right',
      width: 260,
    },
  ];
};

export const useFormColumns = (formType: 'add' | 'edit'): ProFormColumnsType<SysUserAddBo>[] => {
  const { data } = useQuery(['sysUserGetInfo'], async () => {
    const { posts, roles } = await sysUserGetInfo();
    return {
      posts: posts.reduce((pre, cur) => pre.set(cur.postId, cur.postName), new Map()),
      roles: roles.reduce((pre, cur) => pre.set(cur.roleId, cur.roleName), new Map()),
    };
  });

  const [, , ColumnItemFormDeptId] = useColumnItemDeptId();
  const [, , ColumnItemFormPassword] = useColumnItemPassword(true);
  const [, , ColumnItemFormSex] = useColumnItemSex();
  const [, , ColumnItemFormStatus] = useColumnItemStatus();
  const [, , ColumnItemFormPostIds] = useColumnItemPostIds(data?.posts ?? {});
  const [, , ColumnItemFormRoleIds] = useColumnItemRoleIds(data?.roles ?? {});

  return [
    ColumnItemFormNickName,
    ColumnItemFormDeptId,
    ColumnItemFormPhoneNumber,
    ColumnItemFormEmail,
    ...(formType === 'add' ? [ColumnItemFormUserName, ColumnItemFormPassword] : []),
    ColumnItemFormSex,
    ColumnItemFormStatus,
    ColumnItemFormPostIds,
    ColumnItemFormRoleIds,
    ColumnItemFormRemark,
  ];
};
