import type { InitialState } from '@/types';
import { checkPermission } from '@/utils';

const access = (initialState: InitialState) => {
  const userPermissions = new Set(initialState?.userInfo?.permissions ?? []);

  return {
    // 系统管理-角色管理
    canReadSysRole: checkPermission('system:role:list', userPermissions),
    canQuerySysRole: checkPermission('system:role:query', userPermissions),
    canAddSysRole: checkPermission('system:role:add', userPermissions),
    canEditSysRole: checkPermission('system:role:edit', userPermissions),
    canRemoveSysRole: checkPermission('system:role:remove', userPermissions),
    canExportSysRole: checkPermission('system:role:export', userPermissions),

    // 系统管理-菜单管理
    canReadSysMenu: checkPermission('system:menu:list', userPermissions),
    canQuerySysMenu: checkPermission('system:menu:query', userPermissions),
    canAddSysMenu: checkPermission('system:menu:add', userPermissions),
    canEditSysMenu: checkPermission('system:menu:edit', userPermissions),
    canRemoveSysMenu: checkPermission('system:menu:remove', userPermissions),
  };
};

export default access;
