import nProgress from 'nprogress';
import type { FC } from 'react';
import { useEffect } from 'react';

export const LoadingProgress: FC = () => {
  useEffect(() => {
    nProgress.start();

    return () => {
      nProgress.done();
    };
  }, []);

  return null;
};
