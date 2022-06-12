import Nprogress from 'nprogress';
import type { FC } from 'react';
import { useEffect } from 'react';

const Loading: FC = () => {
  useEffect(() => {
    Nprogress.start();

    return () => {
      Nprogress.done();
    };
  }, []);

  return null;
};

export default Loading;
