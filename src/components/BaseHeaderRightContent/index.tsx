import { logout } from '@/utils';
import { useNavigate } from '@umijs/max';
import type { MenuProps } from 'antd';
import { Avatar, Dropdown, Menu } from 'antd';
import type { FC } from 'react';

enum MenuItemKey {
  PROFILE = 'PROFILE',
  LOGOUT = 'LOGOUT',
}

const items: MenuProps['items'] = [
  {
    label: '个人中心',
    key: MenuItemKey.PROFILE,
  },
  {
    type: 'divider',
  },
  {
    label: '退出登录',
    key: MenuItemKey.LOGOUT,
  },
];

export const BaseHeaderRightContent: FC<{ nickName?: string; avatar?: string }> = ({ nickName, avatar }) => {
  const navigate = useNavigate();

  return (
    <header className="hover:bg-[rgba(255,255,255,0.085)] px-3 text-white ">
      <Dropdown
        overlay={
          <Menu
            items={items}
            onClick={async ({ key }) => {
              if (key === MenuItemKey.PROFILE) {
                navigate('/settings');
                return;
              }

              if (key === MenuItemKey.LOGOUT) {
                await logout();
              }
            }}
          />
        }
      >
        <div className="h-full flex justify-center items-center gap-2">
          <Avatar size="small" src={avatar} />

          <span>{nickName}</span>
        </div>
      </Dropdown>
    </header>
  );
};
