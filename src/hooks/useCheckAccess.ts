import { useQueryInitialState } from '@/models';
import type { CheckAccessOptions } from '@/utils';
import { checkAccess } from '@/utils';
import { useCallback } from 'react';

export const useCheckAccess = () => {
  const { data } = useQueryInitialState();

  return useCallback(
    (accessKey: string | string[], options?: CheckAccessOptions) =>
      checkAccess(accessKey, new Set(data?.userInfo?.permissions ?? []), options),
    [data],
  );
};
