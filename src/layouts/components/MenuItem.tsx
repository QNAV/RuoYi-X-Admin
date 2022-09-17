import { isHttpUrl } from '@/utils';
import type { MenuDataItem, ProLayoutProps } from '@ant-design/pro-components';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

const MenuItem: ProLayoutProps['menuItemRender'] = (menuItemProps: MenuDataItem, defaultDom: ReactNode) => {
  if (!menuItemProps?.path) {
    return defaultDom;
  }

  return (
    <Link to={menuItemProps.path} target={isHttpUrl(menuItemProps.path) ? '_blank' : '_self'} rel="noopener noreferrer">
      {defaultDom}
    </Link>
  );
};

export default MenuItem;
