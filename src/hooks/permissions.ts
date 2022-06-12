import { useAccess } from '@@/plugin-access';
import { isObject } from 'lodash-es';
import { useCallback } from 'react';

type Access = Record<string, boolean> | undefined;

const rootKey = '*:*:*';

export const useVerifyPermissions = () => {
  const access = useAccess() as Access;

  return useCallback(
    (keys: string | string[]) => {
      if (!access || !isObject(access)) return false;

      if (access?.[rootKey]) return true;

      if (typeof keys === 'string') {
        return !!access?.[keys];
      }

      return !!keys.find((key) => access?.[key] ?? false);
    },
    [access],
  );
};
