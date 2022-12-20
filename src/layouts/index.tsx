import { Access, PermissionDenied } from '@/components';
import IconLogout from '@/layouts/components/IconLogout';
import IconSetting from '@/layouts/components/IconSetting';
import KeepAliveOutlet from '@/layouts/components/KeepAliveOutlet';
import MenuItem from '@/layouts/components/MenuItem';
import { useQueryInitialState } from '@/models';
import { accessKeysMap, accessRoutes } from '@/routes';
import { checkAccess, convertUserRoutesToMenus } from '@/utils';
import type { ProTokenType } from '@ant-design/pro-components';
import { ProLayout } from '@ant-design/pro-components';
import type { FC } from 'react';
import { useMemo } from 'react';
import { matchPath, useLocation, useNavigate } from 'react-router-dom';

const token: ProTokenType['layout'] = {
  pageContainer: {
    paddingBlockPageContainerContent: 0,
    paddingInlinePageContainerContent: 0,
  },
};

const Layouts: FC = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const { data: initialState, isLoading } = useQueryInitialState();

  const accessible = useMemo(() => {
    const currRouteAccessKey = accessRoutes.find((key) => matchPath(key, pathname));

    if (currRouteAccessKey === undefined) return true;

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
      token={token}
      avatarProps={{
        size: 'small',
        src: initialState?.userInfo?.user?.avatar,
        title: initialState?.userInfo?.user?.nickName,
      }}
      actionsRender={() => [<IconSetting key="IconSetting" />, <IconLogout key="IconLogout" />]}
    >
      {!isLoading && (
        <Access accessible={accessible} fallback={<PermissionDenied />}>
          <KeepAliveOutlet />
        </Access>
      )}
    </ProLayout>
  );
};

export default Layouts;
