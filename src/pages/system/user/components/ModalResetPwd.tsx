import { useAtomValueResetPwdModal, useHideResetPwdModal } from '@/pages/system/user/model';
import { sysUserPostResetPwd } from '@/services/system/System';
import { regPassword } from '@/utils';
import type { ProFormInstance } from '@ant-design/pro-components';
import { ModalForm, ProFormText } from '@ant-design/pro-components';
import { App } from 'antd';
import type { FC } from 'react';
import { useEffect, useRef } from 'react';

const ModalResetPwd: FC = () => {
  const { message } = App.useApp();

  const formRef = useRef<ProFormInstance>();

  const hideResetPasswordModal = useHideResetPwdModal();
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
      formRef={formRef}
      modalProps={{
        onCancel: hideResetPasswordModal,
      }}
      width={500}
      onFinish={async ({ password }) => {
        await sysUserPostResetPwd({
          ...record!,
          password,
        });
        message.success('重置密码成功');
      }}
    >
      <ProFormText name="userName" label="用户名称" readonly />

      <ProFormText.Password
        required
        name="password"
        label="新密码"
        rules={[
          { required: true, message: '请输入新密码' },
          { pattern: regPassword, message: '密码长度应在6-20之间，只能包含字母、数字和下划线' },
        ]}
      />

      <ProFormText.Password
        required
        name="confirmPassword"
        label="确认密码"
        rules={[
          { required: true, message: '请输入确认密码' },
          ({ getFieldsValue }) => ({
            validator(_, value) {
              if (!value || getFieldsValue().password === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('两次输入的密码不一致'));
            },
          }),
        ]}
      />
    </ModalForm>
  );
};

export default ModalResetPwd;
