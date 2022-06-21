import { rootKey } from '@/utils';
import { useAccess } from '@umijs/max';
import { useCallback } from 'react';

export type VerifyPermissions = (permissions: string | string[], strict: boolean) => boolean;

export const useVerifyPermissions = () => {
  const access = useAccess();

  return useCallback<VerifyPermissions>(
    (permissions, strict = true) => {
      // 拥有 root 权限，全部通过
      if (access?.[rootKey]) return true;

      if (typeof permissions === 'string') {
        return !!access?.[permissions];
      }

      // 默认为严格模式，全部权限都必须存在
      if (strict) {
        return permissions.every((key) => !!access?.[key]);
      }

      return !!permissions.find((key) => !!access?.[key]);
    },
    [access],
  );
};
