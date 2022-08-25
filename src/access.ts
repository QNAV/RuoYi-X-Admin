import type { InitialState } from '@/types';
import { checkPermission } from '@/utils';

const access = (initialState: InitialState) => {
  const userPermissions = new Set(initialState?.userInfo?.permissions ?? []);

  return {
    // 系统管理-菜单管理
    canReadSysMenu: checkPermission('system:menu:list', userPermissions),
    canQuerySysMenu: checkPermission('system:menu:query', userPermissions),
    canAddSysMenu: checkPermission('system:menu:add', userPermissions),
    canEditSysMenu: checkPermission('system:menu:edit', userPermissions),
    canDeleteSysMenu: checkPermission('system:menu:delete', userPermissions),
  };
};

export default access;
