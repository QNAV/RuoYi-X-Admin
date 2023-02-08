/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import type { RequestParams } from '@/utils';
import { ContentType, request } from '@/utils';
import type {
  AuthRoleAllBo,
  AuthUserAllBo,
  BizLogininforAddBo,
  BizLogininforEditBo,
  BizLogininforPageQueryBo,
  BizLogininforQueryBo,
  LoginUserUpdateBo,
  RAvatarUploadVo,
  RBizLogininforVo,
  RListSysDeptVo,
  RListSysDictDataVo,
  RListSysDictTypeVo,
  RListSysMenuVo,
  RListSysOssVo,
  RListSysPostVo,
  RListSysRoleVo,
  RListTreeLong,
  RMapStringObject,
  ROssUploadVo,
  RProfileVo,
  RRoleMenuTreeSelectVo,
  RSysConfigVo,
  RSysDeptVo,
  RSysDictDataVo,
  RSysDictTypeVo,
  RSysMenuVo,
  RSysNoticeVo,
  RSysOssConfigVo,
  RSysPostVo,
  RSysRoleVo,
  RUserAuthRoleVo,
  RUserDetailVo,
  RVoid,
  SysConfigAddBo,
  SysConfigEditBo,
  SysConfigPageQueryBo,
  SysConfigQueryBo,
  SysDeptAddBo,
  SysDeptEditBo,
  SysDeptQueryBo,
  SysDictDataAddBo,
  SysDictDataEditBo,
  SysDictDataPageQueryBo,
  SysDictDataQueryBo,
  SysDictTypeAddBo,
  SysDictTypeEditBo,
  SysDictTypePageQueryBo,
  SysDictTypeQueryBo,
  SysMenuAddBo,
  SysMenuEditBo,
  SysMenuQueryBo,
  SysNoticeAddBo,
  SysNoticeEditBo,
  SysNoticePageQueryBo,
  SysOssConfigAddBo,
  SysOssConfigEditBo,
  SysOssConfigPageQueryBo,
  SysOssPageQueryBo,
  SysPostAddBo,
  SysPostEditBo,
  SysPostPageQueryBo,
  SysPostQueryBo,
  SysRole,
  SysRolePageQueryBo,
  SysRoleQueryBo,
  SysUserAddBo,
  SysUserEditBo,
  SysUserPageQueryBo,
  SysUserQueryBo,
  SysUserRole,
  TableDataInfoBizLogininforVo,
  TableDataInfoSysConfigVo,
  TableDataInfoSysDictDataVo,
  TableDataInfoSysDictTypeVo,
  TableDataInfoSysNoticeVo,
  TableDataInfoSysOssConfigVo,
  TableDataInfoSysOssVo,
  TableDataInfoSysPostVo,
  TableDataInfoSysRoleVo,
  TableDataInfoSysUserVo,
  UpdatePwdBo,
} from './data-contracts';

/**
 * @description 重置密码
 *
 * @tags SysUserService
 * @name sysUserPostResetPwd
 * @request POST:/system/user/resetPwd
 * @secure
 */
export const sysUserPostResetPwd = (data: SysUserEditBo, params: RequestParams = {}) =>
  request<RVoid>({
    path: `/system/user/resetPwd`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: false,
    ...params,
  });
export const sysUserPostResetPwdSkipErrorHandler = (data: SysUserEditBo, params: RequestParams = {}) =>
  request<RVoid>({
    path: `/system/user/resetPwd`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: true,
    ...params,
  });
/**
 * @description 删除用户
 *
 * @tags SysUserService
 * @name sysUserPostRemove
 * @request POST:/system/user/remove
 * @secure
 */
export const sysUserPostRemove = (
  query: {
    /** 角色ID串 */
    userIds: number[];
  },
  params: RequestParams = {},
) =>
  request<RVoid>({
    path: `/system/user/remove`,
    method: 'POST',
    query: query,
    secure: true,
    skipErrorHandler: false,
    ...params,
  });
export const sysUserPostRemoveSkipErrorHandler = (
  query: {
    /** 角色ID串 */
    userIds: number[];
  },
  params: RequestParams = {},
) =>
  request<RVoid>({
    path: `/system/user/remove`,
    method: 'POST',
    query: query,
    secure: true,
    skipErrorHandler: true,
    ...params,
  });
/**
 * @description 个人信息
 *
 * @tags SysProfileService
 * @name sysProfileGetProfile
 * @request GET:/system/user/profile
 * @secure
 */
export const sysProfileGetProfile = (params: RequestParams = {}) =>
  request<RProfileVo>({
    path: `/system/user/profile`,
    method: 'GET',
    secure: true,
    skipErrorHandler: false,
    ...params,
  });
export const sysProfileGetProfileSkipErrorHandler = (params: RequestParams = {}) =>
  request<RProfileVo>({
    path: `/system/user/profile`,
    method: 'GET',
    secure: true,
    skipErrorHandler: true,
    ...params,
  });
/**
 * @description 修改用户
 *
 * @tags SysProfileService
 * @name sysProfilePostUpdateProfile
 * @request POST:/system/user/profile
 * @secure
 */
export const sysProfilePostUpdateProfile = (data: LoginUserUpdateBo, params: RequestParams = {}) =>
  request<RVoid>({
    path: `/system/user/profile`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: false,
    ...params,
  });
export const sysProfilePostUpdateProfileSkipErrorHandler = (data: LoginUserUpdateBo, params: RequestParams = {}) =>
  request<RVoid>({
    path: `/system/user/profile`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: true,
    ...params,
  });
/**
 * @description 重置密码
 *
 * @tags SysProfileService
 * @name sysProfilePostUpdatePwd
 * @request POST:/system/user/profile/updatePwd
 * @secure
 */
export const sysProfilePostUpdatePwd = (data: UpdatePwdBo, params: RequestParams = {}) =>
  request<RVoid>({
    path: `/system/user/profile/updatePwd`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: false,
    ...params,
  });
export const sysProfilePostUpdatePwdSkipErrorHandler = (data: UpdatePwdBo, params: RequestParams = {}) =>
  request<RVoid>({
    path: `/system/user/profile/updatePwd`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: true,
    ...params,
  });
/**
 * @description 头像上传
 *
 * @tags SysProfileService
 * @name sysProfilePostAvatar
 * @request POST:/system/user/profile/avatar
 * @secure
 */
export const sysProfilePostAvatar = (
  query: {
    /** 用户头像 */
    avatarfile: any;
  },
  data: {
    /** @format binary */
    avatarfile: File;
  },
  params: RequestParams = {},
) =>
  request<RAvatarUploadVo>({
    path: `/system/user/profile/avatar`,
    method: 'POST',
    query: query,
    body: data,
    secure: true,
    type: ContentType.FormData,
    skipErrorHandler: false,
    ...params,
  });
export const sysProfilePostAvatarSkipErrorHandler = (
  query: {
    /** 用户头像 */
    avatarfile: any;
  },
  data: {
    /** @format binary */
    avatarfile: File;
  },
  params: RequestParams = {},
) =>
  request<RAvatarUploadVo>({
    path: `/system/user/profile/avatar`,
    method: 'POST',
    query: query,
    body: data,
    secure: true,
    type: ContentType.FormData,
    skipErrorHandler: true,
    ...params,
  });
/**
 * @description 获取用户列表
 *
 * @tags SysUserService
 * @name sysUserPostList
 * @request POST:/system/user/list
 * @secure
 */
export const sysUserPostList = (data: SysUserPageQueryBo, params: RequestParams = {}) =>
  request<TableDataInfoSysUserVo>({
    path: `/system/user/list`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: false,
    ...params,
  });
export const sysUserPostListSkipErrorHandler = (data: SysUserPageQueryBo, params: RequestParams = {}) =>
  request<TableDataInfoSysUserVo>({
    path: `/system/user/list`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: true,
    ...params,
  });
/**
 * @description 用户授权角色
 *
 * @tags SysUserService
 * @name sysUserPostInsertAuthRole
 * @request POST:/system/user/insertAuthRole
 * @secure
 */
export const sysUserPostInsertAuthRole = (data: AuthRoleAllBo, params: RequestParams = {}) =>
  request<RVoid>({
    path: `/system/user/insertAuthRole`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: false,
    ...params,
  });
export const sysUserPostInsertAuthRoleSkipErrorHandler = (data: AuthRoleAllBo, params: RequestParams = {}) =>
  request<RVoid>({
    path: `/system/user/insertAuthRole`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: true,
    ...params,
  });
/**
 * @description 下载导入模板
 *
 * @tags SysUserService
 * @name sysUserPostImportTemplate
 * @request POST:/system/user/importTemplate
 * @secure
 */
export const sysUserPostImportTemplate = (params: RequestParams = {}) =>
  request<any>({
    path: `/system/user/importTemplate`,
    method: 'POST',
    secure: true,
    skipErrorHandler: false,
    ...params,
  });
export const sysUserPostImportTemplateSkipErrorHandler = (params: RequestParams = {}) =>
  request<any>({
    path: `/system/user/importTemplate`,
    method: 'POST',
    secure: true,
    skipErrorHandler: true,
    ...params,
  });
/**
 * @description 导入用户列表
 *
 * @tags SysUserService
 * @name sysUserPostImportData
 * @request POST:/system/user/importData
 * @secure
 */
