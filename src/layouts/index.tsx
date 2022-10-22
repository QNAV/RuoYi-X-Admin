import type { KeepAliveElements } from '@/layouts/components/HeaderTabs';
import HeaderTabs from '@/layouts/components/HeaderTabs';
import IconLogout from '@/layouts/components/IconLogout';
import IconSetting from '@/layouts/components/IconSetting';
import MenuItem from '@/layouts/components/MenuItem';
import type { AccessObject } from '@/models';
import { useAtomValueAccess, useQueryInitialState } from '@/models';
import { accessKeysMap, settingsMap } from '@/routes';
import { convertUserRoutesToMenus } from '@/utils';
import { ProLayout } from '@ant-design/pro-components';
import type { FC } from 'react';
import { useRef } from 'react';
import { matchPath, Navigate, useLocation, useNavigate, useOutlet } from 'react-router-dom';

const useKeepAliveOutlets = () => {
  const { pathname } = useLocation();
  const element = useOutlet();

  const keepAliveElements = useRef<KeepAliveElements>({});

  const currRouteSettingsKey = Object.keys(settingsMap).find((key) => matchPath(key, pathname));
  const isKeepAlive = currRouteSettingsKey ? settingsMap[currRouteSettingsKey].isKeepAlive : false;

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

  const { data: initialState, isSuccess, isLoading, isError } = useQueryInitialState();

  const access = useAtomValueAccess();

  if (isError) {
    return <Navigate to="/500" replace />;
  }

  if (
    isSuccess &&
    (accessKeysMap[pathname] === undefined ? false : !access[accessKeysMap[pathname] as keyof AccessObject])
  ) {
    return <Navigate to="/403" replace />;
  }

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
      }}
      avatarProps={{
        size: 'small',
        src: initialState?.userInfo?.user?.avatar,
        title: initialState?.userInfo?.user?.nickName,
      }}
      actionsRender={() => [<IconSetting key="IconSetting" />, <IconLogout key="IconLogout" />]}
    >
      {element}
    </ProLayout>
  );
};

export default Layouts;
