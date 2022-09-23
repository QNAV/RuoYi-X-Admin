import { useHideResetPasswordModal, useValueResetPasswordModal } from '@/pages/system/user/model';
import { ProForm, ProFormText } from '@ant-design/pro-components';
import { Modal } from 'antd';
import type { FC } from 'react';

const ModalResetPwd: FC = () => {
  const hideResetPasswordModal = useHideResetPasswordModal();
  const { open, userId, userName } = useValueResetPasswordModal();

  return (
    <Modal title="重置密码" open={open} onCancel={hideResetPasswordModal}>
      <ProForm>
        <ProFormText />

        <ProFormText.Password />
      </ProForm>
    </Modal>
  );
};

export default ModalResetPwd;