export const sysUserPostImportData = (
  query: {
    /** 是否更新已存在数据 */
    updateSupport: boolean;
    /** 导入文件 */
    file: any;
  },
  data: {
    /**
     * 导入文件
     * @format binary
     */
    file: File;
  },
  params: RequestParams = {},
) =>
  request<RVoid>({
    path: `/system/user/importData`,
    method: 'POST',
    query: query,
    body: data,
    secure: true,
    type: ContentType.FormData,
    skipErrorHandler: false,
    ...params,
  });
export const sysUserPostImportDataSkipErrorHandler = (
  query: {
    /** 是否更新已存在数据 */
    updateSupport: boolean;
    /** 导入文件 */
    file: any;
  },
  data: {
    /**
     * 导入文件
     * @format binary
     */
    file: File;
  },
  params: RequestParams = {},
) =>
  request<RVoid>({
    path: `/system/user/importData`,
    method: 'POST',
    query: query,
    body: data,
    secure: true,
    type: ContentType.FormData,
    skipErrorHandler: true,
    ...params,
  });
/**
 * @description 导出用户列表
 *
 * @tags SysUserService
 * @name sysUserPostExport
 * @request POST:/system/user/export
 * @secure
 */
export const sysUserPostExport = (data: SysUserQueryBo, params: RequestParams = {}) =>
  request<any>({
    path: `/system/user/export`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: false,
    ...params,
  });
export const sysUserPostExportSkipErrorHandler = (data: SysUserQueryBo, params: RequestParams = {}) =>
  request<any>({
    path: `/system/user/export`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: true,
    ...params,
  });
/**
 * @description 修改用户
 *
 * @tags SysUserService
 * @name sysUserPostEdit
 * @request POST:/system/user/edit
 * @secure
 */
export const sysUserPostEdit = (data: SysUserEditBo, params: RequestParams = {}) =>
  request<RVoid>({
    path: `/system/user/edit`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: false,
    ...params,
  });
export const sysUserPostEditSkipErrorHandler = (data: SysUserEditBo, params: RequestParams = {}) =>
  request<RVoid>({
    path: `/system/user/edit`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: true,
    ...params,
  });
/**
 * @description 状态修改
 *
 * @tags SysUserService
 * @name sysUserPostChangeStatus
 * @request POST:/system/user/changeStatus
 * @secure
 */
export const sysUserPostChangeStatus = (data: SysUserEditBo, params: RequestParams = {}) =>
  request<RVoid>({
    path: `/system/user/changeStatus`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: false,
    ...params,
  });
export const sysUserPostChangeStatusSkipErrorHandler = (data: SysUserEditBo, params: RequestParams = {}) =>
  request<RVoid>({
    path: `/system/user/changeStatus`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: true,
    ...params,
  });
/**
 * @description 新增用户
 *
 * @tags SysUserService
 * @name sysUserPostAdd
 * @request POST:/system/user/add
 * @secure
 */
export const sysUserPostAdd = (data: SysUserAddBo, params: RequestParams = {}) =>
  request<RVoid>({
    path: `/system/user/add`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: false,
    ...params,
  });
export const sysUserPostAddSkipErrorHandler = (data: SysUserAddBo, params: RequestParams = {}) =>
  request<RVoid>({
    path: `/system/user/add`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: true,
    ...params,
  });
/**
 * @description 删除角色
 *
 * @tags SysRoleService
 * @name sysRolePostRemove
 * @request POST:/system/role/remove
 * @secure
 */
export const sysRolePostRemove = (
  query: {
    /** 角色ID串 */
    roleIds: number[];
  },
  params: RequestParams = {},
) =>
  request<RVoid>({
    path: `/system/role/remove`,
    method: 'POST',
    query: query,
    secure: true,
    skipErrorHandler: false,
    ...params,
  });
export const sysRolePostRemoveSkipErrorHandler = (
  query: {
    /** 角色ID串 */
    roleIds: number[];
  },
  params: RequestParams = {},
) =>
  request<RVoid>({
    path: `/system/role/remove`,
    method: 'POST',
    query: query,
    secure: true,
    skipErrorHandler: true,
    ...params,
  });
/**
 * @description 查询角色信息列表
 *
 * @tags SysRoleService
 * @name sysRolePostList
 * @request POST:/system/role/list
 * @secure
 */
export const sysRolePostList = (data: SysRolePageQueryBo, params: RequestParams = {}) =>
  request<TableDataInfoSysRoleVo>({
    path: `/system/role/list`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: false,
    ...params,
  });
export const sysRolePostListSkipErrorHandler = (data: SysRolePageQueryBo, params: RequestParams = {}) =>
  request<TableDataInfoSysRoleVo>({
    path: `/system/role/list`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: true,
    ...params,
  });
/**
 * @description 导出角色信息列表
 *
 * @tags SysRoleService
 * @name sysRolePostExport
 * @request POST:/system/role/export
 * @secure
 */
export const sysRolePostExport = (data: SysRoleQueryBo, params: RequestParams = {}) =>
  request<any>({
    path: `/system/role/export`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: false,
    ...params,
  });
export const sysRolePostExportSkipErrorHandler = (data: SysRoleQueryBo, params: RequestParams = {}) =>
  request<any>({
    path: `/system/role/export`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: true,
    ...params,
  });
/**
 * @description 修改保存角色
 *
 * @tags SysRoleService
 * @name sysRolePostEdit
 * @request POST:/system/role/edit
 * @secure
 */
export const sysRolePostEdit = (data: SysRole, params: RequestParams = {}) =>
  request<RVoid>({
    path: `/system/role/edit`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: false,
    ...params,
  });
export const sysRolePostEditSkipErrorHandler = (data: SysRole, params: RequestParams = {}) =>
  request<RVoid>({
    path: `/system/role/edit`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: true,
    ...params,
  });
/**
 * @description 修改保存数据权限
 *
 * @tags SysRoleService
 * @name sysRolePostDataScope
 * @request POST:/system/role/dataScope
 * @secure
 */
export const sysRolePostDataScope = (data: SysRole, params: RequestParams = {}) =>
  request<RVoid>({
    path: `/system/role/dataScope`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: false,
    ...params,
  });
export const sysRolePostDataScopeSkipErrorHandler = (data: SysRole, params: RequestParams = {}) =>
  request<RVoid>({
    path: `/system/role/dataScope`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: true,
    ...params,
  });
/**
 * @description 状态修改
 *
 * @tags SysRoleService
 * @name sysRolePostChangeStatus
 * @request POST:/system/role/changeStatus
 * @secure
 */
export const sysRolePostChangeStatus = (data: SysRole, params: RequestParams = {}) =>
  request<RVoid>({
    path: `/system/role/changeStatus`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: false,
    ...params,
  });
export const sysRolePostChangeStatusSkipErrorHandler = (data: SysRole, params: RequestParams = {}) =>
  request<RVoid>({
    path: `/system/role/changeStatus`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: true,
    ...params,
  });
/**
 * @description 查询未分配用户角色列表
 *
 * @tags SysRoleService
 * @name sysRolePostUnallocatedList
 * @request POST:/system/role/authUser/unallocatedList
 * @secure
 */
export const sysRolePostUnallocatedList = (data: SysUserPageQueryBo, params: RequestParams = {}) =>
  request<TableDataInfoSysUserVo>({
    path: `/system/role/authUser/unallocatedList`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: false,
    ...params,
  });
export const sysRolePostUnallocatedListSkipErrorHandler = (data: SysUserPageQueryBo, params: RequestParams = {}) =>
  request<TableDataInfoSysUserVo>({
    path: `/system/role/authUser/unallocatedList`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: true,
    ...params,
  });
/**
 * @description 批量选择用户授权
 *
 * @tags SysRoleService
 * @name sysRolePostSelectAuthUserAll
 * @request POST:/system/role/authUser/selectAll
 * @secure
 */
export const sysRolePostSelectAuthUserAll = (data: AuthUserAllBo, params: RequestParams = {}) =>
  request<RVoid>({
    path: `/system/role/authUser/selectAll`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: false,
    ...params,
  });
export const sysRolePostSelectAuthUserAllSkipErrorHandler = (data: AuthUserAllBo, params: RequestParams = {}) =>
  request<RVoid>({
    path: `/system/role/authUser/selectAll`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: true,
    ...params,
  });
/**
 * @description 取消授权用户
 *
 * @tags SysRoleService
 * @name sysRolePostCancelAuthUser
 * @request POST:/system/role/authUser/cancel
 * @secure
 */
export const sysRolePostCancelAuthUser = (data: SysUserRole, params: RequestParams = {}) =>
  request<RVoid>({
    path: `/system/role/authUser/cancel`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: false,
    ...params,
  });
export const sysRolePostCancelAuthUserSkipErrorHandler = (data: SysUserRole, params: RequestParams = {}) =>
  request<RVoid>({
    path: `/system/role/authUser/cancel`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: true,
    ...params,
  });
/**
 * @description 批量取消授权用户
 *
 * @tags SysRoleService
 * @name sysRolePostCancelAuthUserAll
 * @request POST:/system/role/authUser/cancelAll
 * @secure
 */
export const sysRolePostCancelAuthUserAll = (data: AuthUserAllBo, params: RequestParams = {}) =>
  request<RVoid>({
    path: `/system/role/authUser/cancelAll`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: false,
    ...params,
  });
