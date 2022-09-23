import { Access } from '@/components';
import { useAccess } from '@/models';
import { useValueMainTableActions } from '@/pages/system/user/model';
import { SysUserPostAdd } from '@/services/sys/SysUserService';
import { PlusOutlined } from '@ant-design/icons';
import type { ProFormInstance } from '@ant-design/pro-components';
import { ProForm, ProFormRadio, ProFormText } from '@ant-design/pro-components';
import { useMutation } from '@tanstack/react-query';
import { useBoolean } from 'ahooks';
import { Button, message, Modal } from 'antd';
import type { FC } from 'react';
import { useRef } from 'react';

const ButtonAdd: FC = () => {
  const access = useAccess();

  const [open, { toggle }] = useBoolean();

  const formRef = useRef<ProFormInstance<API.SysUserAddBo>>();

  const mainTableActions = useValueMainTableActions();

  const { isLoading, mutate } = useMutation(
    async () => {
      const values = await formRef.current?.validateFieldsReturnFormatValue?.();

      await SysUserPostAdd(values!);
    },
    {
      onSuccess: () => {
        mainTableActions?.reload();

        message.success('添加成功');
      },
    },
  );

  return (
    <Access accessible={access.canAddSysUser}>
      <Button type="primary" icon={<PlusOutlined />} onClick={toggle}>
        新增
      </Button>

      <Modal
        title="添加用户"
        open={open}
        onCancel={toggle}
        confirmLoading={isLoading}
        okText="提交"
        onOk={() => mutate()}
      >
        <ProForm
          submitter={false}
          formRef={formRef}
          grid
          colProps={{
            span: 12,
          }}
        >
          <ProFormText name="nickName" label="用户昵称" rules={[{ required: true }]} />

          <ProFormText name="phoneNumber" label="手机号码" />

          <ProFormText name="email" label="邮箱" />

          <ProFormText name="userName" label="用户名称" rules={[{ required: true }]} />

          <ProFormText.Password name="password" label="用户密码" rules={[{ required: true }]} />

          <ProFormRadio.Group name="status" label="状态" />
        </ProForm>
      </Modal>
    </Access>
  );
};

export default ButtonAdd;
