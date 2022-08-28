import type { InitialState } from '@/types';
import { checkPermission } from '@/utils';

const access = (initialState: InitialState) => {
  const userPermissions = new Set(initialState?.userInfo?.permissions ?? []);

  return {
    // 系统管理-角色管理
    canReadSysRole: checkPermission('sys:role:list', userPermissions),
    canQuerySysRole: checkPermission('sys:role:query', userPermissions),
    canAddSysRole: checkPermission('sys:role:add', userPermissions),
    canEditSysRole: checkPermission('sys:role:edit', userPermissions),
    canRemoveSysRole: checkPermission('sys:role:remove', userPermissions),
    canExportSysRole: checkPermission('sys:role:export', userPermissions),

    // 系统管理-菜单管理
    canReadSysMenu: checkPermission('system:menu:list', userPermissions),
    canQuerySysMenu: checkPermission('system:menu:query', userPermissions),
    canAddSysMenu: checkPermission('system:menu:add', userPermissions),
    canEditSysMenu: checkPermission('system:menu:edit', userPermissions),
    canRemoveSysMenu: checkPermission('system:menu:remove', userPermissions),
  };
};

export default access;