export const sysRolePostCancelAuthUserAllSkipErrorHandler = (data: AuthUserAllBo, params: RequestParams = {}) =>
  request<RVoid>({
    path: `/system/role/authUser/cancelAll`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: true,
    ...params,
  });
/**
 * @description 查询已分配用户角色列表
 *
 * @tags SysRoleService
 * @name sysRolePostAllocatedList
 * @request POST:/system/role/authUser/allocatedList
 * @secure
 */
export const sysRolePostAllocatedList = (data: SysUserPageQueryBo, params: RequestParams = {}) =>
  request<TableDataInfoSysUserVo>({
    path: `/system/role/authUser/allocatedList`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: false,
    ...params,
  });
export const sysRolePostAllocatedListSkipErrorHandler = (data: SysUserPageQueryBo, params: RequestParams = {}) =>
  request<TableDataInfoSysUserVo>({
    path: `/system/role/authUser/allocatedList`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: true,
    ...params,
  });
/**
 * @description 新增角色
 *
 * @tags SysRoleService
 * @name sysRolePostAdd
 * @request POST:/system/role/add
 * @secure
 */
export const sysRolePostAdd = (data: SysRole, params: RequestParams = {}) =>
  request<RVoid>({
    path: `/system/role/add`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: false,
    ...params,
  });
export const sysRolePostAddSkipErrorHandler = (data: SysRole, params: RequestParams = {}) =>
  request<RVoid>({
    path: `/system/role/add`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: true,
    ...params,
  });
/**
 * @description 删除岗位
 *
 * @tags SysPostService
 * @name sysPostPostRemove
 * @request POST:/system/post/remove
 * @secure
 */
export const sysPostPostRemove = (
  query: {
    /** 岗位ID串 */
    postIds: number[];
  },
  params: RequestParams = {},
) =>
  request<RVoid>({
    path: `/system/post/remove`,
    method: 'POST',
    query: query,
    secure: true,
    skipErrorHandler: false,
    ...params,
  });
export const sysPostPostRemoveSkipErrorHandler = (
  query: {
    /** 岗位ID串 */
    postIds: number[];
  },
  params: RequestParams = {},
) =>
  request<RVoid>({
    path: `/system/post/remove`,
    method: 'POST',
    query: query,
    secure: true,
    skipErrorHandler: true,
    ...params,
  });
/**
 * @description 获取岗位列表
 *
 * @tags SysPostService
 * @name sysPostPostList
 * @request POST:/system/post/list
 * @secure
 */
export const sysPostPostList = (data: SysPostPageQueryBo, params: RequestParams = {}) =>
  request<TableDataInfoSysPostVo>({
    path: `/system/post/list`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: false,
    ...params,
  });
export const sysPostPostListSkipErrorHandler = (data: SysPostPageQueryBo, params: RequestParams = {}) =>
  request<TableDataInfoSysPostVo>({
    path: `/system/post/list`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: true,
    ...params,
  });
/**
 * @description 导出岗位列表
 *
 * @tags SysPostService
 * @name sysPostPostExport
 * @request POST:/system/post/export
 * @secure
 */
export const sysPostPostExport = (data: SysPostQueryBo, params: RequestParams = {}) =>
  request<any>({
    path: `/system/post/export`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: false,
    ...params,
  });
export const sysPostPostExportSkipErrorHandler = (data: SysPostQueryBo, params: RequestParams = {}) =>
  request<any>({
    path: `/system/post/export`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: true,
    ...params,
  });
/**
 * @description 修改岗位
 *
 * @tags SysPostService
 * @name sysPostPostEdit
 * @request POST:/system/post/edit
 * @secure
 */
export const sysPostPostEdit = (data: SysPostEditBo, params: RequestParams = {}) =>
  request<RVoid>({
    path: `/system/post/edit`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: false,
    ...params,
  });
export const sysPostPostEditSkipErrorHandler = (data: SysPostEditBo, params: RequestParams = {}) =>
  request<RVoid>({
    path: `/system/post/edit`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: true,
    ...params,
  });
/**
 * @description 新增岗位
 *
 * @tags SysPostService
 * @name sysPostPostAdd
 * @request POST:/system/post/add
 * @secure
 */
export const sysPostPostAdd = (data: SysPostAddBo, params: RequestParams = {}) =>
  request<RVoid>({
    path: `/system/post/add`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: false,
    ...params,
  });
export const sysPostPostAddSkipErrorHandler = (data: SysPostAddBo, params: RequestParams = {}) =>
  request<RVoid>({
    path: `/system/post/add`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: true,
    ...params,
  });
/**
 * @description 上传OSS对象存储
 *
 * @tags SysOssService
 * @name sysOssPostUpload
 * @request POST:/system/oss/upload
 * @secure
 */
export const sysOssPostUpload = (
  query: {
    /** 文件 */
    file: any;
  },
  data: {
    /** @format binary */
    file: File;
  },
  params: RequestParams = {},
) =>
  request<ROssUploadVo>({
    path: `/system/oss/upload`,
    method: 'POST',
    query: query,
    body: data,
    secure: true,
    type: ContentType.FormData,
    skipErrorHandler: false,
    ...params,
  });
export const sysOssPostUploadSkipErrorHandler = (
  query: {
    /** 文件 */
    file: any;
  },
  data: {
    /** @format binary */
    file: File;
  },
  params: RequestParams = {},
) =>
  request<ROssUploadVo>({
    path: `/system/oss/upload`,
    method: 'POST',
    query: query,
    body: data,
    secure: true,
    type: ContentType.FormData,
    skipErrorHandler: true,
    ...params,
  });
/**
 * @description 删除OSS对象存储
 *
 * @tags SysOssService
 * @name sysOssPostRemove
 * @request POST:/system/oss/remove
 * @secure
 */
export const sysOssPostRemove = (
  query: {
    /** OSS对象ID组 */
    ossIds: number[];
  },
  params: RequestParams = {},
) =>
  request<RVoid>({
    path: `/system/oss/remove`,
    method: 'POST',
    query: query,
    secure: true,
    skipErrorHandler: false,
    ...params,
  });
export const sysOssPostRemoveSkipErrorHandler = (
  query: {
    /** OSS对象ID组 */
    ossIds: number[];
  },
  params: RequestParams = {},
) =>
  request<RVoid>({
    path: `/system/oss/remove`,
    method: 'POST',
    query: query,
    secure: true,
    skipErrorHandler: true,
    ...params,
  });
/**
 * @description 查询OSS对象存储列表
 *
 * @tags SysOssService
 * @name sysOssPostList
 * @request POST:/system/oss/list
 * @secure
 */
export const sysOssPostList = (data: SysOssPageQueryBo, params: RequestParams = {}) =>
  request<TableDataInfoSysOssVo>({
    path: `/system/oss/list`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: false,
    ...params,
  });
export const sysOssPostListSkipErrorHandler = (data: SysOssPageQueryBo, params: RequestParams = {}) =>
  request<TableDataInfoSysOssVo>({
    path: `/system/oss/list`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: true,
    ...params,
  });
/**
 * @description 删除对象存储配置
 *
 * @tags SysOssConfigService
 * @name sysOssConfigPostRemove
 * @request POST:/system/oss/config/remove
 * @secure
 */
export const sysOssConfigPostRemove = (
  query: {
    /** OSS配置ID组 */
    ossConfigIds: number[];
  },
  params: RequestParams = {},
) =>
  request<RVoid>({
    path: `/system/oss/config/remove`,
    method: 'POST',
    query: query,
    secure: true,
    skipErrorHandler: false,
    ...params,
  });
export const sysOssConfigPostRemoveSkipErrorHandler = (
  query: {
    /** OSS配置ID组 */
    ossConfigIds: number[];
  },
  params: RequestParams = {},
) =>
  request<RVoid>({
    path: `/system/oss/config/remove`,
    method: 'POST',
    query: query,
    secure: true,
    skipErrorHandler: true,
    ...params,
  });
/**
 * @description 查询对象存储配置列表
 *
 * @tags SysOssConfigService
 * @name sysOssConfigPostList
 * @request POST:/system/oss/config/list
 * @secure
 */
export const sysOssConfigPostList = (data: SysOssConfigPageQueryBo, params: RequestParams = {}) =>
  request<TableDataInfoSysOssConfigVo>({
    path: `/system/oss/config/list`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: false,
    ...params,
  });
export const sysOssConfigPostListSkipErrorHandler = (data: SysOssConfigPageQueryBo, params: RequestParams = {}) =>
  request<TableDataInfoSysOssConfigVo>({
    path: `/system/oss/config/list`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: true,
    ...params,
  });
/**
 * @description 修改对象存储配置
 *
 * @tags SysOssConfigService
 * @name sysOssConfigPostEdit
 * @request POST:/system/oss/config/edit
 * @secure
 */
export const sysOssConfigPostEdit = (data: SysOssConfigEditBo, params: RequestParams = {}) =>
  request<RVoid>({
    path: `/system/oss/config/edit`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: false,
    ...params,
  });
export const sysOssConfigPostEditSkipErrorHandler = (data: SysOssConfigEditBo, params: RequestParams = {}) =>
  request<RVoid>({
    path: `/system/oss/config/edit`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: true,
    ...params,
  });
