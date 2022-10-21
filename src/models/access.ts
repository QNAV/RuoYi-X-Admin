import { checkPermission } from '@/utils';
import { atom, useAtomValue, useSetAtom } from 'jotai';

export const getAccess = (userPermissions: string[] = []) => {
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

    // 系统管理-字典管理
    canReadSysDict: checkPermission('system:dict:list', userPermissionsSet),
    canQuerySysDict: checkPermission('system:dict:query', userPermissionsSet),
    canAddSysDict: checkPermission('system:dict:add', userPermissionsSet),
    canEditSysDict: checkPermission('system:dict:edit', userPermissionsSet),
    canRemoveSysDict: checkPermission('system:dict:remove', userPermissionsSet),
    canExportSysDict: checkPermission('system:dict:export', userPermissionsSet),

    // 系统管理-参数管理
    canReadSysConfig: checkPermission('system:config:list', userPermissionsSet),
    canQuerySysConfig: checkPermission('system:config:query', userPermissionsSet),
    canAddSysConfig: checkPermission('system:config:add', userPermissionsSet),
    canEditSysConfig: checkPermission('system:config:edit', userPermissionsSet),
    canRemoveSysConfig: checkPermission('system:config:remove', userPermissionsSet),
    canExportSysConfig: checkPermission('system:config:export', userPermissionsSet),

    // 系统管理-通知公告
    canReadSysNotice: checkPermission('system:notice:list', userPermissionsSet),
    canQuerySysNotice: checkPermission('system:notice:query', userPermissionsSet),
    canAddSysNotice: checkPermission('system:notice:add', userPermissionsSet),
    canEditSysNotice: checkPermission('system:notice:edit', userPermissionsSet),
    canRemoveSysNotice: checkPermission('system:notice:remove', userPermissionsSet),

    // 系统管理-日志管理-操作日志
    canReadSysOperLog: checkPermission('system:operlog:list', userPermissionsSet),
    canQuerySysOperLog: checkPermission('system:operlog:query', userPermissionsSet),
    canRemoveSysOperLog: checkPermission('system:operlog:remove', userPermissionsSet),
    canExportSysOperLog: checkPermission('system:operlog:export', userPermissionsSet),

    // 系统管理-日志管理-登录日志
    canReadSysLogininfor: checkPermission('system:logininfor:list', userPermissionsSet),
    canQuerySysLogininfor: checkPermission('system:logininfor:query', userPermissionsSet),
    canRemoveSysLogininfor: checkPermission('system:logininfor:remove', userPermissionsSet),
    canExportSysLogininfor: checkPermission('system:logininfor:export', userPermissionsSet),

    // 系统管理-文件管理
    canReadSysOSS: checkPermission('system:oss:list', userPermissionsSet),
    canQuerySysOSS: checkPermission('system:oss:query', userPermissionsSet),
    canRemoveSysOSS: checkPermission('system:oss:remove', userPermissionsSet),
    canAddSysOSS: checkPermission('system:oss:add', userPermissionsSet),
    canEditSysOSS: checkPermission('system:oss:edit', userPermissionsSet),
    canUploadSysOSS: checkPermission('system:oss:upload', userPermissionsSet),
    canDownloadSysOSS: checkPermission('system:oss:download', userPermissionsSet),

    // 系统监控-在线用户
    canReadMonitorOnline: checkPermission('monitor:online:list', userPermissionsSet),
    canQueryMonitorOnline: checkPermission('monitor:online:query', userPermissionsSet),
    canForceLogoutMonitorOnline: checkPermission('monitor:online:forceLogout', userPermissionsSet),
    canBatchLogoutMonitorOnline: checkPermission('monitor:online:batchLogout', userPermissionsSet),

    // 系统监控-数据监控
    canReadMonitorDruid: checkPermission('monitor:druid:list', userPermissionsSet),

    // 系统监控-缓存监控
    canReadMonitorCache: checkPermission('monitor:cache:list', userPermissionsSet),

    // 系统监控-Admin 监控
    canReadMonitorAdmin: checkPermission('monitor:admin:list', userPermissionsSet),

    // 系统监控-任务调度中心
    canReadMonitorXxlJob: checkPermission('monitor:xxljob:list', userPermissionsSet),

    // 系统工具-表单构建
    canReadToolBuild: checkPermission('tool:build:list', userPermissionsSet),

    // 系统工具-代码生成
    canReadToolGen: checkPermission('tool:gen:list', userPermissionsSet),
    canQueryToolGen: checkPermission('tool:gen:query', userPermissionsSet),
    canPreviewToolGen: checkPermission('tool:gen:preview', userPermissionsSet),
    canEditToolGen: checkPermission('tool:gen:edit', userPermissionsSet),
    canRemoveToolGen: checkPermission('tool:gen:remove', userPermissionsSet),
    canImportToolGen: checkPermission('tool:gen:import', userPermissionsSet),
    canCodeToolGen: checkPermission('tool:gen:code', userPermissionsSet),

    // 系统工具-系统接口
    canReadToolSwagger: checkPermission('tool:swagger:list', userPermissionsSet),

    // 测试菜单-测试单表
    canReadDemoDemo: checkPermission('demo:demo:list', userPermissionsSet),
    canQueryDemoDemo: checkPermission('demo:demo:query', userPermissionsSet),
    canAddDemoDemo: checkPermission('demo:demo:add', userPermissionsSet),
    canEditDemoDemo: checkPermission('demo:demo:edit', userPermissionsSet),
    canRemoveDemoDemo: checkPermission('demo:demo:remove', userPermissionsSet),
    canExportDemoDemo: checkPermission('demo:demo:export', userPermissionsSet),

    // 测试菜单-测试树表
    canReadDemoTree: checkPermission('demo:tree:list', userPermissionsSet),
    canQueryDemoTree: checkPermission('demo:tree:query', userPermissionsSet),
    canAddDemoTree: checkPermission('demo:tree:add', userPermissionsSet),
    canEditDemoTree: checkPermission('demo:tree:edit', userPermissionsSet),
    canRemoveDemoTree: checkPermission('demo:tree:remove', userPermissionsSet),
    canExportDemoTree: checkPermission('demo:tree:export', userPermissionsSet),
  };
};

export type AccessObject = ReturnType<typeof getAccess>;

const atomAccess = atom<AccessObject>(getAccess());
export const useAtomValueAccess = () => useAtomValue(atomAccess);
export const useSetAtomAccess = () => useSetAtom(atomAccess);
