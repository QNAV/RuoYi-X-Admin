import MenuItem from '@/layouts/components/MenuItem';
import { useQueryInitialState } from '@/models';
import type { ProTokenType } from '@ant-design/pro-components';
import { ProLayout } from '@ant-design/pro-components';
import type { FC } from 'react';
import { useLocation, useNavigate, useOutlet } from 'react-router-dom';

const token: ProTokenType['layout'] = {
  bgLayout: '#f5f5f5',
  colorBgAppListIconHover: 'rgba(0,0,0,0.06)',
  colorTextAppListIconHover: 'rgba(255,255,255,0.95)',
  colorTextAppListIcon: 'rgba(255,255,255,0.85)',
  pageContainer: {
    paddingBlockPageContainerContent: 0,
    paddingInlinePageContainerContent: 0,
  },
  sider: {
    colorBgCollapsedButton: '#fff',
    colorTextCollapsedButtonHover: 'rgba(0,0,0,0.65)',
    colorTextCollapsedButton: 'rgba(0,0,0,0.45)',
    colorMenuBackground: '#004FD9',
    colorBgMenuItemCollapsedHover: 'rgba(0,0,0,0.06)',
    colorBgMenuItemCollapsedSelected: 'rgba(0,0,0,0.15)',
    colorBgMenuItemCollapsedElevated: 'rgba(0,0,0,0.95)',
    colorMenuItemDivider: 'rgba(255,255,255,0.15)',
    colorBgMenuItemHover: 'rgba(0,0,0,0.06)',
    colorBgMenuItemSelected: 'rgba(0,0,0,0.15)',
    colorTextMenuSelected: '#fff',
    colorTextMenuItemHover: 'rgba(255,255,255,0.75)',
    colorTextMenu: 'rgba(255,255,255,0.75)',
    colorTextMenuSecondary: 'rgba(255,255,255,0.65)',
    colorTextMenuTitle: 'rgba(255,255,255,0.95)',
    colorTextMenuActive: 'rgba(255,255,255,0.95)',
    colorTextSubMenuSelected: '#fff',
  },
};

const Layouts: FC = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const element = useOutlet();

  const { data: initialState, isLoading } = useQueryInitialState();

  return (
    <ProLayout
      title="RuoYi X Admin"
      location={{ pathname }}
      onMenuHeaderClick={() => navigate('/')}
      menu={{ loading: isLoading }}
      loading={isLoading}
      menuDataRender={() => initialState?.menus ?? []}
      menuItemRender={MenuItem}
      token={token}
      siderWidth={200}
    >
      {element}
    </ProLayout>
  );
};

export default Layouts;
