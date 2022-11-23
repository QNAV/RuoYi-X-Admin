import type { FC, ReactNode } from 'react';
import { createElement, Fragment } from 'react';

export interface AccessProps {
  accessible?: boolean;
  children: ReactNode;
  fallback?: ReactNode;
}

export const Access: FC<AccessProps> = ({ accessible = false, children, fallback }) => {
  if (accessible) return createElement(Fragment, null, children);

  if (fallback) return createElement(Fragment, null, fallback);

  return null;
};