/**
 * @description 状态修改
 *
 * @tags SysOssConfigService
 * @name sysOssConfigPostChangeStatus
 * @request POST:/system/oss/config/changeStatus
 * @secure
 */
export const sysOssConfigPostChangeStatus = (data: SysOssConfigEditBo, params: RequestParams = {}) =>
  request<RVoid>({
    path: `/system/oss/config/changeStatus`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: false,
    ...params,
  });
export const sysOssConfigPostChangeStatusSkipErrorHandler = (data: SysOssConfigEditBo, params: RequestParams = {}) =>
  request<RVoid>({
    path: `/system/oss/config/changeStatus`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: true,
    ...params,
  });
/**
 * @description 新增对象存储配置
 *
 * @tags SysOssConfigService
 * @name sysOssConfigPostAdd
 * @request POST:/system/oss/config/add
 * @secure
 */
export const sysOssConfigPostAdd = (data: SysOssConfigAddBo, params: RequestParams = {}) =>
  request<RVoid>({
    path: `/system/oss/config/add`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: false,
    ...params,
  });
export const sysOssConfigPostAddSkipErrorHandler = (data: SysOssConfigAddBo, params: RequestParams = {}) =>
  request<RVoid>({
    path: `/system/oss/config/add`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: true,
    ...params,
  });
/**
 * @description 删除通知公告
 *
 * @tags SysNoticeService
 * @name sysNoticePostRemove
 * @request POST:/system/notice/remove
 * @secure
 */
export const sysNoticePostRemove = (
  query: {
    /** 公告ID串 */
    noticeIds: number[];
  },
  params: RequestParams = {},
) =>
  request<RVoid>({
    path: `/system/notice/remove`,
    method: 'POST',
    query: query,
    secure: true,
    skipErrorHandler: false,
    ...params,
  });
export const sysNoticePostRemoveSkipErrorHandler = (
  query: {
    /** 公告ID串 */
    noticeIds: number[];
  },
  params: RequestParams = {},
) =>
  request<RVoid>({
    path: `/system/notice/remove`,
    method: 'POST',
    query: query,
    secure: true,
    skipErrorHandler: true,
    ...params,
  });
/**
 * @description 获取通知公告列表
 *
 * @tags SysNoticeService
 * @name sysNoticePostList
 * @request POST:/system/notice/list
 * @secure
 */
export const sysNoticePostList = (data: SysNoticePageQueryBo, params: RequestParams = {}) =>
  request<TableDataInfoSysNoticeVo>({
    path: `/system/notice/list`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: false,
    ...params,
  });
export const sysNoticePostListSkipErrorHandler = (data: SysNoticePageQueryBo, params: RequestParams = {}) =>
  request<TableDataInfoSysNoticeVo>({
    path: `/system/notice/list`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: true,
    ...params,
  });
/**
 * @description 修改通知公告
 *
 * @tags SysNoticeService
 * @name sysNoticePostEdit
 * @request POST:/system/notice/edit
 * @secure
 */
export const sysNoticePostEdit = (data: SysNoticeEditBo, params: RequestParams = {}) =>
  request<RVoid>({
    path: `/system/notice/edit`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: false,
    ...params,
  });
export const sysNoticePostEditSkipErrorHandler = (data: SysNoticeEditBo, params: RequestParams = {}) =>
  request<RVoid>({
    path: `/system/notice/edit`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: true,
    ...params,
  });
/**
 * @description 新增通知公告
 *
 * @tags SysNoticeService
 * @name sysNoticePostAdd
 * @request POST:/system/notice/add
 * @secure
 */
export const sysNoticePostAdd = (data: SysNoticeAddBo, params: RequestParams = {}) =>
  request<RVoid>({
    path: `/system/notice/add`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: false,
    ...params,
  });
export const sysNoticePostAddSkipErrorHandler = (data: SysNoticeAddBo, params: RequestParams = {}) =>
  request<RVoid>({
    path: `/system/notice/add`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: true,
    ...params,
  });
/**
 * @description 获取菜单下拉树列表
 *
 * @tags SysMenuService
 * @name sysMenuPostTreeSelect
 * @request POST:/system/menu/treeSelect
 * @secure
 */
export const sysMenuPostTreeSelect = (data: SysMenuQueryBo, params: RequestParams = {}) =>
  request<RListTreeLong>({
    path: `/system/menu/treeSelect`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: false,
    ...params,
  });
export const sysMenuPostTreeSelectSkipErrorHandler = (data: SysMenuQueryBo, params: RequestParams = {}) =>
  request<RListTreeLong>({
    path: `/system/menu/treeSelect`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: true,
    ...params,
  });
/**
 * @description 删除菜单
 *
 * @tags SysMenuService
 * @name sysMenuPostRemove
 * @request POST:/system/menu/remove
 * @secure
 */
export const sysMenuPostRemove = (
  query: {
    /**
     * 菜单ID
     * @format int64
     */
    menuId: number;
  },
  params: RequestParams = {},
) =>
  request<RVoid>({
    path: `/system/menu/remove`,
    method: 'POST',
    query: query,
    secure: true,
    skipErrorHandler: false,
    ...params,
  });
export const sysMenuPostRemoveSkipErrorHandler = (
  query: {
    /**
     * 菜单ID
     * @format int64
     */
    menuId: number;
  },
  params: RequestParams = {},
) =>
  request<RVoid>({
    path: `/system/menu/remove`,
    method: 'POST',
    query: query,
    secure: true,
    skipErrorHandler: true,
    ...params,
  });
/**
 * @description 获取菜单列表
 *
 * @tags SysMenuService
 * @name sysMenuPostList
 * @request POST:/system/menu/list
 * @secure
 */
export const sysMenuPostList = (data: SysMenuQueryBo, params: RequestParams = {}) =>
  request<RListSysMenuVo>({
    path: `/system/menu/list`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: false,
    ...params,
  });
export const sysMenuPostListSkipErrorHandler = (data: SysMenuQueryBo, params: RequestParams = {}) =>
  request<RListSysMenuVo>({
    path: `/system/menu/list`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: true,
    ...params,
  });
/**
 * @description 修改菜单
 *
 * @tags SysMenuService
 * @name sysMenuPostEdit
 * @request POST:/system/menu/edit
 * @secure
 */
export const sysMenuPostEdit = (data: SysMenuEditBo, params: RequestParams = {}) =>
  request<RVoid>({
    path: `/system/menu/edit`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: false,
    ...params,
  });
export const sysMenuPostEditSkipErrorHandler = (data: SysMenuEditBo, params: RequestParams = {}) =>
  request<RVoid>({
    path: `/system/menu/edit`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: true,
    ...params,
  });
/**
 * @description 新增菜单
 *
 * @tags SysMenuService
 * @name sysMenuPostAdd
 * @request POST:/system/menu/add
 * @secure
 */
export const sysMenuPostAdd = (data: SysMenuAddBo, params: RequestParams = {}) =>
  request<RVoid>({
    path: `/system/menu/add`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: false,
    ...params,
  });
export const sysMenuPostAddSkipErrorHandler = (data: SysMenuAddBo, params: RequestParams = {}) =>
  request<RVoid>({
    path: `/system/menu/add`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: true,
    ...params,
  });
/**
 * @description 删除业务用户登录记录
 *
 * @tags BizLogininforService
 * @name bizLogininforPostRemove
 * @request POST:/system/logininfor/remove
 * @secure
 */
export const bizLogininforPostRemove = (
  query: {
    /** 主键串 */
    infoIds: number[];
  },
  params: RequestParams = {},
) =>
  request<RVoid>({
    path: `/system/logininfor/remove`,
    method: 'POST',
    query: query,
    secure: true,
    skipErrorHandler: false,
    ...params,
  });
export const bizLogininforPostRemoveSkipErrorHandler = (
  query: {
    /** 主键串 */
    infoIds: number[];
  },
  params: RequestParams = {},
) =>
  request<RVoid>({
    path: `/system/logininfor/remove`,
    method: 'POST',
    query: query,
    secure: true,
    skipErrorHandler: true,
    ...params,
  });
/**
 * @description 查询业务用户登录记录列表
 *
 * @tags BizLogininforService
 * @name bizLogininforPostList
 * @request POST:/system/logininfor/list
 * @secure
 */
export const bizLogininforPostList = (data: BizLogininforPageQueryBo, params: RequestParams = {}) =>
  request<TableDataInfoBizLogininforVo>({
    path: `/system/logininfor/list`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: false,
    ...params,
  });
export const bizLogininforPostListSkipErrorHandler = (data: BizLogininforPageQueryBo, params: RequestParams = {}) =>
  request<TableDataInfoBizLogininforVo>({
    path: `/system/logininfor/list`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: true,
    ...params,
  });
/**
 * @description 导出业务用户登录记录列表
 *
 * @tags BizLogininforService
 * @name bizLogininforPostExport
 * @request POST:/system/logininfor/export
 * @secure
 */
export const bizLogininforPostExport = (data: BizLogininforQueryBo, params: RequestParams = {}) =>
  request<any>({
    path: `/system/logininfor/export`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: false,
    ...params,
  });
export const bizLogininforPostExportSkipErrorHandler = (data: BizLogininforQueryBo, params: RequestParams = {}) =>
  request<any>({
    path: `/system/logininfor/export`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: true,
    ...params,
  });
