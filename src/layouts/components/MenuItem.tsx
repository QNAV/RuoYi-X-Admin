import { isHttpUrl } from '@/utils';
import type { MenuDataItem, ProLayoutProps } from '@ant-design/pro-components';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

const MenuItem: ProLayoutProps['menuItemRender'] = (menuItemProps: MenuDataItem, defaultDom: ReactNode) => {
  if (!menuItemProps?.path) {
    return defaultDom;
  }

  if (isHttpUrl(menuItemProps.path)) {
    return (
      <a href={menuItemProps.path} target="_blank" rel="noopener noreferrer">
        {defaultDom}
      </a>
    );
  }

  return <Link to={menuItemProps.path}>{defaultDom}</Link>;
};

export default MenuItem;
