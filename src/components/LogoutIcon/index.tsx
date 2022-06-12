import { logout } from '@/utils';
import { LogoutOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import type { FC } from 'react';

export const LogoutIcon: FC = () => {
  return (
    <Tooltip title="退出登录">
      <LogoutOutlined onClick={logout} />
    </Tooltip>
  );
};