/**
 * @description 修改业务用户登录记录
 *
 * @tags BizLogininforService
 * @name bizLogininforPostEdit
 * @request POST:/system/logininfor/edit
 * @secure
 */
export const bizLogininforPostEdit = (data: BizLogininforEditBo, params: RequestParams = {}) =>
  request<RVoid>({
    path: `/system/logininfor/edit`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: false,
    ...params,
  });
export const bizLogininforPostEditSkipErrorHandler = (data: BizLogininforEditBo, params: RequestParams = {}) =>
  request<RVoid>({
    path: `/system/logininfor/edit`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: true,
    ...params,
  });
/**
 * @description 新增业务用户登录记录
 *
 * @tags BizLogininforService
 * @name bizLogininforPostAdd
 * @request POST:/system/logininfor/add
 * @secure
 */
export const bizLogininforPostAdd = (data: BizLogininforAddBo, params: RequestParams = {}) =>
  request<RVoid>({
    path: `/system/logininfor/add`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: false,
    ...params,
  });
export const bizLogininforPostAddSkipErrorHandler = (data: BizLogininforAddBo, params: RequestParams = {}) =>
  request<RVoid>({
    path: `/system/logininfor/add`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: true,
    ...params,
  });
/**
 * @description 删除字典类型
 *
 * @tags SysDictTypeService
 * @name sysDictTypePostRemove
 * @request POST:/system/dict/type/remove
 * @secure
 */
export const sysDictTypePostRemove = (
  query: {
    /** 字典ID串 */
    dictIds: number[];
  },
  params: RequestParams = {},
) =>
  request<RVoid>({
    path: `/system/dict/type/remove`,
    method: 'POST',
    query: query,
    secure: true,
    skipErrorHandler: false,
    ...params,
  });
export const sysDictTypePostRemoveSkipErrorHandler = (
  query: {
    /** 字典ID串 */
    dictIds: number[];
  },
  params: RequestParams = {},
) =>
  request<RVoid>({
    path: `/system/dict/type/remove`,
    method: 'POST',
    query: query,
    secure: true,
    skipErrorHandler: true,
    ...params,
  });
/**
 * @description 刷新字典缓存
 *
 * @tags SysDictTypeService
 * @name sysDictTypePostRefreshCache
 * @request POST:/system/dict/type/refreshCache
 * @secure
 */
export const sysDictTypePostRefreshCache = (params: RequestParams = {}) =>
  request<RVoid>({
    path: `/system/dict/type/refreshCache`,
    method: 'POST',
    secure: true,
    skipErrorHandler: false,
    ...params,
  });
export const sysDictTypePostRefreshCacheSkipErrorHandler = (params: RequestParams = {}) =>
  request<RVoid>({
    path: `/system/dict/type/refreshCache`,
    method: 'POST',
    secure: true,
    skipErrorHandler: true,
    ...params,
  });
/**
 * @description 查询字典类型列表
 *
 * @tags SysDictTypeService
 * @name sysDictTypePostList
 * @request POST:/system/dict/type/list
 * @secure
 */
export const sysDictTypePostList = (data: SysDictTypePageQueryBo, params: RequestParams = {}) =>
  request<TableDataInfoSysDictTypeVo>({
    path: `/system/dict/type/list`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: false,
    ...params,
  });
export const sysDictTypePostListSkipErrorHandler = (data: SysDictTypePageQueryBo, params: RequestParams = {}) =>
  request<TableDataInfoSysDictTypeVo>({
    path: `/system/dict/type/list`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: true,
    ...params,
  });
/**
 * @description 导出字典类型列表
 *
 * @tags SysDictTypeService
 * @name sysDictTypePostExport
 * @request POST:/system/dict/type/export
 * @secure
 */
export const sysDictTypePostExport = (data: SysDictTypeQueryBo, params: RequestParams = {}) =>
  request<any>({
    path: `/system/dict/type/export`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: false,
    ...params,
  });
export const sysDictTypePostExportSkipErrorHandler = (data: SysDictTypeQueryBo, params: RequestParams = {}) =>
  request<any>({
    path: `/system/dict/type/export`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: true,
    ...params,
  });
/**
 * @description 修改字典类型
 *
 * @tags SysDictTypeService
 * @name sysDictTypePostEdit
 * @request POST:/system/dict/type/edit
 * @secure
 */
export const sysDictTypePostEdit = (data: SysDictTypeEditBo, params: RequestParams = {}) =>
  request<RVoid>({
    path: `/system/dict/type/edit`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: false,
    ...params,
  });
export const sysDictTypePostEditSkipErrorHandler = (data: SysDictTypeEditBo, params: RequestParams = {}) =>
  request<RVoid>({
    path: `/system/dict/type/edit`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: true,
    ...params,
  });
/**
 * @description 新增字典类型
 *
 * @tags SysDictTypeService
 * @name sysDictTypePostAdd
 * @request POST:/system/dict/type/add
 * @secure
 */
export const sysDictTypePostAdd = (data: SysDictTypeAddBo, params: RequestParams = {}) =>
  request<RVoid>({
    path: `/system/dict/type/add`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: false,
    ...params,
  });
export const sysDictTypePostAddSkipErrorHandler = (data: SysDictTypeAddBo, params: RequestParams = {}) =>
  request<RVoid>({
    path: `/system/dict/type/add`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: true,
    ...params,
  });
/**
 * @description 删除字典类型
 *
 * @tags SysDictDataService
 * @name sysDictDataPostRemove
 * @request POST:/system/dict/data/remove
 * @secure
 */
export const sysDictDataPostRemove = (
  query: {
    /** 字典code串 */
    dictCodes: number[];
  },
  params: RequestParams = {},
) =>
  request<RVoid>({
    path: `/system/dict/data/remove`,
    method: 'POST',
    query: query,
    secure: true,
    skipErrorHandler: false,
    ...params,
  });
export const sysDictDataPostRemoveSkipErrorHandler = (
  query: {
    /** 字典code串 */
    dictCodes: number[];
  },
  params: RequestParams = {},
) =>
  request<RVoid>({
    path: `/system/dict/data/remove`,
    method: 'POST',
    query: query,
    secure: true,
    skipErrorHandler: true,
    ...params,
  });
/**
 * @description 查询字典数据列表
 *
 * @tags SysDictDataService
 * @name sysDictDataPostList
 * @request POST:/system/dict/data/list
 * @secure
 */
export const sysDictDataPostList = (data: SysDictDataPageQueryBo, params: RequestParams = {}) =>
  request<TableDataInfoSysDictDataVo>({
    path: `/system/dict/data/list`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: false,
    ...params,
  });
export const sysDictDataPostListSkipErrorHandler = (data: SysDictDataPageQueryBo, params: RequestParams = {}) =>
  request<TableDataInfoSysDictDataVo>({
    path: `/system/dict/data/list`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: true,
    ...params,
  });
/**
 * @description 导出字典数据列表
 *
 * @tags SysDictDataService
 * @name sysDictDataPostExport
 * @request POST:/system/dict/data/export
 * @secure
 */
export const sysDictDataPostExport = (data: SysDictDataQueryBo, params: RequestParams = {}) =>
  request<any>({
    path: `/system/dict/data/export`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: false,
    ...params,
  });
export const sysDictDataPostExportSkipErrorHandler = (data: SysDictDataQueryBo, params: RequestParams = {}) =>
  request<any>({
    path: `/system/dict/data/export`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: true,
    ...params,
  });
/**
 * @description 修改保存字典类型
 *
 * @tags SysDictDataService
 * @name sysDictDataPostEdit
 * @request POST:/system/dict/data/edit
 * @secure
 */
export const sysDictDataPostEdit = (data: SysDictDataEditBo, params: RequestParams = {}) =>
  request<RVoid>({
    path: `/system/dict/data/edit`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: false,
    ...params,
  });
export const sysDictDataPostEditSkipErrorHandler = (data: SysDictDataEditBo, params: RequestParams = {}) =>
  request<RVoid>({
    path: `/system/dict/data/edit`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: true,
    ...params,
  });
/**
 * @description 新增字典类型
 *
 * @tags SysDictDataService
 * @name sysDictDataPostAdd
 * @request POST:/system/dict/data/add
 * @secure
 */
export const sysDictDataPostAdd = (data: SysDictDataAddBo, params: RequestParams = {}) =>
  request<RVoid>({
    path: `/system/dict/data/add`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: false,
    ...params,
  });
export const sysDictDataPostAddSkipErrorHandler = (data: SysDictDataAddBo, params: RequestParams = {}) =>
  request<RVoid>({
    path: `/system/dict/data/add`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: true,
    ...params,
  });
/**
 * @description 删除部门
 *
 * @tags SysDeptService
 * @name sysDeptPostRemove
 * @request POST:/system/dept/remove
 * @secure
 */
export const sysDeptPostRemove = (
  query: {
    /**
     * 部门ID串
     * @format int64
     */
    deptId: number;
  },
  params: RequestParams = {},
) =>
  request<RVoid>({
    path: `/system/dept/remove`,
    method: 'POST',
    query: query,
    secure: true,
    skipErrorHandler: false,
    ...params,
  });
