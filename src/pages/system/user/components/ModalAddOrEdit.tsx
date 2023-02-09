import { useQueryDictSysNormalDisable, useQueryDictSysUserSex } from '@/models';
import {
  useAtomValueAddOrEditModal,
  useAtomValueMainTableActions,
  useHideAddOrEditModal,
} from '@/pages/system/user/model';
import type { SysUserAddBo } from '@/services/system/data-contracts';
import {
  sysConfigGetConfigKeySkipErrorHandler,
  sysUserGetDeptTree,
  sysUserGetInfo,
  sysUserGetInfo1,
  sysUserPostAdd,
  sysUserPostEdit,
} from '@/services/system/System';
import { regEmail, regPhone } from '@/utils';
import type { ProFormInstance } from '@ant-design/pro-components';
import {
  ModalForm,
  ProFormRadio,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
  ProFormTreeSelect,
} from '@ant-design/pro-components';
import { useMutation } from '@tanstack/react-query';
import { useRequest } from 'ahooks';
import { App } from 'antd';
import type { FC } from 'react';
import { useRef, useTransition } from 'react';

const ModalAddOrEdit: FC = () => {
  const { message } = App.useApp();

  const formRef = useRef<ProFormInstance<SysUserAddBo>>();

  const mainTableActions = useAtomValueMainTableActions();

  const { open, actionType, userId } = useAtomValueAddOrEditModal();
  const hideAddOrEditModal = useHideAddOrEditModal();
  const onCancel = () => {
    if (actionType === 'edit') {
      formRef.current?.resetFields();
    }
    hideAddOrEditModal();
  };

  const { valueEnumSysNormalDisable, defaultValueSysNormalDisable } = useQueryDictSysNormalDisable();
  const { valueEnumSysUserSex, defaultValueSysUserSex } = useQueryDictSysUserSex();
  const { data: dictUserInfo } = useRequest(async () => {
    const { posts, roles } = await sysUserGetInfo();
    return {
      posts: posts.reduce((pre, cur) => pre.set(cur.postId, cur.postName), new Map()),
      roles: roles.reduce((pre, cur) => pre.set(cur.roleId, cur.roleName), new Map()),
    };
  });

  const { data: initPwd } = useRequest(async () => {
    const { data } = await sysConfigGetConfigKeySkipErrorHandler({ configKey: 'sys.user.initPassword' });
    return data.msg;
  });

  const { data: treeData } = useRequest(() => sysUserGetDeptTree({ deptQuery: {} }));

  const [, startTransition] = useTransition();
  useRequest(
    async () => {
      const { postIds, roleIds, user } = await sysUserGetInfo1({ userId });
      return {
        ...user,
        postIds,
        roleIds,
      };
    },
    {
      ready: open && actionType === 'edit' && !!userId,
      onSuccess: (data) => {
        startTransition(() => {
          formRef.current?.setFieldsValue(data);
        });
      },
      refreshDeps: [userId],
    },
  );

  const { isLoading, mutateAsync } = useMutation(
    async () => {
      const values = await formRef.current?.validateFieldsReturnFormatValue?.();

      if (actionType === 'add') {
        const { roleIds = [], postIds = [], ...restValues } = values!;
        await sysUserPostAdd({ roleIds, postIds, ...restValues });
      } else {
        await sysUserPostEdit({ userId: userId!, ...values! });
      }
    },
    {
      onSuccess: () => {
        hideAddOrEditModal();

        mainTableActions?.reload();
        formRef.current?.resetFields();

        message.success(actionType === 'add' ? '新增成功' : '编辑成功');
      },
    },
  );

  return (
    <ModalForm
      title={actionType === 'add' ? '新增用户' : '编辑用户'}
      formRef={formRef}
      grid
      colProps={{
        span: 12,
      }}
      modalProps={{
        okText: '提交',
        onCancel,
        confirmLoading: isLoading,
      }}
      width={600}
      open={open}
      onFinish={() => mutateAsync()}
    >
      <ProFormText name="nickName" label="用户昵称" rules={[{ required: true }]} />

      <ProFormTreeSelect
        name="deptId"
        label="归属部门"
        fieldProps={{
          treeData: treeData ?? [],
          fieldNames: {
            value: 'id',
          },
        }}
      />

      <ProFormText
        name="phoneNumber"
        label="手机号码"
        rules={[{ pattern: regPhone, message: '手机号码格式错误' }]}
        fieldProps={{
          maxLength: 11,
        }}
      />

      <ProFormText name="email" label="邮箱" rules={[{ pattern: regEmail, message: '邮箱格式错误' }]} />

      {actionType === 'add' && <ProFormText name="userName" label="用户名称" rules={[{ required: true }]} />}

      {actionType === 'add' && (
        <ProFormText.Password name="password" label="用户密码" rules={[{ required: true }]} initialValue={initPwd} />
      )}

      <ProFormSelect
        name="sex"
        label="用户性别"
        valueEnum={valueEnumSysUserSex}
        initialValue={defaultValueSysUserSex}
      />

      <ProFormRadio.Group
        name="status"
        label="状态"
        valueEnum={valueEnumSysNormalDisable}
        initialValue={defaultValueSysNormalDisable}
        rules={[{ required: true }]}
      />

      <ProFormSelect
        name="postIds"
        label="岗位"
        valueEnum={dictUserInfo?.posts ?? {}}
        mode="multiple"
        colProps={{ span: 24 }}
      />

      <ProFormSelect
        name="roleIds"
        label="角色"
        valueEnum={dictUserInfo?.roles ?? {}}
        mode="multiple"
        colProps={{ span: 24 }}
      />

      <ProFormTextArea name="remark" label="备注" colProps={{ span: 24 }} />
    </ModalForm>
  );
};

export default ModalAddOrEdit;
