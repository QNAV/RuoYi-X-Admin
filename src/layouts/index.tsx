import { useKeepAliveOutlets } from '@/hooks';
import HeaderContent from '@/layouts/components/HeaderContent';
import MenuItem from '@/layouts/components/MenuItem';
import { useInitialState } from '@/models';
import { convertUserRoutesToMenus } from '@/utils';
import { ProLayout } from '@ant-design/pro-components';
import type { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Layouts: FC = () => {
  const { pathname } = useLocation();

  const navigate = useNavigate();

  const element = useKeepAliveOutlets(pathname);

  const { data: initialState, isFetching } = useInitialState();

  return (
    <ProLayout
      title="RuoYi X Admin"
      onMenuHeaderClick={() => navigate('/')}
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