export const sysDeptPostRemoveSkipErrorHandler = (
  query: {
    /**
     * 部门ID串
     * @format int64
     */
    deptId: number;
  },
  params: RequestParams = {},
) =>
  request<RVoid>({
    path: `/system/dept/remove`,
    method: 'POST',
    query: query,
    secure: true,
    skipErrorHandler: true,
    ...params,
  });
/**
 * @description 获取部门列表
 *
 * @tags SysDeptService
 * @name sysDeptPostList
 * @request POST:/system/dept/list
 * @secure
 */
export const sysDeptPostList = (data: SysDeptQueryBo, params: RequestParams = {}) =>
  request<RListSysDeptVo>({
    path: `/system/dept/list`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: false,
    ...params,
  });
export const sysDeptPostListSkipErrorHandler = (data: SysDeptQueryBo, params: RequestParams = {}) =>
  request<RListSysDeptVo>({
    path: `/system/dept/list`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: true,
    ...params,
  });
/**
 * @description 修改部门
 *
 * @tags SysDeptService
 * @name sysDeptPostEdit
 * @request POST:/system/dept/edit
 * @secure
 */
export const sysDeptPostEdit = (data: SysDeptEditBo, params: RequestParams = {}) =>
  request<RVoid>({
    path: `/system/dept/edit`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: false,
    ...params,
  });
export const sysDeptPostEditSkipErrorHandler = (data: SysDeptEditBo, params: RequestParams = {}) =>
  request<RVoid>({
    path: `/system/dept/edit`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: true,
    ...params,
  });
/**
 * @description 新增部门
 *
 * @tags SysDeptService
 * @name sysDeptPostAdd
 * @request POST:/system/dept/add
 * @secure
 */
export const sysDeptPostAdd = (data: SysDeptAddBo, params: RequestParams = {}) =>
  request<RVoid>({
    path: `/system/dept/add`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: false,
    ...params,
  });
export const sysDeptPostAddSkipErrorHandler = (data: SysDeptAddBo, params: RequestParams = {}) =>
  request<RVoid>({
    path: `/system/dept/add`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: true,
    ...params,
  });
/**
 * @description 根据参数键名修改参数配置
 *
 * @tags SysConfigService
 * @name sysConfigPostUpdateByKey
 * @request POST:/system/config/updateByKey
 * @secure
 */
export const sysConfigPostUpdateByKey = (data: SysConfigEditBo, params: RequestParams = {}) =>
  request<RVoid>({
    path: `/system/config/updateByKey`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: false,
    ...params,
  });
export const sysConfigPostUpdateByKeySkipErrorHandler = (data: SysConfigEditBo, params: RequestParams = {}) =>
  request<RVoid>({
    path: `/system/config/updateByKey`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: true,
    ...params,
  });
/**
 * @description 删除参数配置
 *
 * @tags SysConfigService
 * @name sysConfigPostRemove
 * @request POST:/system/config/remove
 * @secure
 */
export const sysConfigPostRemove = (
  query: {
    /** 参数ID串 */
    configIds: number[];
  },
  params: RequestParams = {},
) =>
  request<RVoid>({
    path: `/system/config/remove`,
    method: 'POST',
    query: query,
    secure: true,
    skipErrorHandler: false,
    ...params,
  });
export const sysConfigPostRemoveSkipErrorHandler = (
  query: {
    /** 参数ID串 */
    configIds: number[];
  },
  params: RequestParams = {},
) =>
  request<RVoid>({
    path: `/system/config/remove`,
    method: 'POST',
    query: query,
    secure: true,
    skipErrorHandler: true,
    ...params,
  });
/**
 * @description 刷新参数缓存
 *
 * @tags SysConfigService
 * @name sysConfigPostRefreshCache
 * @request POST:/system/config/refreshCache
 * @secure
 */
export const sysConfigPostRefreshCache = (params: RequestParams = {}) =>
  request<RVoid>({
    path: `/system/config/refreshCache`,
    method: 'POST',
    secure: true,
    skipErrorHandler: false,
    ...params,
  });
export const sysConfigPostRefreshCacheSkipErrorHandler = (params: RequestParams = {}) =>
  request<RVoid>({
    path: `/system/config/refreshCache`,
    method: 'POST',
    secure: true,
    skipErrorHandler: true,
    ...params,
  });
/**
 * @description 获取参数配置列表
 *
 * @tags SysConfigService
 * @name sysConfigPostList
 * @request POST:/system/config/list
 * @secure
 */
export const sysConfigPostList = (data: SysConfigPageQueryBo, params: RequestParams = {}) =>
  request<TableDataInfoSysConfigVo>({
    path: `/system/config/list`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: false,
    ...params,
  });
export const sysConfigPostListSkipErrorHandler = (data: SysConfigPageQueryBo, params: RequestParams = {}) =>
  request<TableDataInfoSysConfigVo>({
    path: `/system/config/list`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: true,
    ...params,
  });
/**
 * @description 导出参数配置列表
 *
 * @tags SysConfigService
 * @name sysConfigPostExport
 * @request POST:/system/config/export
 * @secure
 */
export const sysConfigPostExport = (data: SysConfigQueryBo, params: RequestParams = {}) =>
  request<any>({
    path: `/system/config/export`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: false,
    ...params,
  });
export const sysConfigPostExportSkipErrorHandler = (data: SysConfigQueryBo, params: RequestParams = {}) =>
  request<any>({
    path: `/system/config/export`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: true,
    ...params,
  });
/**
 * @description 修改参数配置
 *
 * @tags SysConfigService
 * @name sysConfigPostEdit
 * @request POST:/system/config/edit
 * @secure
 */
export const sysConfigPostEdit = (data: SysConfigEditBo, params: RequestParams = {}) =>
  request<RVoid>({
    path: `/system/config/edit`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: false,
    ...params,
  });
export const sysConfigPostEditSkipErrorHandler = (data: SysConfigEditBo, params: RequestParams = {}) =>
  request<RVoid>({
    path: `/system/config/edit`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: true,
    ...params,
  });
/**
 * @description 新增参数配置
 *
 * @tags SysConfigService
 * @name sysConfigPostAdd
 * @request POST:/system/config/add
 * @secure
 */
export const sysConfigPostAdd = (data: SysConfigAddBo, params: RequestParams = {}) =>
  request<RVoid>({
    path: `/system/config/add`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: false,
    ...params,
  });
export const sysConfigPostAddSkipErrorHandler = (data: SysConfigAddBo, params: RequestParams = {}) =>
  request<RVoid>({
    path: `/system/config/add`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: true,
    ...params,
  });
/**
 * @description 根据用户编号获取详细信息
 *
 * @tags SysUserService
 * @name sysUserGetInfo
 * @request GET:/system/user/info
 * @secure
 */
export const sysUserGetInfo = (
  query?: {
    /**
     * 用户ID
     * @format int64
     */
    userId?: number;
  },
  params: RequestParams = {},
) =>
  request<RUserDetailVo>({
    path: `/system/user/info`,
    method: 'GET',
    query: query,
    secure: true,
    skipErrorHandler: false,
    ...params,
  });
export const sysUserGetInfoSkipErrorHandler = (
  query?: {
    /**
     * 用户ID
     * @format int64
     */
    userId?: number;
  },
  params: RequestParams = {},
) =>
  request<RUserDetailVo>({
    path: `/system/user/info`,
    method: 'GET',
    query: query,
    secure: true,
    skipErrorHandler: true,
    ...params,
  });
/**
 * @description 根据用户编号获取详细信息
 *
 * @tags SysUserService
 * @name sysUserGetInfo1
 * @request GET:/system/user/
 * @secure
 */
export const sysUserGetInfo1 = (
  query?: {
    /**
     * 用户ID
     * @format int64
     */
    userId?: number;
  },
  params: RequestParams = {},
) =>
  request<RUserDetailVo>({
    path: `/system/user/`,
    method: 'GET',
    query: query,
    secure: true,
    skipErrorHandler: false,
    ...params,
  });
export const sysUserGetInfo1SkipErrorHandler = (
  query?: {
    /**
     * 用户ID
     * @format int64
     */
    userId?: number;
  },
  params: RequestParams = {},
) =>
  request<RUserDetailVo>({
    path: `/system/user/`,
    method: 'GET',
    query: query,
    secure: true,
    skipErrorHandler: true,
    ...params,
  });
/**
 * @description 获取部门树列表
 *
 * @tags SysUserService
 * @name sysUserGetDeptTree
 * @request GET:/system/user/deptTree
 * @secure
 */
export const sysUserGetDeptTree = (
  query: {
    /** 部门查询对象 */
    deptQuery: SysDeptQueryBo;
  },
  params: RequestParams = {},
) =>
  request<RListTreeLong>({
    path: `/system/user/deptTree`,
    method: 'GET',
    query: query,
    secure: true,
    skipErrorHandler: false,
    ...params,
  });
export const sysUserGetDeptTreeSkipErrorHandler = (
  query: {
    /** 部门查询对象 */
    deptQuery: SysDeptQueryBo;
  },
  params: RequestParams = {},
) =>
  request<RListTreeLong>({
    path: `/system/user/deptTree`,
    method: 'GET',
    query: query,
    secure: true,
    skipErrorHandler: true,
    ...params,
  });
/**
 * @description 根据用户编号获取授权角色
 *
 * @tags SysUserService
 * @name sysUserGetAuthRole
 * @request GET:/system/user/authRole
 * @secure
 */
