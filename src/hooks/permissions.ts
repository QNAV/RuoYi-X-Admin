import { useAccess } from '@@/plugin-access';
import { isObject } from 'lodash-es';
import { useCallback } from 'react';

export type VerifyPermissions = (permissions: string | string[], strict: boolean) => boolean;
type Access = Record<string, boolean> | undefined;

const rootKey = '*:*:*';

export const useVerifyPermissions = (): VerifyPermissions => {
  const access = useAccess() as Access;

  return useCallback<VerifyPermissions>(
    (permissions, strict) => {
      // 未完成初始化，全部返回 false
      if (!access || !isObject(access)) return false;

      // 拥有 root 权限，全部通过
      if (access?.[rootKey]) return true;

      if (typeof permissions === 'string') {
        return !!access?.[permissions];
      }

      // 严格模式，全部权限都必须存在
      if (strict) {
        return permissions.every((key) => !!access?.[key]);
      }

      return !!permissions.find((key) => !!access?.[key]);
    },
    [access],
  );
};
