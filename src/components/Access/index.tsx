import type { FC, ReactElement, ReactNode } from 'react';
import { createElement, Fragment } from 'react';

export const Access: FC<{
  accessible?: boolean;
  children: ReactNode;
  fallback?: ReactElement;
}> = ({ accessible, children, fallback }) => {
  if (accessible) return createElement(Fragment, null, children);

  if (fallback) return fallback;

  return null;
};
