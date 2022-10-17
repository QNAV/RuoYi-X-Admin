import { useKeepAliveOutlets } from '@/hooks';
import IconLogout from '@/layouts/components/IconLogout';
import IconSetting from '@/layouts/components/IconSetting';
import MenuItem from '@/layouts/components/MenuItem';
import TabsKeepAlive from '@/layouts/components/TabsKeepAlive';
import type { AccessObject } from '@/models';
import { useQueryInitialState } from '@/models';
import { accessKeysMap } from '@/routes';
import { convertUserRoutesToMenus } from '@/utils';
import { ProLayout } from '@ant-design/pro-components';
import type { FC } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const Layouts: FC = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const element = useKeepAliveOutlets(pathname);

  const { data: initialState, isSuccess, isLoading, isError } = useQueryInitialState();
  const accessible = accessKeysMap?.[pathname]
    ? !!initialState?.accessObject?.[accessKeysMap[pathname] as keyof AccessObject]
    : true;

  if (isError) {
    return <Navigate to="/500" replace />;
  }

  if (isSuccess && !accessible) {
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
      <TabsKeepAlive />
      {element}
    </ProLayout>
  );
};

export default Layouts;
