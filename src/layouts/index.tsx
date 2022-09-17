import { useKeepAliveOutlets } from '@/hooks/keepAlive';
import HeaderContent from '@/layouts/components/HeaderContent';
import MenuItem from '@/layouts/components/MenuItem';
import { ProLayout } from '@ant-design/pro-layout';
import type { FC } from 'react';
import { useLocation } from 'react-router-dom';

const Layouts: FC = () => {
  const { pathname } = useLocation();

  const element = useKeepAliveOutlets(pathname);

  return (
    <ProLayout
      headerContentRender={HeaderContent}
      menuItemRender={MenuItem}
      menuDataRender={() => [
        {
          name: 'demo1',
          path: '/demo1',
        },
        {
          name: 'demo2',
          path: '/demo2',
        },
      ]}
    >
      {element}
    </ProLayout>
  );
};

export default Layouts;
