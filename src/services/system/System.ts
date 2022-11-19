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
  ResponseAvatarUploadVo,
  ResponseBizLogininforVo,
  ResponseListSysDeptVo,
  ResponseListSysDictDataVo,
  ResponseListSysDictTypeVo,
  ResponseListSysMenuVo,
  ResponseListSysOssVo,
  ResponseListSysPostVo,
  ResponseListSysRoleVo,
  ResponseListTreeLong,
  ResponseOssUploadVo,
  ResponseProfileVo,
  ResponseRoleDeptTreeSelectVo,
  ResponseRoleMenuTreeSelectVo,
  ResponseSysConfigVo,
  ResponseSysDeptVo,
  ResponseSysDictDataVo,
  ResponseSysDictTypeVo,
  ResponseSysMenuVo,
  ResponseSysNoticeVo,
  ResponseSysOssConfigVo,
  ResponseSysPostVo,
  ResponseSysRoleVo,
  ResponseUserAuthRoleVo,
  ResponseUserDetailVo,
  ResponseVoid,
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
  SysRoleQueryBo,
  SysUserAddBo,
  SysUserEditBo,
  SysUserPageQueryBo,
  SysUserQueryBo,
  SysUserReq,
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
 * No description
 *
 * @tags BizLogininforService
 * @name bizLogininforPostAdd
 * @summary 新增业务用户登录记录
 * @request POST:/system/logininfor/add
 * @secure
 */
export const bizLogininforPostAdd = (data: BizLogininforAddBo, params: RequestParams = {}) =>
  request<ResponseVoid>({
    path: `/system/logininfor/add`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    ...params,
  });
/**
 * No description
 *
 * @tags BizLogininforService
 * @name bizLogininforPostEdit
 * @summary 修改业务用户登录记录
 * @request POST:/system/logininfor/edit
 * @secure
 */
export const bizLogininforPostEdit = (data: BizLogininforEditBo, params: RequestParams = {}) =>
  request<ResponseVoid>({
    path: `/system/logininfor/edit`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    ...params,
  });
/**
 * No description
 *
 * @tags BizLogininforService
 * @name bizLogininforPostExport
 * @summary 导出业务用户登录记录列表
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
    ...params,
  });
/**
 * No description
 *
 * @tags BizLogininforService
 * @name bizLogininforGetInfo
 * @summary 获取业务用户登录记录详细信息
 * @request GET:/system/logininfor/info
 * @secure
 */
export const bizLogininforGetInfo = (
  query: {
    /**
     * 主键
     * @format int64
     */
    主键: number;
  },
  params: RequestParams = {},
) =>
  request<ResponseBizLogininforVo>({
    path: `/system/logininfor/info`,
    method: 'GET',
    query: query,
    secure: true,
    ...params,
  });
/**
 * No description
 *
 * @tags BizLogininforService
 * @name bizLogininforPostList
 * @summary 查询业务用户登录记录列表
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
    ...params,
  });
/**
 * No description
 *
 * @tags BizLogininforService
 * @name bizLogininforPostRemove
 * @summary 删除业务用户登录记录
 * @request POST:/system/logininfor/remove
 * @secure
 */
export const bizLogininforPostRemove = (
  query: {
    /**
     * 主键串
     * @format int64
     */
    公告ID串: number;
  },
  params: RequestParams = {},
) =>
  request<ResponseVoid>({
    path: `/system/logininfor/remove`,
    method: 'POST',
    query: query,
    secure: true,
    ...params,
  });
/**
 * No description
 *
 * @tags SysConfigService
 * @name sysConfigPostAdd
 * @summary 新增参数配置
 * @request POST:/system/config/add
 * @secure
 */
export const sysConfigPostAdd = (data: SysConfigAddBo, params: RequestParams = {}) =>
  request<ResponseVoid>({
    path: `/system/config/add`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    ...params,
  });
/**
 * No description
 *
 * @tags SysConfigService
 * @name sysConfigGetConfigKey
 * @summary 根据参数键名查询参数值
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
  request<ResponseVoid>({
    path: `/system/config/configKey`,
    method: 'GET',
    query: query,
    secure: true,
    ...params,
  });
/**
 * No description
 *
 * @tags SysConfigService
 * @name sysConfigPostEdit
 * @summary 修改参数配置
 * @request POST:/system/config/edit
 * @secure
 */
export const sysConfigPostEdit = (data: SysConfigEditBo, params: RequestParams = {}) =>
  request<ResponseVoid>({
    path: `/system/config/edit`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    ...params,
  });
