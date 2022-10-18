import { useAtomValueResetPwdModal, useHideResetPwdModal } from '@/pages/system/user/model';
import { SysUserPostResetPwd } from '@/services/sys/SysUserService';
import type { ProFormInstance } from '@ant-design/pro-components';
import { ModalForm, ProFormText } from '@ant-design/pro-components';
import type { FC } from 'react';
import { useEffect, useRef } from 'react';

const ModalResetPwd: FC = () => {
  const hideResetPasswordModal = useHideResetPwdModal();

  const formRef = useRef<ProFormInstance>();

  const { open, record } = useAtomValueResetPwdModal();

  useEffect(() => {
    if (open) {
      formRef.current?.resetFields();

      const timer = setTimeout(() => {
        formRef.current?.setFieldsValue({
          userName: record!.userName,
        });
        clearTimeout(timer);
      }, 0);
    }
  }, [open]);

  return (
    <ModalForm<{
      userName: string;
      password: string;
      confirmPassword: string;
    }>
      title="重置密码"
      open={open}
      modalProps={{
        onCancel: hideResetPasswordModal,
      }}
      onFinish={async ({ password }) => {
        await SysUserPostResetPwd({
          ...record!,
          password,
        });
      }}
    >
      <ProFormText name="userName" label="用户名称" readonly />

      <ProFormText.Password required name="password" label="新密码" />

      <ProFormText.Password required name="confirmPassword" label="确认密码" />
    </ModalForm>
  );
};

export default ModalResetPwd;
