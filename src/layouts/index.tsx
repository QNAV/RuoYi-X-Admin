import { useKeepAliveOutlets } from '@/hooks';
import HeaderContent from '@/layouts/components/HeaderContent';
import MenuItem from '@/layouts/components/MenuItem';
import { useAccess, useInitialState } from '@/models';
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

  const { data: initialState, isFetching, isSuccess } = useInitialState();

  const access = useAccess();

  const hasAccess = useMemo(() => {
    const accessKey = accessKeysMap?.[pathname];

    if (accessKey === undefined) {
      return true;
    }

    return !!access?.[accessKey as keyof typeof access];
  }, [pathname, access]);

  if (!isFetching && !isSuccess) {
    return <Navigate to="/500" replace />;
  }

  if (!hasAccess && isSuccess) {
    return <Navigate to="/403" replace />;
  }

  return (
    <ProLayout
      title="RuoYi X Admin"
      onMenuHeaderClick={() => navigate('/')}
      location={{ pathname }}
      menu={{ loading: isFetching }}
      loading={isFetching}
      headerContentRender={HeaderContent}
      menuItemRender={MenuItem}
      menuDataRender={() => convertUserRoutesToMenus(initialState?.userRoutes ?? [])}
    >
      {element}
    </ProLayout>
  );
};

export default Layouts;
