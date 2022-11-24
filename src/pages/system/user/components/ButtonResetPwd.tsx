import { Access } from '@/components';
import { useShowResetPwdModal } from '@/pages/system/user/model';
import type { SysUserVo } from '@/services/system/data-contracts';
import { RestOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import type { FC } from 'react';

const ButtonResetPwd: FC<{
  record: SysUserVo;
}> = ({ record }) => {
  const showResetPasswordModal = useShowResetPwdModal();

  return (
    <Access accessible>
      <Button type="link" danger icon={<RestOutlined />} onClick={() => showResetPasswordModal(record)}>
        重置密码
      </Button>
    </Access>
  );
};

export default ButtonResetPwd;