/**
 * No description
 *
 * @tags SysConfigService
 * @name sysConfigPostExport
 * @summary 导出参数配置列表
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
    ...params,
  });
/**
 * No description
 *
 * @tags SysConfigService
 * @name sysConfigGetInfo
 * @summary 根据参数编号获取详细信息
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
  request<ResponseSysConfigVo>({
    path: `/system/config/info`,
    method: 'GET',
    query: query,
    secure: true,
    ...params,
  });
/**
 * No description
 *
 * @tags SysConfigService
 * @name sysConfigPostList
 * @summary 获取参数配置列表
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
    ...params,
  });
/**
 * No description
 *
 * @tags SysConfigService
 * @name sysConfigPostRefreshCache
 * @summary 刷新参数缓存
 * @request POST:/system/config/refreshCache
 * @secure
 */
export const sysConfigPostRefreshCache = (params: RequestParams = {}) =>
  request<ResponseVoid>({
    path: `/system/config/refreshCache`,
    method: 'POST',
    secure: true,
    ...params,
  });
/**
 * No description
 *
 * @tags SysConfigService
 * @name sysConfigPostRemove
 * @summary 删除参数配置
 * @request POST:/system/config/remove
 * @secure
 */
export const sysConfigPostRemove = (
  query: {
    /**
     * 参数ID串
     * @format int64
     */
    configIds: number;
  },
  params: RequestParams = {},
) =>
  request<ResponseVoid>({
    path: `/system/config/remove`,
    method: 'POST',
    query: query,
    secure: true,
    ...params,
  });
/**
 * No description
 *
 * @tags SysConfigService
 * @name sysConfigPostUpdateByKey
 * @summary 根据参数键名修改参数配置
 * @request POST:/system/config/updateByKey
 * @secure
 */
export const sysConfigPostUpdateByKey = (data: SysConfigEditBo, params: RequestParams = {}) =>
  request<ResponseVoid>({
    path: `/system/config/updateByKey`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    ...params,
  });
/**
 * No description
 *
 * @tags SysDeptService
 * @name sysDeptPostAdd
 * @summary 新增部门
 * @request POST:/system/dept/add
 * @secure
 */
export const sysDeptPostAdd = (data: SysDeptAddBo, params: RequestParams = {}) =>
  request<ResponseVoid>({
    path: `/system/dept/add`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    ...params,
  });
/**
 * No description
 *
 * @tags SysDeptService
 * @name sysDeptPostEdit
 * @summary 修改部门
 * @request POST:/system/dept/edit
 * @secure
 */
export const sysDeptPostEdit = (data: SysDeptEditBo, params: RequestParams = {}) =>
  request<ResponseVoid>({
    path: `/system/dept/edit`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    ...params,
  });
/**
 * No description
 *
 * @tags SysDeptService
 * @name sysDeptGetInfo
 * @summary 根据部门编号获取详细信息
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
  request<ResponseSysDeptVo>({
    path: `/system/dept/info`,
    method: 'GET',
    query: query,
    secure: true,
    ...params,
  });
/**
 * No description
 *
 * @tags SysDeptService
 * @name sysDeptPostList
 * @summary 获取部门列表
 * @request POST:/system/dept/list
 * @secure
 */
export const sysDeptPostList = (data: SysDeptQueryBo, params: RequestParams = {}) =>
  request<ResponseListSysDeptVo>({
    path: `/system/dept/list`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    ...params,
  });
/**
 * No description
 *
 * @tags SysDeptService
 * @name sysDeptGetExcludeChild
 * @summary 查询部门列表（排除节点）
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
  request<ResponseListSysDeptVo>({
    path: `/system/dept/list/exclude`,
    method: 'GET',
    query: query,
    secure: true,
    ...params,
  });
/**
 * No description
 *
 * @tags SysDeptService
 * @name sysDeptPostRemove
 * @summary 删除部门
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
  request<ResponseVoid>({
    path: `/system/dept/remove`,
    method: 'POST',
    query: query,
    secure: true,
    ...params,
  });
/**
 * No description
 *
 * @tags SysDeptService
 * @name sysDeptGetRoleDeptTreeSelect
 * @summary 加载对应角色部门列表树
 * @request GET:/system/dept/roleDeptTreeSelect
 * @secure
 */
export const sysDeptGetRoleDeptTreeSelect = (
  query: {
    /**
     * 角色ID
     * @format int64
     */
    roleId: number;
  },
  params: RequestParams = {},
) =>
  request<ResponseRoleDeptTreeSelectVo>({
    path: `/system/dept/roleDeptTreeSelect`,
    method: 'GET',
    query: query,
    secure: true,
    ...params,
  });
/**
 * No description
 *
 * @tags SysDeptService
 * @name sysDeptPostTreeSelect
 * @summary 获取部门下拉树列表
 * @request POST:/system/dept/treeSelect
 * @secure
 */
