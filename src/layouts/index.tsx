import { useKeepAliveOutlets } from '@/hooks';
import Footer from '@/layouts/components/Footer';
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

  const { data: initialState, isSuccess, isLoading } = useInitialState();

  const access = useAccess();

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
      layout="mix"
      location={{ pathname }}
      onMenuHeaderClick={() => navigate('/')}
      menu={{ loading: isLoading }}
      loading={isLoading}
      headerContentRender={HeaderContent}
      menuItemRender={MenuItem}
      menuDataRender={() => convertUserRoutesToMenus(initialState?.userRoutes ?? [])}
      footerRender={Footer}
      bgLayoutImgList={[
        {
          src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
          left: 85,
          bottom: 100,
          height: '303px',
        },
        {
          src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
          bottom: -68,
          right: -45,
          height: '303px',
        },
        {
          src: 'https://img.alicdn.com/imgextra/i3/O1CN018NxReL1shX85Yz6Cx_!!6000000005798-2-tps-884-496.png',
          bottom: 0,
          left: 0,
          width: '331px',
        },
      ]}
    >
      {element}
    </ProLayout>
  );
};

export default Layouts;
