import type { AccessProps } from '@/components';
import { Access } from '@/components';
import { useCheckAccess } from '@/hooks';
import type { CheckAccessOptions } from '@/utils';
import type { FC } from 'react';
import { useMemo } from 'react';

export interface AccessWithStateProps extends Omit<AccessProps, 'accessible'> {
  accessKey: string | string[] | ((userAccessKey: Set<string>) => boolean);
  options?: CheckAccessOptions;
}

export const AccessWithState: FC<AccessWithStateProps> = ({ children, fallback, accessKey, options }) => {
  const checkAccess = useCheckAccess();

  const accessible = useMemo(() => checkAccess(accessKey, options), [accessKey, options, checkAccess]);

  return (
    <Access accessible={accessible} fallback={fallback}>
      {children}
    </Access>
  );
};