export const sysDeptPostTreeSelect = (data: SysDeptQueryBo, params: RequestParams = {}) =>
  request<ResponseListTreeLong>({
    path: `/system/dept/treeSelect`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    ...params,
  });
/**
 * No description
 *
 * @tags SysDictDataService
 * @name sysDictDataPostAdd
 * @summary 新增字典类型
 * @request POST:/system/dict/data/add
 * @secure
 */
export const sysDictDataPostAdd = (data: SysDictDataAddBo, params: RequestParams = {}) =>
  request<ResponseVoid>({
    path: `/system/dict/data/add`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    ...params,
  });
/**
 * No description
 *
 * @tags SysDictDataService
 * @name sysDictDataPostEdit
 * @summary 修改保存字典类型
 * @request POST:/system/dict/data/edit
 * @secure
 */
export const sysDictDataPostEdit = (data: SysDictDataEditBo, params: RequestParams = {}) =>
  request<ResponseVoid>({
    path: `/system/dict/data/edit`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    ...params,
  });
/**
 * No description
 *
 * @tags SysDictDataService
 * @name sysDictDataPostExport
 * @summary 导出字典数据列表
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
    ...params,
  });
/**
 * No description
 *
 * @tags SysDictDataService
 * @name sysDictDataGetInfo
 * @summary 查询字典数据详细
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
  request<ResponseSysDictDataVo>({
    path: `/system/dict/data/info`,
    method: 'GET',
    query: query,
    secure: true,
    ...params,
  });
/**
 * No description
 *
 * @tags SysDictDataService
 * @name sysDictDataPostList
 * @summary 查询字典数据列表
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
    ...params,
  });
/**
 * No description
 *
 * @tags SysDictDataService
 * @name sysDictDataPostRemove
 * @summary 删除字典类型
 * @request POST:/system/dict/data/remove
 * @secure
 */
export const sysDictDataPostRemove = (
  query: {
    /**
     * 字典code串
     * @format int64
     */
    dictCodes: number;
  },
  params: RequestParams = {},
) =>
  request<ResponseVoid>({
    path: `/system/dict/data/remove`,
    method: 'POST',
    query: query,
    secure: true,
    ...params,
  });
/**
 * No description
 *
 * @tags SysDictDataService
 * @name sysDictDataGetType
 * @summary 根据字典类型查询字典数据信息
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
  request<ResponseListSysDictDataVo>({
    path: `/system/dict/data/type`,
    method: 'GET',
    query: query,
    secure: true,
    ...params,
  });
/**
 * No description
 *
 * @tags SysDictTypeService
 * @name sysDictTypePostAdd
 * @summary 新增字典类型
 * @request POST:/system/dict/type/add
 * @secure
 */
export const sysDictTypePostAdd = (data: SysDictTypeAddBo, params: RequestParams = {}) =>
  request<ResponseVoid>({
    path: `/system/dict/type/add`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    ...params,
  });
/**
 * No description
 *
 * @tags SysDictTypeService
 * @name sysDictTypePostEdit
 * @summary 修改字典类型
 * @request POST:/system/dict/type/edit
 * @secure
 */
export const sysDictTypePostEdit = (data: SysDictTypeEditBo, params: RequestParams = {}) =>
  request<ResponseVoid>({
    path: `/system/dict/type/edit`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    ...params,
  });
/**
 * No description
 *
 * @tags SysDictTypeService
 * @name sysDictTypePostExport
 * @summary 导出字典类型列表
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
    ...params,
  });
/**
 * No description
 *
 * @tags SysDictTypeService
 * @name sysDictTypeGetInfo
 * @summary 查询字典类型详细
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
  request<ResponseSysDictTypeVo>({
    path: `/system/dict/type/info`,
    method: 'GET',
    query: query,
    secure: true,
    ...params,
  });
/**
 * No description
 *
 * @tags SysDictTypeService
 * @name sysDictTypePostList
 * @summary 查询字典类型列表
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
    ...params,
  });
/**
 * No description
 *
 * @tags SysDictTypeService
 * @name optionSelectUsingGet
 * @summary 获取字典选择框列表
 * @request GET:/system/dict/type/optionSelect
 * @secure
 */
export const optionSelectUsingGet = (params: RequestParams = {}) =>
  request<ResponseListSysDictTypeVo>({
    path: `/system/dict/type/optionSelect`,
    method: 'GET',
    secure: true,
    ...params,
  });
/**
 * No description
 *
 * @tags SysDictTypeService
 * @name sysDictTypePostRefreshCache
 * @summary 刷新字典缓存
 * @request POST:/system/dict/type/refreshCache
 * @secure
 */
