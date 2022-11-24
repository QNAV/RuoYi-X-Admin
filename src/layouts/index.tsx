import { Access } from '@/components';
import type { KeepAliveElements } from '@/layouts/components/HeaderTabs';
import HeaderTabs from '@/layouts/components/HeaderTabs';
import IconLogout from '@/layouts/components/IconLogout';
import IconSetting from '@/layouts/components/IconSetting';
import MenuItem from '@/layouts/components/MenuItem';
import { useQueryInitialState } from '@/models';
import { accessKeysMap, accessRoutes, isKeepAliveRoutesSet, settingsMap } from '@/routes';
import { checkAccess, convertUserRoutesToMenus } from '@/utils';
import { ProLayout } from '@ant-design/pro-components';
import type { FC } from 'react';
import { useMemo, useRef } from 'react';
import { matchPath, Navigate, useLocation, useNavigate, useOutlet } from 'react-router-dom';

const useKeepAliveOutlets = () => {
  const { pathname } = useLocation();
  const element = useOutlet();

  const keepAliveElements = useRef<KeepAliveElements>({});

  const currRouteSettingsKey = Object.keys(settingsMap).find((key) => matchPath(key, pathname));
  const isKeepAlive = currRouteSettingsKey ? isKeepAliveRoutesSet.has(currRouteSettingsKey) : false;

  if (isKeepAlive) {
    keepAliveElements.current[currRouteSettingsKey!] = element;
  }

  return (
    <>
      <HeaderTabs keepAliveElements={keepAliveElements.current} />
      {Object.entries(keepAliveElements.current).map(([key, element]) => (
        <div key={key} hidden={!matchPath(key, pathname)}>
          {element}
        </div>
      ))}
      {!isKeepAlive && element}
    </>
  );
};

const Layouts: FC = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const element = useKeepAliveOutlets();

  const { data: initialState, isLoading } = useQueryInitialState();

  const accessible = useMemo(() => {
    const currRouteAccessKey = accessRoutes.find((key) => matchPath(key, pathname));

    if (!currRouteAccessKey) return true;

    return checkAccess(accessKeysMap[currRouteAccessKey], new Set(initialState?.userInfo?.permissions));
  }, [pathname, initialState?.userInfo?.permissions]);

  return (
    <ProLayout
      title="RuoYi X Admin"
      location={{ pathname }}
      onMenuHeaderClick={() => navigate('/')}
      menu={{ loading: isLoading }}
      loading={isLoading}
      menuDataRender={() => convertUserRoutesToMenus(initialState?.userRoutes)}
      menuItemRender={MenuItem}
      token={{
        pageContainer: {
          paddingBlockPageContainerContent: 0,
          paddingInlinePageContainerContent: 0,
        },
        header: {
          colorBgHeader: '#292f33',
          colorHeaderTitle: '#fff',
          colorTextMenu: '#dfdfdf',
          colorTextMenuSecondary: '#dfdfdf',
          colorTextMenuSelected: '#fff',
          colorBgMenuItemSelected: '#22272b',
          colorTextRightActionsItem: '#dfdfdf',
        },
        sider: {
          colorMenuBackground: '#fff',
          colorMenuItemDivider: '#dfdfdf',
          colorTextMenu: '#595959',
          colorTextMenuSelected: 'rgba(42,122,251,1)',
          colorBgMenuItemSelected: 'rgba(230,243,254,1)',
        },
      }}
      avatarProps={{
        size: 'small',
        src: initialState?.userInfo?.user?.avatar,
        title: initialState?.userInfo?.user?.nickName,
      }}
      actionsRender={() => [<IconSetting key="IconSetting" />, <IconLogout key="IconLogout" />]}
    >
      {!isLoading && (
        <Access accessible={accessible} fallback={<Navigate to="/403" />}>
          {element}
        </Access>
      )}
    </ProLayout>
  );
};

export default Layouts;
