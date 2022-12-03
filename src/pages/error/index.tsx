import { Error, NotExist } from '@/components';
import type { FC } from 'react';
import { useRouteError } from 'react-router-dom';

const PageError: FC = () => {
  const e = useRouteError() as { status?: number; statusText?: string };

  if (e?.status === 404) {
    return <NotExist />;
  }

  return <Error />;
};

export default PageError;