export const sysUserGetAuthRole = (
  query: {
    /**
     * 用户ID
     * @format int64
     */
    userId: number;
  },
  params: RequestParams = {},
) =>
  request<RUserAuthRoleVo>({
    path: `/system/user/authRole`,
    method: 'GET',
    query: query,
    secure: true,
    skipErrorHandler: false,
    ...params,
  });
export const sysUserGetAuthRoleSkipErrorHandler = (
  query: {
    /**
     * 用户ID
     * @format int64
     */
    userId: number;
  },
  params: RequestParams = {},
) =>
  request<RUserAuthRoleVo>({
    path: `/system/user/authRole`,
    method: 'GET',
    query: query,
    secure: true,
    skipErrorHandler: true,
    ...params,
  });
/**
 * @description 获取角色选择框列表
 *
 * @tags SysRoleService
 * @name sysRoleGetOptionSelect
 * @request GET:/system/role/optionSelect
 * @secure
 */
export const sysRoleGetOptionSelect = (params: RequestParams = {}) =>
  request<RListSysRoleVo>({
    path: `/system/role/optionSelect`,
    method: 'GET',
    secure: true,
    skipErrorHandler: false,
    ...params,
  });
export const sysRoleGetOptionSelectSkipErrorHandler = (params: RequestParams = {}) =>
  request<RListSysRoleVo>({
    path: `/system/role/optionSelect`,
    method: 'GET',
    secure: true,
    skipErrorHandler: true,
    ...params,
  });
/**
 * @description 根据角色编号获取详细信息
 *
 * @tags SysRoleService
 * @name sysRoleGetInfo
 * @request GET:/system/role/info
 * @secure
 */
export const sysRoleGetInfo = (
  query: {
    /**
     * 角色ID
     * @format int64
     */
    roleId: number;
  },
  params: RequestParams = {},
) =>
  request<RSysRoleVo>({
    path: `/system/role/info`,
    method: 'GET',
    query: query,
    secure: true,
    skipErrorHandler: false,
    ...params,
  });
export const sysRoleGetInfoSkipErrorHandler = (
  query: {
    /**
     * 角色ID
     * @format int64
     */
    roleId: number;
  },
  params: RequestParams = {},
) =>
  request<RSysRoleVo>({
    path: `/system/role/info`,
    method: 'GET',
    query: query,
    secure: true,
    skipErrorHandler: true,
    ...params,
  });
/**
 * @description 获取对应角色部门树列表
 *
 * @tags SysRoleService
 * @name sysRoleGetRoleDeptTreeSelect
 * @request GET:/system/role/deptTree/{roleId}
 * @secure
 */
export const sysRoleGetRoleDeptTreeSelect = (roleId: number, params: RequestParams = {}) =>
  request<RMapStringObject>({
    path: `/system/role/deptTree/${roleId}`,
    method: 'GET',
    secure: true,
    skipErrorHandler: false,
    ...params,
  });
export const sysRoleGetRoleDeptTreeSelectSkipErrorHandler = (roleId: number, params: RequestParams = {}) =>
  request<RMapStringObject>({
    path: `/system/role/deptTree/${roleId}`,
    method: 'GET',
    secure: true,
    skipErrorHandler: true,
    ...params,
  });
/**
 * @description 获取岗位选择框列表
 *
 * @tags SysPostService
 * @name sysPostGetOptionSelect
 * @request GET:/system/post/optionSelect
 * @secure
 */
export const sysPostGetOptionSelect = (params: RequestParams = {}) =>
  request<RListSysPostVo>({
    path: `/system/post/optionSelect`,
    method: 'GET',
    secure: true,
    skipErrorHandler: false,
    ...params,
  });
export const sysPostGetOptionSelectSkipErrorHandler = (params: RequestParams = {}) =>
  request<RListSysPostVo>({
    path: `/system/post/optionSelect`,
    method: 'GET',
    secure: true,
    skipErrorHandler: true,
    ...params,
  });
/**
 * @description 根据岗位编号获取详细信息
 *
 * @tags SysPostService
 * @name sysPostGetInfo
 * @request GET:/system/post/info
 * @secure
 */
export const sysPostGetInfo = (
  query: {
    /**
     * 岗位ID
     * @format int64
     */
    postId: number;
  },
  params: RequestParams = {},
) =>
  request<RSysPostVo>({
    path: `/system/post/info`,
    method: 'GET',
    query: query,
    secure: true,
    skipErrorHandler: false,
    ...params,
  });
export const sysPostGetInfoSkipErrorHandler = (
  query: {
    /**
     * 岗位ID
     * @format int64
     */
    postId: number;
  },
  params: RequestParams = {},
) =>
  request<RSysPostVo>({
    path: `/system/post/info`,
    method: 'GET',
    query: query,
    secure: true,
    skipErrorHandler: true,
    ...params,
  });
/**
 * @description 查询OSS对象基于ID
 *
 * @tags SysOssService
 * @name sysOssGetListByIds
 * @request GET:/system/oss/listByIds
 * @secure
 */
export const sysOssGetListByIds = (
  query: {
    /** OSS对象ID串 */
    ossIds: number[];
  },
  params: RequestParams = {},
) =>
  request<RListSysOssVo>({
    path: `/system/oss/listByIds`,
    method: 'GET',
    query: query,
    secure: true,
    skipErrorHandler: false,
    ...params,
  });
export const sysOssGetListByIdsSkipErrorHandler = (
  query: {
    /** OSS对象ID串 */
    ossIds: number[];
  },
  params: RequestParams = {},
) =>
  request<RListSysOssVo>({
    path: `/system/oss/listByIds`,
    method: 'GET',
    query: query,
    secure: true,
    skipErrorHandler: true,
    ...params,
  });
/**
 * @description 下载OSS对象存储
 *
 * @tags SysOssService
 * @name sysOssGetDownload
 * @request GET:/system/oss/download
 * @secure
 */
export const sysOssGetDownload = (
  query: {
    /**
     * OSS对象ID
     * @format int64
     */
    ossId: number;
  },
  params: RequestParams = {},
) =>
  request<any>({
    path: `/system/oss/download`,
    method: 'GET',
    query: query,
    secure: true,
    skipErrorHandler: false,
    ...params,
  });
export const sysOssGetDownloadSkipErrorHandler = (
  query: {
    /**
     * OSS对象ID
     * @format int64
     */
    ossId: number;
  },
  params: RequestParams = {},
) =>
  request<any>({
    path: `/system/oss/download`,
    method: 'GET',
    query: query,
    secure: true,
    skipErrorHandler: true,
    ...params,
  });
/**
 * @description 获取对象存储配置详细信息
 *
 * @tags SysOssConfigService
 * @name sysOssConfigGetInfo
 * @request GET:/system/oss/config/info
 * @secure
 */
export const sysOssConfigGetInfo = (
  query: {
    /**
     * OSS配置ID
     * @format int64
     */
    ossConfigId: number;
  },
  params: RequestParams = {},
) =>
  request<RSysOssConfigVo>({
    path: `/system/oss/config/info`,
    method: 'GET',
    query: query,
    secure: true,
    skipErrorHandler: false,
    ...params,
  });
export const sysOssConfigGetInfoSkipErrorHandler = (
  query: {
    /**
     * OSS配置ID
     * @format int64
     */
    ossConfigId: number;
  },
  params: RequestParams = {},
) =>
  request<RSysOssConfigVo>({
    path: `/system/oss/config/info`,
    method: 'GET',
    query: query,
    secure: true,
    skipErrorHandler: true,
    ...params,
  });
/**
 * @description 根据通知公告编号获取详细信息
 *
 * @tags SysNoticeService
 * @name sysNoticeGetInfo
 * @request GET:/system/notice/info
 * @secure
 */
export const sysNoticeGetInfo = (
  query: {
    /**
     * 公告ID
     * @format int64
     */
    noticeId: number;
  },
  params: RequestParams = {},
) =>
  request<RSysNoticeVo>({
    path: `/system/notice/info`,
    method: 'GET',
    query: query,
    secure: true,
    skipErrorHandler: false,
    ...params,
  });
export const sysNoticeGetInfoSkipErrorHandler = (
  query: {
    /**
     * 公告ID
     * @format int64
     */
    noticeId: number;
  },
  params: RequestParams = {},
) =>
  request<RSysNoticeVo>({
    path: `/system/notice/info`,
    method: 'GET',
    query: query,
    secure: true,
    skipErrorHandler: true,
    ...params,
  });
/**
 * @description 加载对应角色菜单列表树
 *
 * @tags SysMenuService
 * @name sysMenuGetRoleMenuTreeSelect
 * @request GET:/system/menu/roleMenuTreeSelect
 * @secure
 */
export const sysMenuGetRoleMenuTreeSelect = (
  query: {
    /**
     * 角色ID
     * @format int64
     */
    roleId: number;
  },
  params: RequestParams = {},
) =>
  request<RRoleMenuTreeSelectVo>({
    path: `/system/menu/roleMenuTreeSelect`,
    method: 'GET',
    query: query,
    secure: true,
    skipErrorHandler: false,
    ...params,
  });