export const sysDictTypePostRefreshCache = (params: RequestParams = {}) =>
  request<ResponseVoid>({
    path: `/system/dict/type/refreshCache`,
    method: 'POST',
    secure: true,
    ...params,
  });
/**
 * No description
 *
 * @tags SysDictTypeService
 * @name sysDictTypePostRemove
 * @summary 删除字典类型
 * @request POST:/system/dict/type/remove
 * @secure
 */
export const sysDictTypePostRemove = (
  query: {
    /**
     * 字典ID串
     * @format int64
     */
    dictIds: number;
  },
  params: RequestParams = {},
) =>
  request<ResponseVoid>({
    path: `/system/dict/type/remove`,
    method: 'POST',
    query: query,
    secure: true,
    ...params,
  });
/**
 * No description
 *
 * @tags SysMenuService
 * @name sysMenuPostAdd
 * @summary 新增菜单
 * @request POST:/system/menu/add
 * @secure
 */
export const sysMenuPostAdd = (data: SysMenuAddBo, params: RequestParams = {}) =>
  request<ResponseVoid>({
    path: `/system/menu/add`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    ...params,
  });
/**
 * No description
 *
 * @tags SysMenuService
 * @name sysMenuPostEdit
 * @summary 修改菜单
 * @request POST:/system/menu/edit
 * @secure
 */
export const sysMenuPostEdit = (data: SysMenuEditBo, params: RequestParams = {}) =>
  request<ResponseVoid>({
    path: `/system/menu/edit`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    ...params,
  });
/**
 * No description
 *
 * @tags SysMenuService
 * @name sysMenuGetInfo
 * @summary 根据菜单编号获取详细信息
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
  request<ResponseSysMenuVo>({
    path: `/system/menu/info`,
    method: 'GET',
    query: query,
    secure: true,
    ...params,
  });
/**
 * No description
 *
 * @tags SysMenuService
 * @name sysMenuPostList
 * @summary 获取菜单列表
 * @request POST:/system/menu/list
 * @secure
 */
export const sysMenuPostList = (data: SysMenuQueryBo, params: RequestParams = {}) =>
  request<ResponseListSysMenuVo>({
    path: `/system/menu/list`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    ...params,
  });
/**
 * No description
 *
 * @tags SysMenuService
 * @name sysMenuPostRemove
 * @summary 删除菜单
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
  request<ResponseVoid>({
    path: `/system/menu/remove`,
    method: 'POST',
    query: query,
    secure: true,
    ...params,
  });
/**
 * No description
 *
 * @tags SysMenuService
 * @name sysMenuGetRoleMenuTreeSelect
 * @summary 加载对应角色菜单列表树
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
  request<ResponseRoleMenuTreeSelectVo>({
    path: `/system/menu/roleMenuTreeSelect`,
    method: 'GET',
    query: query,
    secure: true,
    ...params,
  });
/**
 * No description
 *
 * @tags SysMenuService
 * @name sysMenuPostTreeSelect
 * @summary 获取菜单下拉树列表
 * @request POST:/system/menu/treeSelect
 * @secure
 */
export const sysMenuPostTreeSelect = (data: SysMenuQueryBo, params: RequestParams = {}) =>
  request<ResponseListTreeLong>({
    path: `/system/menu/treeSelect`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    ...params,
  });
/**
 * No description
 *
 * @tags SysNoticeService
 * @name sysNoticePostAdd
 * @summary 新增通知公告
 * @request POST:/system/notice/add
 * @secure
 */
export const sysNoticePostAdd = (data: SysNoticeAddBo, params: RequestParams = {}) =>
  request<ResponseVoid>({
    path: `/system/notice/add`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    ...params,
  });
/**
 * No description
 *
 * @tags SysNoticeService
 * @name sysNoticePostEdit
 * @summary 修改通知公告
 * @request POST:/system/notice/edit
 * @secure
 */
export const sysNoticePostEdit = (data: SysNoticeEditBo, params: RequestParams = {}) =>
  request<ResponseVoid>({
    path: `/system/notice/edit`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    ...params,
  });
/**
 * No description
 *
 * @tags SysNoticeService
 * @name sysNoticeGetInfo
 * @summary 根据通知公告编号获取详细信息
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
  request<ResponseSysNoticeVo>({
    path: `/system/notice/info`,
    method: 'GET',
    query: query,
    secure: true,
    ...params,
  });
/**
 * No description
 *
 * @tags SysNoticeService
 * @name sysNoticePostList
 * @summary 获取通知公告列表
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
    ...params,
  });
/**
 * No description
 *
 * @tags SysNoticeService
 * @name sysNoticePostRemove
 * @summary 删除通知公告
 * @request POST:/system/notice/remove
 * @secure
 */
