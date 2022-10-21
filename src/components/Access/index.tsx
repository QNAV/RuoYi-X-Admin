import type { FC, ReactNode } from 'react';
import { createElement, Fragment } from 'react';

export const Access: FC<{
  accessible?: boolean;
  children: ReactNode;
  fallback?: ReactNode;
}> = ({ accessible = false, children, fallback }) => {
  if (accessible) return createElement(Fragment, null, children);

  if (fallback) return createElement(Fragment, null, fallback);

  return null;
};
