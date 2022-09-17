import { useInitialState } from '@/models';
import { logout } from '@/utils';
import type { MenuProps } from 'antd';
import { Avatar, Dropdown, Menu, Space } from 'antd';
import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';

enum MenuKey {
  LOGOUT = 'LOGOUT',
  PROFILE = 'PROFILE',
}

const items: MenuProps['items'] = [
  {
    key: MenuKey.PROFILE,
    label: '个人中心',
  },
  {
    type: 'divider',
  },
  {
    key: MenuKey.LOGOUT,
    label: '退出登录',
  },
];

const HeaderDropdown: FC = () => {
  const initialState = useInitialState();
  const navigate = useNavigate();

  const onMenuClick = {
    [MenuKey.PROFILE]: () => navigate('/settings'),
    [MenuKey.LOGOUT]: logout,
  };

  return (
    <div className="cursor-pointer hover:bg-[rgba(0,0,0,0.065)] px-3">
      <Dropdown overlay={<Menu items={items} onClick={({ key }) => onMenuClick[key as MenuKey]?.()} />}>
        <Space>
          <Avatar src={initialState?.data?.userInfo?.user?.avatar} />

          {initialState?.data?.userInfo?.user?.nickName}
        </Space>
      </Dropdown>
    </div>
  );
};

export default HeaderDropdown;
