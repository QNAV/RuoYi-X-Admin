import { AccessWithState } from '@/features';
import { useShowResetPwdModal } from '@/pages/system/user/model';
import type { SysUserVo } from '@/services/system/data-contracts';
import { RestOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import type { FC } from 'react';

export interface ButtonResetPwdProps {
  record: SysUserVo;
}

const ButtonResetPwd: FC<ButtonResetPwdProps> = ({ record }) => {
  const showResetPasswordModal = useShowResetPwdModal();

  return (
    <AccessWithState accessKey="system:user:resetPwd">
      <Button type="link" danger icon={<RestOutlined />} onClick={() => showResetPasswordModal(record)}>
        重置密码
      </Button>
    </AccessWithState>
  );
};

export default ButtonResetPwd;
