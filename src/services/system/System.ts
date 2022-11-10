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

import {
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
import { ContentType, HttpClient, RequestParams } from './http-client';

export class System<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags BizLogininforService
   * @name BizLogininforPostAdd
   * @summary 新增业务用户登录记录
   * @request POST:/system/logininfor/add
   * @secure
   */
  bizLogininforPostAdd = (data: BizLogininforAddBo, params: RequestParams = {}) =>
    this.request<ResponseVoid, void>({
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
   * @name BizLogininforPostEdit
   * @summary 修改业务用户登录记录
   * @request POST:/system/logininfor/edit
   * @secure
   */
  bizLogininforPostEdit = (data: BizLogininforEditBo, params: RequestParams = {}) =>
    this.request<ResponseVoid, void>({
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
   * @name BizLogininforPostExport
   * @summary 导出业务用户登录记录列表
   * @request POST:/system/logininfor/export
   * @secure
   */
  bizLogininforPostExport = (data: BizLogininforQueryBo, params: RequestParams = {}) =>
    this.request<void, void>({
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
   * @name BizLogininforGetInfo
   * @summary 获取业务用户登录记录详细信息
   * @request GET:/system/logininfor/info
   * @secure
   */
  bizLogininforGetInfo = (
    query: {
      /**
       * 主键
       * @format int64
       */
      主键: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ResponseBizLogininforVo, void>({
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
   * @name BizLogininforPostList
   * @summary 查询业务用户登录记录列表
   * @request POST:/system/logininfor/list
   * @secure
   */
  bizLogininforPostList = (data: BizLogininforPageQueryBo, params: RequestParams = {}) =>
    this.request<TableDataInfoBizLogininforVo, void>({
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
   * @name BizLogininforPostRemove
   * @summary 删除业务用户登录记录
   * @request POST:/system/logininfor/remove
   * @secure
   */
  bizLogininforPostRemove = (
    query: {
      /**
       * 主键串
       * @format int64
       */
      公告ID串: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ResponseVoid, void>({
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
   * @name SysConfigPostAdd
   * @summary 新增参数配置
   * @request POST:/system/config/add
   * @secure
   */
  sysConfigPostAdd = (data: SysConfigAddBo, params: RequestParams = {}) =>
    this.request<ResponseVoid, void>({
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
   * @name SysConfigGetConfigKey
   * @summary 根据参数键名查询参数值
   * @request GET:/system/config/configKey
   * @secure
   */
  sysConfigGetConfigKey = (
    query: {
      /** 参数Key */
      configKey: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<ResponseVoid, void>({
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
   * @name SysConfigPostEdit
   * @summary 修改参数配置
   * @request POST:/system/config/edit
   * @secure
   */
  sysConfigPostEdit = (data: SysConfigEditBo, params: RequestParams = {}) =>
    this.request<ResponseVoid, void>({
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
   * @name SysConfigPostExport
   * @summary 导出参数配置列表
   * @request POST:/system/config/export
   * @secure
   */
  sysConfigPostExport = (data: SysConfigQueryBo, params: RequestParams = {}) =>
    this.request<void, void>({
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
   * @name SysConfigGetInfo
   * @summary 根据参数编号获取详细信息
   * @request GET:/system/config/info
   * @secure
   */
  sysConfigGetInfo = (
    query: {
      /**
       * 参数ID
       * @format int64
       */
      configId: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ResponseSysConfigVo, void>({
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
   * @name SysConfigPostList
   * @summary 获取参数配置列表
   * @request POST:/system/config/list
   * @secure
   */
  sysConfigPostList = (data: SysConfigPageQueryBo, params: RequestParams = {}) =>
    this.request<TableDataInfoSysConfigVo, void>({
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
   * @name SysConfigPostRefreshCache
   * @summary 刷新参数缓存
   * @request POST:/system/config/refreshCache
   * @secure
   */
  sysConfigPostRefreshCache = (params: RequestParams = {}) =>
    this.request<ResponseVoid, void>({
      path: `/system/config/refreshCache`,
      method: 'POST',
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags SysConfigService
   * @name SysConfigPostRemove
   * @summary 删除参数配置
   * @request POST:/system/config/remove
   * @secure
   */
  sysConfigPostRemove = (
    query: {
      /**
       * 参数ID串
       * @format int64
       */
      configIds: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ResponseVoid, void>({
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
   * @name SysConfigPostUpdateByKey
   * @summary 根据参数键名修改参数配置
   * @request POST:/system/config/updateByKey
   * @secure
   */
  sysConfigPostUpdateByKey = (data: SysConfigEditBo, params: RequestParams = {}) =>
    this.request<ResponseVoid, void>({
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
   * @name SysDeptPostAdd
   * @summary 新增部门
   * @request POST:/system/dept/add
   * @secure
   */
  sysDeptPostAdd = (data: SysDeptAddBo, params: RequestParams = {}) =>
    this.request<ResponseVoid, void>({
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
   * @name SysDeptPostEdit
   * @summary 修改部门
   * @request POST:/system/dept/edit
   * @secure
   */
  sysDeptPostEdit = (data: SysDeptEditBo, params: RequestParams = {}) =>
    this.request<ResponseVoid, void>({
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
   * @name SysDeptGetInfo
   * @summary 根据部门编号获取详细信息
   * @request GET:/system/dept/info
   * @secure
   */
  sysDeptGetInfo = (
    query: {
      /**
       * 部门ID
       * @format int64
       */
      deptId: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ResponseSysDeptVo, void>({
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
   * @name SysDeptPostList
   * @summary 获取部门列表
   * @request POST:/system/dept/list
   * @secure
   */
  sysDeptPostList = (data: SysDeptQueryBo, params: RequestParams = {}) =>
    this.request<ResponseListSysDeptVo, void>({
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
   * @name SysDeptGetExcludeChild
   * @summary 查询部门列表（排除节点）
   * @request GET:/system/dept/list/exclude
   * @secure
   */
  sysDeptGetExcludeChild = (
    query: {
      /**
       * 部门ID
       * @format int64
       */
      deptId: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ResponseListSysDeptVo, void>({
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
   * @name SysDeptPostRemove
   * @summary 删除部门
   * @request POST:/system/dept/remove
   * @secure
   */
  sysDeptPostRemove = (
    query: {
      /**
       * 部门ID串
       * @format int64
       */
      deptId: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ResponseVoid, void>({
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
   * @name SysDeptGetRoleDeptTreeSelect
   * @summary 加载对应角色部门列表树
   * @request GET:/system/dept/roleDeptTreeSelect
   * @secure
   */
  sysDeptGetRoleDeptTreeSelect = (
    query: {
      /**
       * 角色ID
       * @format int64
       */
      roleId: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ResponseRoleDeptTreeSelectVo, void>({
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
   * @name SysDeptPostTreeSelect
   * @summary 获取部门下拉树列表
   * @request POST:/system/dept/treeSelect
   * @secure
   */
  sysDeptPostTreeSelect = (data: SysDeptQueryBo, params: RequestParams = {}) =>
    this.request<ResponseListTreeLong, void>({
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
   * @name SysDictDataPostAdd
   * @summary 新增字典类型
   * @request POST:/system/dict/data/add
   * @secure
   */
  sysDictDataPostAdd = (data: SysDictDataAddBo, params: RequestParams = {}) =>
    this.request<ResponseVoid, void>({
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
   * @name SysDictDataPostEdit
   * @summary 修改保存字典类型
   * @request POST:/system/dict/data/edit
   * @secure
   */
  sysDictDataPostEdit = (data: SysDictDataEditBo, params: RequestParams = {}) =>
    this.request<ResponseVoid, void>({
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
   * @name SysDictDataPostExport
   * @summary 导出字典数据列表
   * @request POST:/system/dict/data/export
   * @secure
   */
  sysDictDataPostExport = (data: SysDictDataQueryBo, params: RequestParams = {}) =>
    this.request<void, void>({
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
   * @name SysDictDataGetInfo
   * @summary 查询字典数据详细
   * @request GET:/system/dict/data/info
   * @secure
   */
  sysDictDataGetInfo = (
    query: {
      /**
       * 字典code
       * @format int64
       */
      dictCode: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ResponseSysDictDataVo, void>({
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
   * @name SysDictDataPostList
   * @summary 查询字典数据列表
   * @request POST:/system/dict/data/list
   * @secure
   */
  sysDictDataPostList = (data: SysDictDataPageQueryBo, params: RequestParams = {}) =>
    this.request<TableDataInfoSysDictDataVo, void>({
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
   * @name SysDictDataPostRemove
   * @summary 删除字典类型
   * @request POST:/system/dict/data/remove
   * @secure
   */
  sysDictDataPostRemove = (
    query: {
      /**
       * 字典code串
       * @format int64
       */
      dictCodes: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ResponseVoid, void>({
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
   * @name SysDictDataGetType
   * @summary 根据字典类型查询字典数据信息
   * @request GET:/system/dict/data/type
   * @secure
   */
  sysDictDataGetType = (
    query: {
      /** 字典类型 */
      dictType: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<ResponseListSysDictDataVo, void>({
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
   * @name SysDictTypePostAdd
   * @summary 新增字典类型
   * @request POST:/system/dict/type/add
   * @secure
   */
  sysDictTypePostAdd = (data: SysDictTypeAddBo, params: RequestParams = {}) =>
    this.request<ResponseVoid, void>({
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
   * @name SysDictTypePostEdit
   * @summary 修改字典类型
   * @request POST:/system/dict/type/edit
   * @secure
   */
  sysDictTypePostEdit = (data: SysDictTypeEditBo, params: RequestParams = {}) =>
    this.request<ResponseVoid, void>({
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
   * @name SysDictTypePostExport
   * @summary 导出字典类型列表
   * @request POST:/system/dict/type/export
   * @secure
   */
  sysDictTypePostExport = (data: SysDictTypeQueryBo, params: RequestParams = {}) =>
    this.request<void, void>({
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
   * @name SysDictTypeGetInfo
   * @summary 查询字典类型详细
   * @request GET:/system/dict/type/info
   * @secure
   */
  sysDictTypeGetInfo = (
    query: {
      /**
       * 字典ID
       * @format int64
       */
      dictId: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ResponseSysDictTypeVo, void>({
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
   * @name SysDictTypePostList
   * @summary 查询字典类型列表
   * @request POST:/system/dict/type/list
   * @secure
   */
  sysDictTypePostList = (data: SysDictTypePageQueryBo, params: RequestParams = {}) =>
    this.request<TableDataInfoSysDictTypeVo, void>({
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
   * @name OptionSelectUsingGet
   * @summary 获取字典选择框列表
   * @request GET:/system/dict/type/optionSelect
   * @secure
   */
  optionSelectUsingGet = (params: RequestParams = {}) =>
    this.request<ResponseListSysDictTypeVo, void>({
      path: `/system/dict/type/optionSelect`,
      method: 'GET',
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags SysDictTypeService
   * @name SysDictTypePostRefreshCache
   * @summary 刷新字典缓存
   * @request POST:/system/dict/type/refreshCache
   * @secure
   */
  sysDictTypePostRefreshCache = (params: RequestParams = {}) =>
    this.request<ResponseVoid, void>({
      path: `/system/dict/type/refreshCache`,
      method: 'POST',
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags SysDictTypeService
   * @name SysDictTypePostRemove
   * @summary 删除字典类型
   * @request POST:/system/dict/type/remove
   * @secure
   */
  sysDictTypePostRemove = (
    query: {
      /**
       * 字典ID串
       * @format int64
       */
      dictIds: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ResponseVoid, void>({
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
   * @name SysMenuPostAdd
   * @summary 新增菜单
   * @request POST:/system/menu/add
   * @secure
   */
  sysMenuPostAdd = (data: SysMenuAddBo, params: RequestParams = {}) =>
    this.request<ResponseVoid, void>({
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
   * @name SysMenuPostEdit
   * @summary 修改菜单
   * @request POST:/system/menu/edit
   * @secure
   */
  sysMenuPostEdit = (data: SysMenuEditBo, params: RequestParams = {}) =>
    this.request<ResponseVoid, void>({
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
   * @name SysMenuGetInfo
   * @summary 根据菜单编号获取详细信息
   * @request GET:/system/menu/info
   * @secure
   */
  sysMenuGetInfo = (
    query: {
      /**
       * 菜单ID
       * @format int64
       */
      menuId: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ResponseSysMenuVo, void>({
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
   * @name SysMenuPostList
   * @summary 获取菜单列表
   * @request POST:/system/menu/list
   * @secure
   */
  sysMenuPostList = (data: SysMenuQueryBo, params: RequestParams = {}) =>
    this.request<ResponseListSysMenuVo, void>({
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
   * @name SysMenuPostRemove
   * @summary 删除菜单
   * @request POST:/system/menu/remove
   * @secure
   */
  sysMenuPostRemove = (
    query: {
      /**
       * 菜单ID
       * @format int64
       */
      menuId: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ResponseVoid, void>({
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
   * @name SysMenuGetRoleMenuTreeSelect
   * @summary 加载对应角色菜单列表树
   * @request GET:/system/menu/roleMenuTreeSelect
   * @secure
   */
  sysMenuGetRoleMenuTreeSelect = (
    query: {
      /**
       * 角色ID
       * @format int64
       */
      roleId: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ResponseRoleMenuTreeSelectVo, void>({
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
   * @name SysMenuPostTreeSelect
   * @summary 获取菜单下拉树列表
   * @request POST:/system/menu/treeSelect
   * @secure
   */
  sysMenuPostTreeSelect = (data: SysMenuQueryBo, params: RequestParams = {}) =>
    this.request<ResponseListTreeLong, void>({
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
   * @name SysNoticePostAdd
   * @summary 新增通知公告
   * @request POST:/system/notice/add
   * @secure
   */
  sysNoticePostAdd = (data: SysNoticeAddBo, params: RequestParams = {}) =>
    this.request<ResponseVoid, void>({
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
   * @name SysNoticePostEdit
   * @summary 修改通知公告
   * @request POST:/system/notice/edit
   * @secure
   */
  sysNoticePostEdit = (data: SysNoticeEditBo, params: RequestParams = {}) =>
    this.request<ResponseVoid, void>({
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
   * @name SysNoticeGetInfo
   * @summary 根据通知公告编号获取详细信息
   * @request GET:/system/notice/info
   * @secure
   */
  sysNoticeGetInfo = (
    query: {
      /**
       * 公告ID
       * @format int64
       */
      noticeId: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ResponseSysNoticeVo, void>({
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
   * @name SysNoticePostList
   * @summary 获取通知公告列表
   * @request POST:/system/notice/list
   * @secure
   */
  sysNoticePostList = (data: SysNoticePageQueryBo, params: RequestParams = {}) =>
    this.request<TableDataInfoSysNoticeVo, void>({
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
   * @name SysNoticePostRemove
   * @summary 删除通知公告
   * @request POST:/system/notice/remove
   * @secure
   */
  sysNoticePostRemove = (
    query: {
      /**
       * 公告ID串
       * @format int64
       */
      noticeIds: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ResponseVoid, void>({
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
   * @name SysOssConfigPostAdd
   * @summary 新增对象存储配置
   * @request POST:/system/oss/config/add
   * @secure
   */
  sysOssConfigPostAdd = (data: SysOssConfigAddBo, params: RequestParams = {}) =>
    this.request<ResponseVoid, void>({
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
   * @name SysOssConfigPostChangeStatus
   * @summary 状态修改
   * @request POST:/system/oss/config/changeStatus
   * @secure
   */
  sysOssConfigPostChangeStatus = (data: SysOssConfigEditBo, params: RequestParams = {}) =>
    this.request<ResponseVoid, void>({
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
   * @name SysOssConfigPostEdit
   * @summary 修改对象存储配置
   * @request POST:/system/oss/config/edit
   * @secure
   */
  sysOssConfigPostEdit = (data: SysOssConfigEditBo, params: RequestParams = {}) =>
    this.request<ResponseVoid, void>({
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
   * @name SysOssConfigGetInfo
   * @summary 获取对象存储配置详细信息
   * @request GET:/system/oss/config/info
   * @secure
   */
  sysOssConfigGetInfo = (
    query: {
      /**
       * OSS配置ID
       * @format int64
       */
      ossConfigId: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ResponseSysOssConfigVo, void>({
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
   * @name SysOssConfigPostList
   * @summary 查询对象存储配置列表
   * @request POST:/system/oss/config/list
   * @secure
   */
  sysOssConfigPostList = (data: SysOssConfigPageQueryBo, params: RequestParams = {}) =>
    this.request<TableDataInfoSysOssConfigVo, void>({
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
   * @name SysOssConfigPostRemove
   * @summary 删除对象存储配置
   * @request POST:/system/oss/config/remove
   * @secure
   */
  sysOssConfigPostRemove = (
    query: {
      /**
       * OSS配置ID组
       * @format int64
       */
      ossConfigIds: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ResponseVoid, void>({
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
   * @name SysOssGetDownload
   * @summary 下载OSS对象存储
   * @request GET:/system/oss/download
   * @secure
   */
  sysOssGetDownload = (
    query: {
      /**
       * OSS对象ID
       * @format int64
       */
      ossId: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<void, void>({
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
   * @name SysOssPostList
   * @summary 查询OSS对象存储列表
   * @request POST:/system/oss/list
   * @secure
   */
  sysOssPostList = (data: SysOssPageQueryBo, params: RequestParams = {}) =>
    this.request<TableDataInfoSysOssVo, void>({
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
   * @name SysOssGetListByIds
   * @summary 查询OSS对象基于ID
   * @request GET:/system/oss/listByIds
   * @secure
   */
  sysOssGetListByIds = (
    query: {
      /**
       * OSS对象ID串
       * @format int64
       */
      ossIds: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ResponseListSysOssVo, void>({
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
   * @name SysOssPostRemove
   * @summary 删除OSS对象存储
   * @request POST:/system/oss/remove
   * @secure
   */
  sysOssPostRemove = (
    query: {
      /**
       * OSS对象ID组
       * @format int64
       */
      ossIds: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ResponseVoid, void>({
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
   * @name SysOssPostUpload
   * @summary 上传OSS对象存储
   * @request POST:/system/oss/upload
   * @secure
   */
  sysOssPostUpload = (
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
    this.request<ResponseOssUploadVo, void>({
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
   * @name SysPostPostAdd
   * @summary 新增岗位
   * @request POST:/system/post/add
   * @secure
   */
  sysPostPostAdd = (data: SysPostAddBo, params: RequestParams = {}) =>
    this.request<ResponseVoid, void>({
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
   * @name SysPostPostEdit
   * @summary 修改岗位
   * @request POST:/system/post/edit
   * @secure
   */
  sysPostPostEdit = (data: SysPostEditBo, params: RequestParams = {}) =>
    this.request<ResponseVoid, void>({
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
   * @name SysPostPostExport
   * @summary 导出岗位列表
   * @request POST:/system/post/export
   * @secure
   */
  sysPostPostExport = (data: SysPostQueryBo, params: RequestParams = {}) =>
    this.request<void, void>({
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
   * @name SysPostGetInfo
   * @summary 根据岗位编号获取详细信息
   * @request GET:/system/post/info
   * @secure
   */
  sysPostGetInfo = (
    query: {
      /**
       * 岗位ID
       * @format int64
       */
      postId: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ResponseSysPostVo, void>({
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
   * @name SysPostPostList
   * @summary 获取岗位列表
   * @request POST:/system/post/list
   * @secure
   */
  sysPostPostList = (data: SysPostPageQueryBo, params: RequestParams = {}) =>
    this.request<TableDataInfoSysPostVo, void>({
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
   * @name SysPostGetOptionSelect
   * @summary 获取岗位选择框列表
   * @request GET:/system/post/optionSelect
   * @secure
   */
  sysPostGetOptionSelect = (params: RequestParams = {}) =>
    this.request<ResponseListSysPostVo, void>({
      path: `/system/post/optionSelect`,
      method: 'GET',
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags SysPostService
   * @name SysPostPostRemove
   * @summary 删除岗位
   * @request POST:/system/post/remove
   * @secure
   */
  sysPostPostRemove = (
    query: {
      /**
       * 岗位ID串
       * @format int64
       */
      postIds: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ResponseVoid, void>({
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
   * @name SysProfileGetProfile
   * @summary 个人信息
   * @request GET:/system/user/profile
   * @secure
   */
  sysProfileGetProfile = (params: RequestParams = {}) =>
    this.request<ResponseProfileVo, void>({
      path: `/system/user/profile`,
      method: 'GET',
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags SysProfileService
   * @name SysProfilePostUpdateProfile
   * @summary 修改用户
   * @request POST:/system/user/profile
   * @secure
   */
  sysProfilePostUpdateProfile = (data: LoginUserUpdateBo, params: RequestParams = {}) =>
    this.request<ResponseVoid, void>({
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
   * @name SysProfilePostAvatar
   * @summary 头像上传
   * @request POST:/system/user/profile/avatar
   * @secure
   */
  sysProfilePostAvatar = (
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
    this.request<ResponseAvatarUploadVo, void>({
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
   * @name SysProfilePostUpdatePwd
   * @summary 重置密码
   * @request POST:/system/user/profile/updatePwd
   * @secure
   */
  sysProfilePostUpdatePwd = (data: UpdatePwdBo, params: RequestParams = {}) =>
    this.request<ResponseVoid, void>({
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
   * @name SysRolePostAdd
   * @summary 新增角色
   * @request POST:/system/role/add
   * @secure
   */
  sysRolePostAdd = (data: SysRole, params: RequestParams = {}) =>
    this.request<ResponseVoid, void>({
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
   * @name SysRolePostAllocatedList
   * @summary 查询已分配用户角色列表
   * @request POST:/system/role/authUser/allocatedList
   * @secure
   */
  sysRolePostAllocatedList = (data: SysUserPageQueryBo, params: RequestParams = {}) =>
    this.request<TableDataInfoSysUserVo, void>({
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
   * @name SysRolePostCancelAuthUser
   * @summary 取消授权用户
   * @request POST:/system/role/authUser/cancel
   * @secure
   */
  sysRolePostCancelAuthUser = (data: SysUserRole, params: RequestParams = {}) =>
    this.request<ResponseVoid, void>({
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
   * @name SysUserPostCancelAuthUserAll
   * @summary 批量取消授权用户
   * @request POST:/system/role/authUser/cancelAll
   * @secure
   */
  sysUserPostCancelAuthUserAll = (data: AuthUserAllBo, params: RequestParams = {}) =>
    this.request<ResponseVoid, void>({
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
   * @name SysUserPostSelectAuthUserAll
   * @summary 批量选择用户授权
   * @request POST:/system/role/authUser/selectAll
   * @secure
   */
  sysUserPostSelectAuthUserAll = (data: AuthUserAllBo, params: RequestParams = {}) =>
    this.request<ResponseVoid, void>({
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
   * @name SysRolePostUnallocatedList
   * @summary 查询未分配用户角色列表
   * @request POST:/system/role/authUser/unallocatedList
   * @secure
   */
  sysRolePostUnallocatedList = (data: SysUserPageQueryBo, params: RequestParams = {}) =>
    this.request<TableDataInfoSysUserVo, void>({
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
   * @name SysRolePostChangeStatus
   * @summary 状态修改
   * @request POST:/system/role/changeStatus
   * @secure
   */
  sysRolePostChangeStatus = (data: SysRole, params: RequestParams = {}) =>
    this.request<ResponseVoid, void>({
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
   * @name SysRolePostDataScope
   * @summary 修改保存数据权限
   * @request POST:/system/role/dataScope
   * @secure
   */
  sysRolePostDataScope = (data: SysRole, params: RequestParams = {}) =>
    this.request<ResponseVoid, void>({
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
   * @name SysRolePostEdit
   * @summary 修改保存角色
   * @request POST:/system/role/edit
   * @secure
   */
  sysRolePostEdit = (data: SysRole, params: RequestParams = {}) =>
    this.request<ResponseVoid, void>({
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
   * @name SysRolePostExport
   * @summary 导出角色信息列表
   * @request POST:/system/role/export
   * @secure
   */
  sysRolePostExport = (data: SysRoleQueryBo, params: RequestParams = {}) =>
    this.request<void, void>({
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
   * @name SysRoleGetInfo
   * @summary 根据角色编号获取详细信息
   * @request GET:/system/role/info
   * @secure
   */
  sysRoleGetInfo = (
    query: {
      /**
       * 角色ID
       * @format int64
       */
      roleId: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ResponseSysRoleVo, void>({
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
   * @name SysRolePostList
   * @summary 查询角色信息列表
   * @request POST:/system/role/list
   * @secure
   */
  sysRolePostList = (data: SysRoleQueryBo, params: RequestParams = {}) =>
    this.request<TableDataInfoSysRoleVo, void>({
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
   * @name SysRoleGetOptionSelect
   * @summary 获取角色选择框列表
   * @request GET:/system/role/optionSelect
   * @secure
   */
  sysRoleGetOptionSelect = (params: RequestParams = {}) =>
    this.request<ResponseListSysRoleVo, void>({
      path: `/system/role/optionSelect`,
      method: 'GET',
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags SysRoleService
   * @name SysRolePostRemove
   * @summary 删除角色
   * @request POST:/system/role/remove
   * @secure
   */
  sysRolePostRemove = (
    query: {
      /**
       * 角色ID串
       * @format int64
       */
      roleIds: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ResponseVoid, void>({
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
   * @name SysUserGetInfo
   * @summary 根据用户编号获取详细信息
   * @request GET:/system/user/
   * @secure
   */
  sysUserGetInfo = (
    query?: {
      /**
       * 用户ID
       * @format int64
       */
      userId?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ResponseUserDetailVo, void>({
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
   * @name SysUserPostAdd
   * @summary 新增用户
   * @request POST:/system/user/add
   * @secure
   */
  sysUserPostAdd = (data: SysUserAddBo, params: RequestParams = {}) =>
    this.request<ResponseVoid, void>({
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
   * @name SysUserGetAuthRole
   * @summary 根据用户编号获取授权角色
   * @request GET:/system/user/authRole
   * @secure
   */
  sysUserGetAuthRole = (
    query: {
      /**
       * 用户ID
       * @format int64
       */
      userId: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ResponseUserAuthRoleVo, void>({
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
   * @name SysUserPostChangeStatus
   * @summary 状态修改
   * @request POST:/system/user/changeStatus
   * @secure
   */
  sysUserPostChangeStatus = (data: SysUserReq, params: RequestParams = {}) =>
    this.request<ResponseVoid, void>({
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
   * @name SysUserPostEdit
   * @summary 修改用户
   * @request POST:/system/user/edit
   * @secure
   */
  sysUserPostEdit = (data: SysUserEditBo, params: RequestParams = {}) =>
    this.request<ResponseVoid, void>({
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
   * @name SysUserPostExport
   * @summary 导出用户列表
   * @request POST:/system/user/export
   * @secure
   */
  sysUserPostExport = (data: SysUserQueryBo, params: RequestParams = {}) =>
    this.request<void, void>({
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
   * @name SysUserPostImportData
   * @summary 导入用户列表
   * @request POST:/system/user/importData
   * @secure
   */
  sysUserPostImportData = (
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
    this.request<ResponseVoid, void>({
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
   * @name SysUserPostImportTemplate
   * @summary 下载导入模板
   * @request POST:/system/user/importTemplate
   * @secure
   */
  sysUserPostImportTemplate = (params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/system/user/importTemplate`,
      method: 'POST',
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags SysUserService
   * @name SysUserGetInfo1
   * @summary 根据用户编号获取详细信息
   * @request GET:/system/user/info
   * @secure
   */
  sysUserGetInfo1 = (
    query?: {
      /**
       * 用户ID
       * @format int64
       */
      userId?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ResponseUserDetailVo, void>({
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
   * @name SysUserPostInsertAuthRole
   * @summary 用户授权角色
   * @request POST:/system/user/insertAuthRole
   * @secure
   */
  sysUserPostInsertAuthRole = (data: AuthRoleAllBo, params: RequestParams = {}) =>
    this.request<ResponseVoid, void>({
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
   * @name SysUserPostList
   * @summary 获取用户列表
   * @request POST:/system/user/list
   * @secure
   */
  sysUserPostList = (data: SysUserPageQueryBo, params: RequestParams = {}) =>
    this.request<TableDataInfoSysUserVo, void>({
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
   * @name SysUserPostRemove
   * @summary 删除用户
   * @request POST:/system/user/remove
   * @secure
   */
  sysUserPostRemove = (
    query: {
      /**
       * 角色ID串
       * @format int64
       */
      userIds: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ResponseVoid, void>({
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
   * @name SysUserPostResetPwd
   * @summary 重置密码
   * @request POST:/system/user/resetPwd
   * @secure
   */
  sysUserPostResetPwd = (data: SysUserReq, params: RequestParams = {}) =>
    this.request<ResponseVoid, void>({
      path: `/system/user/resetPwd`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
