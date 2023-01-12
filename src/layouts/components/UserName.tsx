import { useLogout } from '@/hooks';
import { useQueryInitialState } from '@/models';
import { LogoutOutlined, ProfileOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Avatar, Button, Dropdown, Space } from 'antd';
import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';

enum MenuKey {
  PROFILE = 'PROFILE',
  LOGOUT = 'LOGOUT',
}

const items: MenuProps['items'] = [
  {
    key: MenuKey.PROFILE,
    label: '个人中心',
    icon: <ProfileOutlined />,
  },
  {
    type: 'divider',
  },
  {
    key: MenuKey.LOGOUT,
    label: '退出登录',
    icon: <LogoutOutlined />,
  },
];

const UserName: FC = () => {
  const { data } = useQueryInitialState();
  const navigate = useNavigate();

  const logout = useLogout();

  const handleMenuClick = async (key: MenuKey) => {
    if (key === MenuKey.LOGOUT) {
      await logout();
      return;
    }

    if (key === MenuKey.PROFILE) {
      navigate('/settings');
    }
  };

  return (
    <Dropdown menu={{ items, onClick: ({ key }) => handleMenuClick(key as MenuKey) }} placement="bottom" arrow>
      <Button type="text">
        <Space>
          <Avatar src={data?.userInfo?.user?.avatar ?? ''} icon={<UserOutlined />} size="small" />
          {data?.userInfo?.user?.nickName ?? ''}
        </Space>
      </Button>
    </Dropdown>
  );
};

export default UserName;
