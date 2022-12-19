import NProgress from 'nprogress';
import type { FC } from 'react';
import { useEffect } from 'react';

const nProgress = NProgress.configure({ showSpinner: false });

export const LoadingProgress: FC = () => {
  useEffect(() => {
    nProgress.start();

    return () => {
      nProgress.done();
    };
  }, []);

  return null;
};
