import { LoadingProgress } from '@/components';
import type { FC } from 'react';
import { lazy, Suspense } from 'react';

const Layouts = lazy(() => import('@/layouts'));

const modules = import.meta.glob<{ default: FC }>(['../pages/**/index.tsx']);

export const lazyLoadLayouts = () => {
  return (
    <Suspense fallback={<LoadingProgress />}>
      <Layouts />
    </Suspense>
  );
};

export const lazyLoadPage = (pagePath: string) => {
  const Component = lazy(modules[`../pages/${pagePath}/index.tsx`]);

  return (
    <Suspense fallback={<LoadingProgress />}>
      <Component />
    </Suspense>
  );
};
