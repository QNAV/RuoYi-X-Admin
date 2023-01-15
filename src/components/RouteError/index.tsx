import { Error, NotExist } from '@/components';
import type { FC } from 'react';
import { useRouteError } from 'react-router-dom';

export const RouteError: FC = () => {
  const e = useRouteError() as { status?: number; statusText?: string };

  if (e?.status === 404) {
    return <NotExist />;
  }

  return <Error />;
};
