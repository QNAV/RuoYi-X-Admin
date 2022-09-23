import { Access } from '@/components';
import { useAccess } from '@/models';
import { useShowResetPasswordModal } from '@/pages/system/user/model';
import { RestOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import type { FC } from 'react';

const ButtonResetPwd: FC<{
  userId: number;
  userName: string;
}> = ({ userId, userName }) => {
  const access = useAccess();
  const showResetPasswordModal = useShowResetPasswordModal();

  return (
    <Access accessible={access.canResetSysUserPwd}>
      <Button type="link" danger icon={<RestOutlined />} onClick={() => showResetPasswordModal(userId, userName)}>
        重置密码
      </Button>
    </Access>
  );
};

export default ButtonResetPwd;