export const sysMenuGetRoleMenuTreeSelectSkipErrorHandler = (
  query: {
    /**
     * 角色ID
     * @format int64
     */
    roleId: number;
  },
  params: RequestParams = {},
) =>
  request<RRoleMenuTreeSelectVo>({
    path: `/system/menu/roleMenuTreeSelect`,
    method: 'GET',
    query: query,
    secure: true,
    skipErrorHandler: true,
    ...params,
  });
/**
 * @description 根据菜单编号获取详细信息
 *
 * @tags SysMenuService
 * @name sysMenuGetInfo
 * @request GET:/system/menu/info
 * @secure
 */
export const sysMenuGetInfo = (
  query: {
    /**
     * 菜单ID
     * @format int64
     */
    menuId: number;
  },
  params: RequestParams = {},
) =>
  request<RSysMenuVo>({
    path: `/system/menu/info`,
    method: 'GET',
    query: query,
    secure: true,
    skipErrorHandler: false,
    ...params,
  });
export const sysMenuGetInfoSkipErrorHandler = (
  query: {
    /**
     * 菜单ID
     * @format int64
     */
    menuId: number;
  },
  params: RequestParams = {},
) =>
  request<RSysMenuVo>({
    path: `/system/menu/info`,
    method: 'GET',
    query: query,
    secure: true,
    skipErrorHandler: true,
    ...params,
  });
/**
 * @description 获取业务用户登录记录详细信息
 *
 * @tags BizLogininforService
 * @name bizLogininforGetInfo
 * @request GET:/system/logininfor/info
 * @secure
 */
export const bizLogininforGetInfo = (
  query: {
    /**
     * 主键
     * @format int64
     */
    infoId: number;
  },
  params: RequestParams = {},
) =>
  request<RBizLogininforVo>({
    path: `/system/logininfor/info`,
    method: 'GET',
    query: query,
    secure: true,
    skipErrorHandler: false,
    ...params,
  });
export const bizLogininforGetInfoSkipErrorHandler = (
  query: {
    /**
     * 主键
     * @format int64
     */
    infoId: number;
  },
  params: RequestParams = {},
) =>
  request<RBizLogininforVo>({
    path: `/system/logininfor/info`,
    method: 'GET',
    query: query,
    secure: true,
    skipErrorHandler: true,
    ...params,
  });
/**
 * @description 获取字典选择框列表
 *
 * @tags SysDictTypeService
 * @name sysDictTypeGetOptionSelect
 * @request GET:/system/dict/type/optionSelect
 * @secure
 */
export const sysDictTypeGetOptionSelect = (params: RequestParams = {}) =>
  request<RListSysDictTypeVo>({
    path: `/system/dict/type/optionSelect`,
    method: 'GET',
    secure: true,
    skipErrorHandler: false,
    ...params,
  });
export const sysDictTypeGetOptionSelectSkipErrorHandler = (params: RequestParams = {}) =>
  request<RListSysDictTypeVo>({
    path: `/system/dict/type/optionSelect`,
    method: 'GET',
    secure: true,
    skipErrorHandler: true,
    ...params,
  });
/**
 * @description 查询字典类型详细
 *
 * @tags SysDictTypeService
 * @name sysDictTypeGetInfo
 * @request GET:/system/dict/type/info
 * @secure
 */
export const sysDictTypeGetInfo = (
  query: {
    /**
     * 字典ID
     * @format int64
     */
    dictId: number;
  },
  params: RequestParams = {},
) =>
  request<RSysDictTypeVo>({
    path: `/system/dict/type/info`,
    method: 'GET',
    query: query,
    secure: true,
    skipErrorHandler: false,
    ...params,
  });
export const sysDictTypeGetInfoSkipErrorHandler = (
  query: {
    /**
     * 字典ID
     * @format int64
     */
    dictId: number;
  },
  params: RequestParams = {},
) =>
  request<RSysDictTypeVo>({
    path: `/system/dict/type/info`,
    method: 'GET',
    query: query,
    secure: true,
    skipErrorHandler: true,
    ...params,
  });
/**
 * @description 根据字典类型查询字典数据信息
 *
 * @tags SysDictDataService
 * @name sysDictDataGetType
 * @request GET:/system/dict/data/type
 * @secure
 */
export const sysDictDataGetType = (
  query: {
    /** 字典类型 */
    dictType: string;
  },
  params: RequestParams = {},
) =>
  request<RListSysDictDataVo>({
    path: `/system/dict/data/type`,
    method: 'GET',
    query: query,
    secure: true,
    skipErrorHandler: false,
    ...params,
  });
export const sysDictDataGetTypeSkipErrorHandler = (
  query: {
    /** 字典类型 */
    dictType: string;
  },
  params: RequestParams = {},
) =>
  request<RListSysDictDataVo>({
    path: `/system/dict/data/type`,
    method: 'GET',
    query: query,
    secure: true,
    skipErrorHandler: true,
    ...params,
  });
/**
 * @description 查询字典数据详细
 *
 * @tags SysDictDataService
 * @name sysDictDataGetInfo
 * @request GET:/system/dict/data/info
 * @secure
 */
export const sysDictDataGetInfo = (
  query: {
    /**
     * 字典code
     * @format int64
     */
    dictCode: number;
  },
  params: RequestParams = {},
) =>
  request<RSysDictDataVo>({
    path: `/system/dict/data/info`,
    method: 'GET',
    query: query,
    secure: true,
    skipErrorHandler: false,
    ...params,
  });
export const sysDictDataGetInfoSkipErrorHandler = (
  query: {
    /**
     * 字典code
     * @format int64
     */
    dictCode: number;
  },
  params: RequestParams = {},
) =>
  request<RSysDictDataVo>({
    path: `/system/dict/data/info`,
    method: 'GET',
    query: query,
    secure: true,
    skipErrorHandler: true,
    ...params,
  });
/**
 * @description 查询部门列表（排除节点）
 *
 * @tags SysDeptService
 * @name sysDeptGetExcludeChild
 * @request GET:/system/dept/list/exclude
 * @secure
 */
export const sysDeptGetExcludeChild = (
  query: {
    /**
     * 部门ID
     * @format int64
     */
    deptId: number;
  },
  params: RequestParams = {},
) =>
  request<RListSysDeptVo>({
    path: `/system/dept/list/exclude`,
    method: 'GET',
    query: query,
    secure: true,
    skipErrorHandler: false,
    ...params,
  });
export const sysDeptGetExcludeChildSkipErrorHandler = (
  query: {
    /**
     * 部门ID
     * @format int64
     */
    deptId: number;
  },
  params: RequestParams = {},
) =>
  request<RListSysDeptVo>({
    path: `/system/dept/list/exclude`,
    method: 'GET',
    query: query,
    secure: true,
    skipErrorHandler: true,
    ...params,
  });
/**
 * @description 根据部门编号获取详细信息
 *
 * @tags SysDeptService
 * @name sysDeptGetInfo
 * @request GET:/system/dept/info
 * @secure
 */
export const sysDeptGetInfo = (
  query: {
    /**
     * 部门ID
     * @format int64
     */
    deptId: number;
  },
  params: RequestParams = {},
) =>
  request<RSysDeptVo>({
    path: `/system/dept/info`,
    method: 'GET',
    query: query,
    secure: true,
    skipErrorHandler: false,
    ...params,
  });
export const sysDeptGetInfoSkipErrorHandler = (
  query: {
    /**
     * 部门ID
     * @format int64
     */
    deptId: number;
  },
  params: RequestParams = {},
) =>
  request<RSysDeptVo>({
    path: `/system/dept/info`,
    method: 'GET',
    query: query,
    secure: true,
    skipErrorHandler: true,
    ...params,
  });
/**
 * @description 根据参数编号获取详细信息
 *
 * @tags SysConfigService
 * @name sysConfigGetInfo
 * @request GET:/system/config/info
 * @secure
 */
export const sysConfigGetInfo = (
  query: {
    /**
     * 参数ID
     * @format int64
     */
    configId: number;
  },
  params: RequestParams = {},
) =>
  request<RSysConfigVo>({
    path: `/system/config/info`,
    method: 'GET',
    query: query,
    secure: true,
    skipErrorHandler: false,
    ...params,
  });
export const sysConfigGetInfoSkipErrorHandler = (
  query: {
    /**
     * 参数ID
     * @format int64
     */
    configId: number;
  },
  params: RequestParams = {},
) =>
  request<RSysConfigVo>({
    path: `/system/config/info`,
    method: 'GET',
    query: query,
    secure: true,
    skipErrorHandler: true,
    ...params,
  });
/**
 * @description 根据参数键名查询参数值
 *
 * @tags SysConfigService
 * @name sysConfigGetConfigKey
 * @request GET:/system/config/configKey
 * @secure
 */
export const sysConfigGetConfigKey = (
  query: {
    /** 参数Key */
    configKey: string;
  },
  params: RequestParams = {},
) =>
  request<RVoid>({
    path: `/system/config/configKey`,
    method: 'GET',
    query: query,
    secure: true,
    skipErrorHandler: false,
    ...params,
  });
export const sysConfigGetConfigKeySkipErrorHandler = (
  query: {
    /** 参数Key */
    configKey: string;
  },
  params: RequestParams = {},
) =>
  request<RVoid>({
    path: `/system/config/configKey`,
    method: 'GET',
    query: query,
    secure: true,
    skipErrorHandler: true,
    ...params,
  });
