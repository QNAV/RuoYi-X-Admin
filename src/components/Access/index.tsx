import { useVerifyPermissions } from '@/hooks';
import type { FC, ReactElement, ReactNode } from 'react';
import { createElement, Fragment } from 'react';

export const Access: FC<{
  permissions: string | string[];
  strict?: boolean;
  children: ReactNode;
  fallback?: ReactElement;
}> = ({ permissions, strict = true, children, fallback }) => {
  const verifyPermissions = useVerifyPermissions();

  if (verifyPermissions(permissions, strict)) return createElement(Fragment, null, children);

  if (fallback) return fallback;

  return null;
};
