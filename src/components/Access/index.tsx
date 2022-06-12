import { useAccess } from '@@/plugin-access';
import type { FC, ReactElement, ReactNode } from 'react';
import { createElement, Fragment } from 'react';

export const Access: FC<{
  permissions: string | string[];
  strict?: boolean;
  children: ReactNode;
  fallback?: ReactElement;
}> = ({ permissions, strict = true, children, fallback }) => {
  const { verifyPermissions } = useAccess();

  if (verifyPermissions(permissions, strict)) return createElement(Fragment, null, children);

  if (fallback) return fallback;

  return null;
};
