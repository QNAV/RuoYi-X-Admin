import { useLogout } from '@/hooks';
import { LogoutOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import type { FC } from 'react';

const IconLogout: FC = () => {
  const logout = useLogout();

  return (
    <Tooltip title="退出登录">
      <LogoutOutlined onClick={logout} />
    </Tooltip>
  );
};

export default IconLogout;
