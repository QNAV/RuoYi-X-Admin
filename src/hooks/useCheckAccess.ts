import { useQueryInitialState } from '@/models';
import type { CheckAccessOptions } from '@/utils';
import { checkAccess } from '@/utils';
import { useCallback } from 'react';

export const useCheckAccess = () => {
  const { data } = useQueryInitialState();

  return useCallback(
    (accessKey: string | string[] | ((accessSet: Set<string>) => boolean), options?: CheckAccessOptions) => {
      const accessSet = new Set(data?.userInfo?.permissions ?? []);

      if (typeof accessKey === 'function') {
        return accessKey(accessSet);
      }

      return checkAccess(accessKey, accessSet, options);
    },
    [data],
  );
};
