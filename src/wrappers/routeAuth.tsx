import { rootKey } from '@/utils';
import { Navigate, Outlet } from '@@/exports';
import { useAccess } from '@@/plugin-access';
import type { FC } from 'react';

const RouteAuth: FC = (props) => {
  console.log(props);
  const access = useAccess();

  if (access?.[rootKey]) {
    return <Outlet />;
  } else {
    return <Navigate to="/403" />;
  }
};

export default RouteAuth;