export const sysNoticePostRemove = (
  query: {
    /**
     * 公告ID串
     * @format int64
     */
    noticeIds: number;
  },
  params: RequestParams = {},
) =>
  request<ResponseVoid>({
    path: `/system/notice/remove`,
    method: 'POST',
    query: query,
    secure: true,
    ...params,
  });
/**
 * No description
 *
 * @tags SysOssConfigService
 * @name sysOssConfigPostAdd
 * @summary 新增对象存储配置
 * @request POST:/system/oss/config/add
 * @secure
 */
export const sysOssConfigPostAdd = (data: SysOssConfigAddBo, params: RequestParams = {}) =>
  request<ResponseVoid>({
    path: `/system/oss/config/add`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    ...params,
  });
/**
 * No description
 *
 * @tags SysOssConfigService
 * @name sysOssConfigPostChangeStatus
 * @summary 状态修改
 * @request POST:/system/oss/config/changeStatus
 * @secure
 */
export const sysOssConfigPostChangeStatus = (data: SysOssConfigEditBo, params: RequestParams = {}) =>
  request<ResponseVoid>({
    path: `/system/oss/config/changeStatus`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    ...params,
  });
/**
 * No description
 *
 * @tags SysOssConfigService
 * @name sysOssConfigPostEdit
 * @summary 修改对象存储配置
 * @request POST:/system/oss/config/edit
 * @secure
 */
export const sysOssConfigPostEdit = (data: SysOssConfigEditBo, params: RequestParams = {}) =>
  request<ResponseVoid>({
    path: `/system/oss/config/edit`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    ...params,
  });
/**
 * No description
 *
 * @tags SysOssConfigService
 * @name sysOssConfigGetInfo
 * @summary 获取对象存储配置详细信息
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
  request<ResponseSysOssConfigVo>({
    path: `/system/oss/config/info`,
    method: 'GET',
    query: query,
    secure: true,
    ...params,
  });
/**
 * No description
 *
 * @tags SysOssConfigService
 * @name sysOssConfigPostList
 * @summary 查询对象存储配置列表
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
    ...params,
  });
/**
 * No description
 *
 * @tags SysOssConfigService
 * @name sysOssConfigPostRemove
 * @summary 删除对象存储配置
 * @request POST:/system/oss/config/remove
 * @secure
 */
export const sysOssConfigPostRemove = (
  query: {
    /**
     * OSS配置ID组
     * @format int64
     */
    ossConfigIds: number;
  },
  params: RequestParams = {},
) =>
  request<ResponseVoid>({
    path: `/system/oss/config/remove`,
    method: 'POST',
    query: query,
    secure: true,
    ...params,
  });
/**
 * No description
 *
 * @tags SysOssService
 * @name sysOssGetDownload
 * @summary 下载OSS对象存储
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
    ...params,
  });
/**
 * No description
 *
 * @tags SysOssService
 * @name sysOssPostList
 * @summary 查询OSS对象存储列表
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
    ...params,
  });
/**
 * No description
 *
 * @tags SysOssService
 * @name sysOssGetListByIds
 * @summary 查询OSS对象基于ID
 * @request GET:/system/oss/listByIds
 * @secure
 */
export const sysOssGetListByIds = (
  query: {
    /**
     * OSS对象ID串
     * @format int64
     */
    ossIds: number;
  },
  params: RequestParams = {},
) =>
  request<ResponseListSysOssVo>({
    path: `/system/oss/listByIds`,
    method: 'GET',
    query: query,
    secure: true,
    ...params,
  });
/**
 * No description
 *
 * @tags SysOssService
 * @name sysOssPostRemove
 * @summary 删除OSS对象存储
 * @request POST:/system/oss/remove
 * @secure
 */
export const sysOssPostRemove = (
  query: {
    /**
     * OSS对象ID组
     * @format int64
     */
    ossIds: number;
  },
  params: RequestParams = {},
) =>
  request<ResponseVoid>({
    path: `/system/oss/remove`,
    method: 'POST',
    query: query,
    secure: true,
    ...params,
  });
/**
 * No description
 *
 * @tags SysOssService
 * @name sysOssPostUpload
 * @summary 上传OSS对象存储
 * @request POST:/system/oss/upload
 * @secure
 */
export const sysOssPostUpload = (
  query: {
    /**
     * 文件
     * @format binary
     */
    file: File;
  },
  data: {
    /**
     * file
     * @format binary
     */
    file: File;
  },
  params: RequestParams = {},
) =>
  request<ResponseOssUploadVo>({
    path: `/system/oss/upload`,
    method: 'POST',
    query: query,
    body: data,
    secure: true,
    type: ContentType.FormData,
    ...params,
  });
