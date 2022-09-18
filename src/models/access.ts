import { checkPermission } from '@/utils';
import { atom, useRecoilValue, useSetRecoilState } from 'recoil';

const namespace = 'global';

const getAccess = (userPermissions: string[] = []) => {
  const userPermissionsSet = new Set(userPermissions);

  return {
    // 系统管理-用户管理
    canReadSysUser: checkPermission('system:user:list', userPermissionsSet),
    canQuerySysUser: checkPermission('system:user:query', userPermissionsSet),
    canAddSysUser: checkPermission('system:user:add', userPermissionsSet),
    canEditSysUser: checkPermission('system:user:edit', userPermissionsSet),
    canRemoveSysUser: checkPermission('system:user:remove', userPermissionsSet),
    canExportSysUser: checkPermission('system:user:export', userPermissionsSet),
    canImportSysUser: checkPermission('system:user:import', userPermissionsSet),
    canResetSysUserPwd: checkPermission('system:user:resetPwd', userPermissionsSet),

    // 系统管理-角色管理
    canReadSysRole: checkPermission('system:role:list', userPermissionsSet),
    canQuerySysRole: checkPermission('system:role:query', userPermissionsSet),
    canAddSysRole: checkPermission('system:role:add', userPermissionsSet),
    canEditSysRole: checkPermission('system:role:edit', userPermissionsSet),
    canRemoveSysRole: checkPermission('system:role:remove', userPermissionsSet),
    canExportSysRole: checkPermission('system:role:export', userPermissionsSet),

    // 系统管理-菜单管理
    canReadSysMenu: checkPermission('system:menu:list', userPermissionsSet),
    canQuerySysMenu: checkPermission('system:menu:query', userPermissionsSet),
    canAddSysMenu: checkPermission('system:menu:add', userPermissionsSet),
    canEditSysMenu: checkPermission('system:menu:edit', userPermissionsSet),
    canRemoveSysMenu: checkPermission('system:menu:remove', userPermissionsSet),

    // 系统管理-部门管理
    canReadSysDept: checkPermission('system:dept:list', userPermissionsSet),
    canQuerySysDept: checkPermission('system:dept:query', userPermissionsSet),
    canAddSysDept: checkPermission('system:dept:add', userPermissionsSet),
    canEditSysDept: checkPermission('system:dept:edit', userPermissionsSet),
    canRemoveSysDept: checkPermission('system:dept:remove', userPermissionsSet),

    // 系统管理-岗位管理
    canReadSysPost: checkPermission('system:post:list', userPermissionsSet),
    canQuerySysPost: checkPermission('system:post:query', userPermissionsSet),
    canAddSysPost: checkPermission('system:post:add', userPermissionsSet),
    canEditSysPost: checkPermission('system:post:edit', userPermissionsSet),
    canRemoveSysPost: checkPermission('system:post:remove', userPermissionsSet),
    canExportSysPost: checkPermission('system:post:export', userPermissionsSet),
  };
};

const AtomAccess = atom({
  key: `${namespace}Access`,
  default: getAccess(),
});

export const useAccess = () => useRecoilValue(AtomAccess);

export const useSetAccess = () => {
  const setRecoilState = useSetRecoilState(AtomAccess);
  return (userPermissions: string[] = []) => setRecoilState(getAccess(userPermissions));
};
