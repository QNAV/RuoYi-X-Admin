import { useQueryDict, useQueryInitialState } from '@/models';
import {
  useAtomValueAddOrEditModal,
  useAtomValueMainTableActions,
  useHideAddOrEditModal,
} from '@/pages/system/user/model';
import { SysConfigGetConfigKey } from '@/services/sys/SysConfigService';
import { SysDeptPostTreeSelect } from '@/services/sys/SysDeptService';
import { SysUserGetInfo, SysUserPostAdd } from '@/services/sys/SysUserService';
import { regEmail, regPhone } from '@/utils';
import type { ProFormInstance } from '@ant-design/pro-components';
import { ModalForm, ProFormSelect, ProFormText, ProFormTextArea, ProFormTreeSelect } from '@ant-design/pro-components';
import { useMutation } from '@tanstack/react-query';
import { useRequest } from 'ahooks';
import { message } from 'antd';
import type { FC } from 'react';
import { useEffect, useRef } from 'react';

const ModalAddOrEdit: FC = () => {
  const formRef = useRef<ProFormInstance<API.SysUserAddBo>>();

  const mainTableActions = useAtomValueMainTableActions();

  const hideAddOrEditModal = useHideAddOrEditModal();
  const { open, actionType, record } = useAtomValueAddOrEditModal();

  const initialState = useQueryInitialState();

  const { data: dictNormalDisable } = useQueryDict('sys_normal_disable');
  const { data: dictSex } = useQueryDict('sys_user_sex');
  const { data: dictUserInfo } = useRequest(async () => {
    const { posts, roles } = await SysUserGetInfo({ userId: initialState.data!.userInfo.user.userId });
    return {
      posts: posts.reduce((pre, cur) => ({ ...pre, [cur.postId]: cur.postName }), {}),
      roles: roles.reduce((pre, cur) => ({ ...pre, [cur.roleId]: cur.roleName }), {}),
    };
  });

  const { data: initPwd } = useRequest(async () => {
    const res: any = await SysConfigGetConfigKey({ configKey: 'sys.user.initPassword' }, { skipErrorHandler: true });

    return res!.data!.msg as string;
  });

  const { data: treeData } = useRequest(() => SysDeptPostTreeSelect({}), {});

  const { isLoading, mutateAsync } = useMutation(
    async () => {
      const values = await formRef.current?.validateFieldsReturnFormatValue?.();

      await SysUserPostAdd(values!);
    },
    {
      onSuccess: () => {
        mainTableActions?.reload();

        message.success(actionType === 'add' ? '新增成功' : '编辑成功');
      },
    },
  );

  useEffect(() => {
    if (open && actionType === 'edit') {
      const timer = setTimeout(() => {
        formRef.current?.setFieldsValue(record!);
        clearTimeout(timer);
      }, 0);
    }

    if (!open && actionType === 'edit') {
      formRef.current?.resetFields();
    }
  }, [open]);

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
        onCancel: hideAddOrEditModal,
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

      <ProFormSelect name="sex" label="用户性别" valueEnum={dictSex ?? {}} />

      <ProFormSelect name="status" label="状态" valueEnum={dictNormalDisable ?? {}} rules={[{ required: true }]} />

      <ProFormSelect
        name="postIds"
        label="岗位"
        valueEnum={dictUserInfo?.posts ?? {}}
        mode="multiple"
        transform={(value) => {
          let postIds = value;
          if (Array.isArray(value)) {
            postIds = value.map((item) => Number(item));
          }
          return {
            postIds,
          };
        }}
      />

      <ProFormSelect
        name="userType"
        label="角色"
        valueEnum={dictUserInfo?.roles ?? {}}
        mode="multiple"
        transform={(value) => {
          let roleIds = value;
          if (Array.isArray(value)) {
            roleIds = value.map((item) => Number(item));
          }
          return {
            roleIds,
          };
        }}
      />

      <ProFormTextArea name="remark" label="备注" colProps={{ span: 24 }} />
    </ModalForm>
  );
};

export default ModalAddOrEdit;