/**
 * No description
 *
 * @tags SysPostService
 * @name sysPostPostAdd
 * @summary 新增岗位
 * @request POST:/system/post/add
 * @secure
 */
export const sysPostPostAdd = (data: SysPostAddBo, params: RequestParams = {}) =>
  request<ResponseVoid>({
    path: `/system/post/add`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    ...params,
  });
/**
 * No description
 *
 * @tags SysPostService
 * @name sysPostPostEdit
 * @summary 修改岗位
 * @request POST:/system/post/edit
 * @secure
 */
export const sysPostPostEdit = (data: SysPostEditBo, params: RequestParams = {}) =>
  request<ResponseVoid>({
    path: `/system/post/edit`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    ...params,
  });
/**
 * No description
 *
 * @tags SysPostService
 * @name sysPostPostExport
 * @summary 导出岗位列表
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
    ...params,
  });
/**
 * No description
 *
 * @tags SysPostService
 * @name sysPostGetInfo
 * @summary 根据岗位编号获取详细信息
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
  request<ResponseSysPostVo>({
    path: `/system/post/info`,
    method: 'GET',
    query: query,
    secure: true,
    ...params,
  });
/**
 * No description
 *
 * @tags SysPostService
 * @name sysPostPostList
 * @summary 获取岗位列表
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
    ...params,
  });
/**
 * No description
 *
 * @tags SysPostService
 * @name sysPostGetOptionSelect
 * @summary 获取岗位选择框列表
 * @request GET:/system/post/optionSelect
 * @secure
 */
export const sysPostGetOptionSelect = (params: RequestParams = {}) =>
  request<ResponseListSysPostVo>({
    path: `/system/post/optionSelect`,
    method: 'GET',
    secure: true,
    ...params,
  });
/**
 * No description
 *
 * @tags SysPostService
 * @name sysPostPostRemove
 * @summary 删除岗位
 * @request POST:/system/post/remove
 * @secure
 */
export const sysPostPostRemove = (
  query: {
    /**
     * 岗位ID串
     * @format int64
     */
    postIds: number;
  },
  params: RequestParams = {},
) =>
  request<ResponseVoid>({
    path: `/system/post/remove`,
    method: 'POST',
    query: query,
    secure: true,
    ...params,
  });
/**
 * No description
 *
 * @tags SysProfileService
 * @name sysProfileGetProfile
 * @summary 个人信息
 * @request GET:/system/user/profile
 * @secure
 */
export const sysProfileGetProfile = (params: RequestParams = {}) =>
  request<ResponseProfileVo>({
    path: `/system/user/profile`,
    method: 'GET',
    secure: true,
    ...params,
  });
/**
 * No description
 *
 * @tags SysProfileService
 * @name sysProfilePostUpdateProfile
 * @summary 修改用户
 * @request POST:/system/user/profile
 * @secure
 */
export const sysProfilePostUpdateProfile = (data: LoginUserUpdateBo, params: RequestParams = {}) =>
  request<ResponseVoid>({
    path: `/system/user/profile`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    ...params,
  });
/**
 * No description
 *
 * @tags SysProfileService
 * @name sysProfilePostAvatar
 * @summary 头像上传
 * @request POST:/system/user/profile/avatar
 * @secure
 */
export const sysProfilePostAvatar = (
  query: {
    /**
     * 用户头像
     * @format binary
     */
    avatarfile: File;
  },
  data: {
    /**
     * avatarfile
     * @format binary
     */
    avatarfile: File;
  },
  params: RequestParams = {},
) =>
  request<ResponseAvatarUploadVo>({
    path: `/system/user/profile/avatar`,
    method: 'POST',
    query: query,
    body: data,
    secure: true,
    type: ContentType.FormData,
    ...params,
  });
/**
 * No description
 *
 * @tags SysProfileService
 * @name sysProfilePostUpdatePwd
 * @summary 重置密码
 * @request POST:/system/user/profile/updatePwd
 * @secure
 */
export const sysProfilePostUpdatePwd = (data: UpdatePwdBo, params: RequestParams = {}) =>
  request<ResponseVoid>({
    path: `/system/user/profile/updatePwd`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    ...params,
  });
/**
 * No description
 *
 * @tags SysRoleService
 * @name sysRolePostAdd
 * @summary 新增角色
 * @request POST:/system/role/add
 * @secure
 */
export const sysRolePostAdd = (data: SysRole, params: RequestParams = {}) =>
  request<ResponseVoid>({
    path: `/system/role/add`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    ...params,
  });
