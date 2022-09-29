import { useKeepAliveOutlets } from '@/hooks';
import Footer from '@/layouts/components/Footer';
import IconLogout from '@/layouts/components/IconLogout';
import IconSetting from '@/layouts/components/IconSetting';
import KeepAliveTabs from '@/layouts/components/KeepAliveTabs';
import MenuItem from '@/layouts/components/MenuItem';
import { useAtomValueAccess, useInitialState } from '@/models';
import { accessKeysMap } from '@/routes';
import { convertUserRoutesToMenus } from '@/utils';
import { ProLayout } from '@ant-design/pro-components';
import type { FC } from 'react';
import { useMemo } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const Layouts: FC = () => {
  const { pathname } = useLocation();

  const navigate = useNavigate();

  const element = useKeepAliveOutlets(pathname);

  const { data: initialState, isSuccess, isLoading } = useInitialState();

  const access = useAtomValueAccess();

  const hasAccess = useMemo(() => {
    const accessKey = accessKeysMap?.[pathname];

    if (accessKey === undefined) {
      return true;
    }

    return !!access?.[accessKey as keyof typeof access];
  }, [pathname, access]);

  if (!isLoading && !isSuccess) {
    return <Navigate to="/500" replace />;
  }

  if (!hasAccess && !isLoading && isSuccess) {
    return <Navigate to="/403" replace />;
  }

  return (
    <ProLayout
      title="RuoYi X Admin"
      location={{ pathname }}
      onMenuHeaderClick={() => navigate('/')}
      menu={{ loading: isLoading }}
      loading={isLoading}
      menuItemRender={MenuItem}
      menuDataRender={() => convertUserRoutesToMenus(initialState?.userRoutes ?? [])}
      footerRender={Footer}
      token={{
        pageContainer: {
          marginBlockPageContainerContent: 0,
          marginInlinePageContainerContent: 0,
        },
      }}
      avatarProps={{
        size: 'small',
        src: initialState?.userInfo?.user?.avatar,
        title: initialState?.userInfo?.user?.nickName,
      }}
      actionsRender={() => [<IconSetting key="IconSetting" />, <IconLogout key="IconLogout" />]}
    >
      <KeepAliveTabs />
      {element}
    </ProLayout>
  );
};

export default Layouts;
