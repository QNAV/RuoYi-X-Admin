import type { InitialState } from '@/types';
import { checkPermission } from '@/utils';

const access = (initialState: InitialState) => {
  const userPermissions = new Set(initialState?.userInfo?.permissions ?? []);

  return {
    canReadSysMenu: checkPermission('system:menu:list', userPermissions),
  };
};

export default access;