/**
 * No description
 *
 * @tags SysRoleService
 * @name sysRolePostAllocatedList
 * @summary 查询已分配用户角色列表
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
    ...params,
  });
/**
 * No description
 *
 * @tags SysRoleService
 * @name sysRolePostCancelAuthUser
 * @summary 取消授权用户
 * @request POST:/system/role/authUser/cancel
 * @secure
 */
export const sysRolePostCancelAuthUser = (data: SysUserRole, params: RequestParams = {}) =>
  request<ResponseVoid>({
    path: `/system/role/authUser/cancel`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    ...params,
  });
/**
 * No description
 *
 * @tags SysRoleService
 * @name sysUserPostCancelAuthUserAll
 * @summary 批量取消授权用户
 * @request POST:/system/role/authUser/cancelAll
 * @secure
 */
export const sysUserPostCancelAuthUserAll = (data: AuthUserAllBo, params: RequestParams = {}) =>
  request<ResponseVoid>({
    path: `/system/role/authUser/cancelAll`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    ...params,
  });
/**
 * No description
 *
 * @tags SysRoleService
 * @name sysUserPostSelectAuthUserAll
 * @summary 批量选择用户授权
 * @request POST:/system/role/authUser/selectAll
 * @secure
 */
export const sysUserPostSelectAuthUserAll = (data: AuthUserAllBo, params: RequestParams = {}) =>
  request<ResponseVoid>({
    path: `/system/role/authUser/selectAll`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    ...params,
  });
/**
 * No description
 *
 * @tags SysRoleService
 * @name sysRolePostUnallocatedList
 * @summary 查询未分配用户角色列表
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
    ...params,
  });
/**
 * No description
 *
 * @tags SysRoleService
 * @name sysRolePostChangeStatus
 * @summary 状态修改
 * @request POST:/system/role/changeStatus
 * @secure
 */
export const sysRolePostChangeStatus = (data: SysRole, params: RequestParams = {}) =>
  request<ResponseVoid>({
    path: `/system/role/changeStatus`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    ...params,
  });
/**
 * No description
 *
 * @tags SysRoleService
 * @name sysRolePostDataScope
 * @summary 修改保存数据权限
 * @request POST:/system/role/dataScope
 * @secure
 */
export const sysRolePostDataScope = (data: SysRole, params: RequestParams = {}) =>
  request<ResponseVoid>({
    path: `/system/role/dataScope`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    ...params,
  });
/**
 * No description
 *
 * @tags SysRoleService
 * @name sysRolePostEdit
 * @summary 修改保存角色
 * @request POST:/system/role/edit
 * @secure
 */
export const sysRolePostEdit = (data: SysRole, params: RequestParams = {}) =>
  request<ResponseVoid>({
    path: `/system/role/edit`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    ...params,
  });
/**
 * No description
 *
 * @tags SysRoleService
 * @name sysRolePostExport
 * @summary 导出角色信息列表
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
    ...params,
  });
/**
 * No description
 *
 * @tags SysRoleService
 * @name sysRoleGetInfo
 * @summary 根据角色编号获取详细信息
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
  request<ResponseSysRoleVo>({
    path: `/system/role/info`,
    method: 'GET',
    query: query,
    secure: true,
    ...params,
  });
/**
 * No description
 *
 * @tags SysRoleService
 * @name sysRolePostList
 * @summary 查询角色信息列表
 * @request POST:/system/role/list
 * @secure
 */
export const sysRolePostList = (data: SysRoleQueryBo, params: RequestParams = {}) =>
  request<TableDataInfoSysRoleVo>({
    path: `/system/role/list`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    ...params,
  });
/**
 * No description
 *
 * @tags SysRoleService
 * @name sysRoleGetOptionSelect
 * @summary 获取角色选择框列表
 * @request GET:/system/role/optionSelect
 * @secure
 */
export const sysRoleGetOptionSelect = (params: RequestParams = {}) =>
  request<ResponseListSysRoleVo>({
    path: `/system/role/optionSelect`,
    method: 'GET',
    secure: true,
    ...params,
  });
/**
 * No description
 *
 * @tags SysRoleService
 * @name sysRolePostRemove
 * @summary 删除角色
 * @request POST:/system/role/remove
 * @secure
 */
export const sysRolePostRemove = (
  query: {
    /**
     * 角色ID串
     * @format int64
     */
    roleIds: number;
  },
  params: RequestParams = {},
) =>
  request<ResponseVoid>({
    path: `/system/role/remove`,
    method: 'POST',
    query: query,
    secure: true,
    ...params,
  });
