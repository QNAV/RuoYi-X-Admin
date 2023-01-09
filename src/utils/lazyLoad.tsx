import { LoadingProgress } from '@/components';
import type { FC } from 'react';
import { lazy, Suspense } from 'react';

const modules = import.meta.glob<{ default: FC }>(['../pages/**/index.tsx']);

export const lazyLoad = (pagePath: string) => {
  const Component = lazy(modules[`../pages/${pagePath}/index.tsx`]);

  return (
    <Suspense fallback={<LoadingProgress />}>
      <Component />
    </Suspense>
  );
};
