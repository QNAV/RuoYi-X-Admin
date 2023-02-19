import {
  useAtomValueMainTableActions,
  useAtomValueResetPwdModal,
  useHideResetPwdModal,
  useResetPwdFormColumns,
} from '@/pages/system/user/model';
import { sysUserPostResetPwd } from '@/services/system/System';
import type { ProFormInstance } from '@ant-design/pro-components';
import { BetaSchemaForm } from '@ant-design/pro-components';
import { App } from 'antd';
import type { FC } from 'react';
import { useEffect, useRef, useTransition } from 'react';

interface FormValues {
  userName: string;
  password: string;
}

const ModalResetPwd: FC = () => {
  const { message } = App.useApp();

  const formRef = useRef<ProFormInstance<FormValues>>();

  const resetPwdFormColumns = useResetPwdFormColumns();

  const hideResetPasswordModal = useHideResetPwdModal();
  const { open, record } = useAtomValueResetPwdModal();

  const [, startTransition] = useTransition();

  const mainTableActions = useAtomValueMainTableActions();

  const handleFinish = async ({ password }: FormValues) => {
    await sysUserPostResetPwd({
      ...record!,
      password,
    });

    mainTableActions?.reload();

    hideResetPasswordModal();

    message.success('重置密码成功');
  };

  useEffect(() => {
    if (open && record) {
      startTransition(() => {
        formRef.current?.setFieldsValue({
          userName: record.userName,
          password: '',
        });
      });
    }
  }, [open]);

  return (
    <BetaSchemaForm<FormValues>
      title="重置密码"
      layoutType="ModalForm"
      columns={resetPwdFormColumns}
      width={500}
      formRef={formRef}
      open={open}
      modalProps={{
        okText: '提交',
        onCancel: hideResetPasswordModal,
      }}
      onFinish={handleFinish}
    />
  );
};

export default ModalResetPwd;