/**
 * No description
 *
 * @tags SysUserService
 * @name sysUserGetInfo
 * @summary 根据用户编号获取详细信息
 * @request GET:/system/user/
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
  request<ResponseUserDetailVo>({
    path: `/system/user/`,
    method: 'GET',
    query: query,
    secure: true,
    ...params,
  });
/**
 * No description
 *
 * @tags SysUserService
 * @name sysUserPostAdd
 * @summary 新增用户
 * @request POST:/system/user/add
 * @secure
 */
export const sysUserPostAdd = (data: SysUserAddBo, params: RequestParams = {}) =>
  request<ResponseVoid>({
    path: `/system/user/add`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    ...params,
  });
/**
 * No description
 *
 * @tags SysUserService
 * @name sysUserGetAuthRole
 * @summary 根据用户编号获取授权角色
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
  request<ResponseUserAuthRoleVo>({
    path: `/system/user/authRole`,
    method: 'GET',
    query: query,
    secure: true,
    ...params,
  });
/**
 * No description
 *
 * @tags SysUserService
 * @name sysUserPostChangeStatus
 * @summary 状态修改
 * @request POST:/system/user/changeStatus
 * @secure
 */
export const sysUserPostChangeStatus = (data: SysUserReq, params: RequestParams = {}) =>
  request<ResponseVoid>({
    path: `/system/user/changeStatus`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    ...params,
  });
/**
 * No description
 *
 * @tags SysUserService
 * @name sysUserPostEdit
 * @summary 修改用户
 * @request POST:/system/user/edit
 * @secure
 */
export const sysUserPostEdit = (data: SysUserEditBo, params: RequestParams = {}) =>
  request<ResponseVoid>({
    path: `/system/user/edit`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    ...params,
  });
/**
 * No description
 *
 * @tags SysUserService
 * @name sysUserPostExport
 * @summary 导出用户列表
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
    ...params,
  });
/**
 * No description
 *
 * @tags SysUserService
 * @name sysUserPostImportData
 * @summary 导入用户列表
 * @request POST:/system/user/importData
 * @secure
 */
export const sysUserPostImportData = (
  data: {
    /**
     * file
     * @format binary
     */
    file: File;
  },
  query?: {
    /** updateSupport */
    updateSupport?: boolean;
  },
  params: RequestParams = {},
) =>
  request<ResponseVoid>({
    path: `/system/user/importData`,
    method: 'POST',
    query: query,
    body: data,
    secure: true,
    type: ContentType.FormData,
    ...params,
  });
/**
 * No description
 *
 * @tags SysUserService
 * @name sysUserPostImportTemplate
 * @summary 下载导入模板
 * @request POST:/system/user/importTemplate
 * @secure
 */
export const sysUserPostImportTemplate = (params: RequestParams = {}) =>
  request<any>({
    path: `/system/user/importTemplate`,
    method: 'POST',
    secure: true,
    ...params,
  });
/**
 * No description
 *
 * @tags SysUserService
 * @name sysUserGetInfo1
 * @summary 根据用户编号获取详细信息
 * @request GET:/system/user/info
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
  request<ResponseUserDetailVo>({
    path: `/system/user/info`,
    method: 'GET',
    query: query,
    secure: true,
    ...params,
  });
/**
 * No description
 *
 * @tags SysUserService
 * @name sysUserPostInsertAuthRole
 * @summary 用户授权角色
 * @request POST:/system/user/insertAuthRole
 * @secure
 */
export const sysUserPostInsertAuthRole = (data: AuthRoleAllBo, params: RequestParams = {}) =>
  request<ResponseVoid>({
    path: `/system/user/insertAuthRole`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    ...params,
  });
/**
 * No description
 *
 * @tags SysUserService
 * @name sysUserPostList
 * @summary 获取用户列表
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
    ...params,
  });
/**
 * No description
 *
 * @tags SysUserService
 * @name sysUserPostRemove
 * @summary 删除用户
 * @request POST:/system/user/remove
 * @secure
 */
export const sysUserPostRemove = (
  query: {
    /**
     * 角色ID串
     * @format int64
     */
    userIds: number;
  },
  params: RequestParams = {},
) =>
  request<ResponseVoid>({
    path: `/system/user/remove`,
    method: 'POST',
    query: query,
    secure: true,
    ...params,
  });
/**
 * No description
 *
 * @tags SysUserService
 * @name sysUserPostResetPwd
 * @summary 重置密码
 * @request POST:/system/user/resetPwd
 * @secure
 */
export const sysUserPostResetPwd = (data: SysUserReq, params: RequestParams = {}) =>
  request<ResponseVoid>({
    path: `/system/user/resetPwd`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    ...params,
  });
