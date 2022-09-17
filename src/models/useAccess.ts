import { useInitialState } from '@/models';
import { checkPermission } from '@/utils';
import { useMemo } from 'react';

export const useAccess = () => {
  const initialState = useInitialState();

  return useMemo(() => {
    const userPermissions = new Set(initialState?.data?.userInfo?.permissions ?? []);

    return {
      // 系统管理-用户管理
      canReadSysUser: checkPermission('system:user:list', userPermissions),
      canQuerySysUser: checkPermission('system:user:query', userPermissions),
      canAddSysUser: checkPermission('system:user:add', userPermissions),
      canEditSysUser: checkPermission('system:user:edit', userPermissions),
      canRemoveSysUser: checkPermission('system:user:remove', userPermissions),
      canExportSysUser: checkPermission('system:user:export', userPermissions),
      canImportSysUser: checkPermission('system:user:import', userPermissions),
      canResetSysUserPwd: checkPermission('system:user:resetPwd', userPermissions),

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

      // 系统管理-部门管理
      canReadSysDept: checkPermission('system:dept:list', userPermissions),
      canQuerySysDept: checkPermission('system:dept:query', userPermissions),
      canAddSysDept: checkPermission('system:dept:add', userPermissions),
      canEditSysDept: checkPermission('system:dept:edit', userPermissions),
      canRemoveSysDept: checkPermission('system:dept:remove', userPermissions),

      // 系统管理-岗位管理
      canReadSysPost: checkPermission('system:post:list', userPermissions),
      canQuerySysPost: checkPermission('system:post:query', userPermissions),
      canAddSysPost: checkPermission('system:post:add', userPermissions),
      canEditSysPost: checkPermission('system:post:edit', userPermissions),
      canRemoveSysPost: checkPermission('system:post:remove', userPermissions),
      canExportSysPost: checkPermission('system:post:export', userPermissions),
    };
  }, [initialState?.data?.userInfo?.permissions]);
};
