import type { AccessProps } from '@/components';
import { Access } from '@/components';
import { useQueryInitialState } from '@/models';
import type { CheckAccessOptions } from '@/utils';
import { checkAccess } from '@/utils';
import type { FC } from 'react';

export interface AccessWithStateProps extends Omit<AccessProps, 'accessible'>, CheckAccessOptions {
  accessKey: string | string[] | ((userAccessKey: Set<string>) => boolean);
}

export const AccessWithState: FC<AccessWithStateProps> = ({
  children,
  fallback,
  accessKey,
  reverse = false,
  strict = true,
}) => {
  const { data } = useQueryInitialState();

  const accessSet = new Set(data?.userInfo?.permissions ?? []);

  const accessible =
    typeof accessKey === 'function'
      ? accessKey(accessSet)
      : checkAccess(accessKey, accessSet, {
          reverse,
          strict,
        });

  return (
    <Access accessible={accessible} fallback={fallback}>
      {children}
    </Access>
  );
};
