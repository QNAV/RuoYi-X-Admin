import {
  useAtomValueAddOrEditModal,
  useAtomValueMainTableActions,
  useFormColumns,
  useHideAddOrEditModal,
} from '@/pages/system/user/model';
import type { SysUserAddBo } from '@/services/system/data-contracts';
import { sysUserGetInfo1, sysUserPostAdd, sysUserPostEdit } from '@/services/system/System';
import type { ProFormInstance } from '@ant-design/pro-components';
import { BetaSchemaForm } from '@ant-design/pro-components';
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
      refreshDeps: [open],
    },
  );

  const handleFinish = async (values: SysUserAddBo) => {
    if (actionType === 'add') {
      const { roleIds = [], postIds = [], ...restValues } = values!;
      await sysUserPostAdd({ roleIds, postIds, ...restValues });
    } else {
      await sysUserPostEdit({ userId: userId!, ...values! });
    }

    mainTableActions?.reload();
    formRef.current?.resetFields();

    hideAddOrEditModal();

    message.success(actionType === 'add' ? '新增成功' : '编辑成功');
  };

  const formColumns = useFormColumns(actionType);

  return (
    <BetaSchemaForm<SysUserAddBo>
      layoutType="ModalForm"
      title={actionType === 'add' ? '新增用户' : '编辑用户'}
      formRef={formRef}
      grid
      colProps={{
        span: 12,
      }}
      modalProps={{
        okText: '提交',
        onCancel,
      }}
      width={600}
      open={open}
      onFinish={handleFinish}
      columns={formColumns}
    />
  );
};

export default ModalAddOrEdit;
