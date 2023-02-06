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
  RCacheInfoVo,
  RCollectionString,
  RListSysCache,
  RSysCache,
  RVoid,
  SysLogininforPageQueryBo,
  SysLogininforQueryBo,
  SysOperLogPageQueryBo,
  SysOperLogQueryBo,
  TableDataInfo,
} from './data-contracts';

/**
 * @description 删除操作日志记录
 *
 * @tags SysOperlogService
 * @name sysOperLogPostRemove
 * @request POST:/monitor/operlog/remove
 * @secure
 */
export const sysOperLogPostRemove = (
  query: {
    /** 操作日志ID组 */
    operIds: number[];
  },
  params: RequestParams = {},
) =>
  request<RVoid>({
    path: `/monitor/operlog/remove`,
    method: 'POST',
    query: query,
    secure: true,
    skipErrorHandler: false,
    ...params,
  });
export const sysOperLogPostRemoveSkipErrorHandler = (
  query: {
    /** 操作日志ID组 */
    operIds: number[];
  },
  params: RequestParams = {},
) =>
  request<RVoid>({
    path: `/monitor/operlog/remove`,
    method: 'POST',
    query: query,
    secure: true,
    skipErrorHandler: true,
    ...params,
  });

/**
 * @description 查询操作日志记录列表
 *
 * @tags SysOperlogService
 * @name sysOperLogPostList
 * @request POST:/monitor/operlog/list
 * @secure
 */
export const sysOperLogPostList = (data: SysOperLogPageQueryBo, params: RequestParams = {}) =>
  request<TableDataInfo>({
    path: `/monitor/operlog/list`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: false,
    ...params,
  });
export const sysOperLogPostListSkipErrorHandler = (data: SysOperLogPageQueryBo, params: RequestParams = {}) =>
  request<TableDataInfo>({
    path: `/monitor/operlog/list`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: true,
    ...params,
  });

/**
 * @description 导出操作日志记录列表
 *
 * @tags SysOperlogService
 * @name sysOperLogPostExport
 * @request POST:/monitor/operlog/export
 * @secure
 */
export const sysOperLogPostExport = (data: SysOperLogQueryBo, params: RequestParams = {}) =>
  request<any>({
    path: `/monitor/operlog/export`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: false,
    ...params,
  });
export const sysOperLogPostExportSkipErrorHandler = (data: SysOperLogQueryBo, params: RequestParams = {}) =>
  request<any>({
    path: `/monitor/operlog/export`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: true,
    ...params,
  });

/**
 * @description 清空操作日志记录
 *
 * @tags SysOperlogService
 * @name sysOperLogPostClean
 * @request POST:/monitor/operlog/clean
 * @secure
 */
export const sysOperLogPostClean = (params: RequestParams = {}) =>
  request<RVoid>({
    path: `/monitor/operlog/clean`,
    method: 'POST',
    secure: true,
    skipErrorHandler: false,
    ...params,
  });
export const sysOperLogPostCleanSkipErrorHandler = (params: RequestParams = {}) =>
  request<RVoid>({
    path: `/monitor/operlog/clean`,
    method: 'POST',
    secure: true,
    skipErrorHandler: true,
    ...params,
  });

/**
 * @description 强退用户
 *
 * @tags SysUserOnlineService
 * @name sysUserOnlinePostForceLogout
 * @request POST:/monitor/online/forceLogout
 * @secure
 */
export const sysUserOnlinePostForceLogout = (
  query: {
    /** tokenId */
    tokenId: string;
  },
  params: RequestParams = {},
) =>
  request<RVoid>({
    path: `/monitor/online/forceLogout`,
    method: 'POST',
    query: query,
    secure: true,
    skipErrorHandler: false,
    ...params,
  });
export const sysUserOnlinePostForceLogoutSkipErrorHandler = (
  query: {
    /** tokenId */
    tokenId: string;
  },
  params: RequestParams = {},
) =>
  request<RVoid>({
    path: `/monitor/online/forceLogout`,
    method: 'POST',
    query: query,
    secure: true,
    skipErrorHandler: true,
    ...params,
  });

/**
 * @description 删除系统访问记录
 *
 * @tags SysLoginService
 * @name sysLogininforPostRemove
 * @request POST:/monitor/logininfor/remove
 * @secure
 */
export const sysLogininforPostRemove = (
  query: {
    /** 登录日志ID组 */
    infoIds: number[];
  },
  params: RequestParams = {},
) =>
  request<RVoid>({
    path: `/monitor/logininfor/remove`,
    method: 'POST',
    query: query,
    secure: true,
    skipErrorHandler: false,
    ...params,
  });
export const sysLogininforPostRemoveSkipErrorHandler = (
  query: {
    /** 登录日志ID组 */
    infoIds: number[];
  },
  params: RequestParams = {},
) =>
  request<RVoid>({
    path: `/monitor/logininfor/remove`,
    method: 'POST',
    query: query,
    secure: true,
    skipErrorHandler: true,
    ...params,
  });

/**
 * @description 查询系统访问记录列表
 *
 * @tags SysLoginService
 * @name sysLogininforPostList
 * @request POST:/monitor/logininfor/list
 * @secure
 */
export const sysLogininforPostList = (data: SysLogininforPageQueryBo, params: RequestParams = {}) =>
  request<TableDataInfo>({
    path: `/monitor/logininfor/list`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: false,
    ...params,
  });
export const sysLogininforPostListSkipErrorHandler = (data: SysLogininforPageQueryBo, params: RequestParams = {}) =>
  request<TableDataInfo>({
    path: `/monitor/logininfor/list`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: true,
    ...params,
  });

/**
 * @description 导出系统访问记录列表
 *
 * @tags SysLoginService
 * @name sysLogininforPostExport
 * @request POST:/monitor/logininfor/export
 * @secure
 */
export const sysLogininforPostExport = (data: SysLogininforQueryBo, params: RequestParams = {}) =>
  request<any>({
    path: `/monitor/logininfor/export`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: false,
    ...params,
  });
export const sysLogininforPostExportSkipErrorHandler = (data: SysLogininforQueryBo, params: RequestParams = {}) =>
  request<any>({
    path: `/monitor/logininfor/export`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: true,
    ...params,
  });

/**
 * @description 清空系统访问记录
 *
 * @tags SysLoginService
 * @name sysLogininforPostClean
 * @request POST:/monitor/logininfor/clean
 * @secure
 */
export const sysLogininforPostClean = (params: RequestParams = {}) =>
  request<RVoid>({
    path: `/monitor/logininfor/clean`,
    method: 'POST',
    secure: true,
    skipErrorHandler: false,
    ...params,
  });
export const sysLogininforPostCleanSkipErrorHandler = (params: RequestParams = {}) =>
  request<RVoid>({
    path: `/monitor/logininfor/clean`,
    method: 'POST',
    secure: true,
    skipErrorHandler: true,
    ...params,
  });

/**
 * @description 在线用户列表
 *
 * @tags SysUserOnlineService
 * @name sysUserOnlineGetList
 * @request GET:/monitor/online/list
 * @secure
 */
export const sysUserOnlineGetList = (
  query?: {
    /** ip地址 */
    ipaddr?: string;
    /** 用户名 */
    userName?: string;
  },
  params: RequestParams = {},
) =>
  request<TableDataInfo>({
    path: `/monitor/online/list`,
    method: 'GET',
    query: query,
    secure: true,
    skipErrorHandler: false,
    ...params,
  });
export const sysUserOnlineGetListSkipErrorHandler = (
  query?: {
    /** ip地址 */
    ipaddr?: string;
    /** 用户名 */
    userName?: string;
  },
  params: RequestParams = {},
) =>
  request<TableDataInfo>({
    path: `/monitor/online/list`,
    method: 'GET',
    query: query,
    secure: true,
    skipErrorHandler: true,
    ...params,
  });

/**
 * @description 账户解锁
 *
 * @tags SysLoginService
 * @name unlock
 * @summary 账户解锁
 * @request GET:/monitor/logininfor/unlock/{userName}
 * @secure
 */
export const unlock = (userName: string, params: RequestParams = {}) =>
  request<RVoid>({
    path: `/monitor/logininfor/unlock/${userName}`,
    method: 'GET',
    secure: true,
    skipErrorHandler: false,
    ...params,
  });
export const unlockSkipErrorHandler = (userName: string, params: RequestParams = {}) =>
  request<RVoid>({
    path: `/monitor/logininfor/unlock/${userName}`,
    method: 'GET',
    secure: true,
    skipErrorHandler: true,
    ...params,
  });

/**
 * @description 获取缓存监控详细信息
 *
 * @tags CacheService
 * @name cacheGetInfo
 * @request GET:/monitor/cache/info
 * @secure
 */
export const cacheGetInfo = (params: RequestParams = {}) =>
  request<RCacheInfoVo>({
    path: `/monitor/cache/info`,
    method: 'GET',
    secure: true,
    skipErrorHandler: false,
    ...params,
  });
export const cacheGetInfoSkipErrorHandler = (params: RequestParams = {}) =>
  request<RCacheInfoVo>({
    path: `/monitor/cache/info`,
    method: 'GET',
    secure: true,
    skipErrorHandler: true,
    ...params,
  });

/**
 * @description 获取值基于缓存名与KEY
 *
 * @tags CacheService
 * @name cacheGetCacheValue
 * @request GET:/monitor/cache/cacheValue/{cacheName}/{cacheKey}
 * @secure
 */
export const cacheGetCacheValue = (cacheName: string, cacheKey: string, params: RequestParams = {}) =>
  request<RSysCache>({
    path: `/monitor/cache/cacheValue/${cacheName}/${cacheKey}`,
    method: 'GET',
    secure: true,
    skipErrorHandler: false,
    ...params,
  });
export const cacheGetCacheValueSkipErrorHandler = (cacheName: string, cacheKey: string, params: RequestParams = {}) =>
  request<RSysCache>({
    path: `/monitor/cache/cacheValue/${cacheName}/${cacheKey}`,
    method: 'GET',
    secure: true,
    skipErrorHandler: true,
    ...params,
  });

/**
 * @description 获取缓存名称列表
 *
 * @tags CacheService
 * @name cacheGetCacheNames
 * @request GET:/monitor/cache/cacheNames
 * @secure
 */
export const cacheGetCacheNames = (params: RequestParams = {}) =>
  request<RListSysCache>({
    path: `/monitor/cache/cacheNames`,
    method: 'GET',
    secure: true,
    skipErrorHandler: false,
    ...params,
  });
export const cacheGetCacheNamesSkipErrorHandler = (params: RequestParams = {}) =>
  request<RListSysCache>({
    path: `/monitor/cache/cacheNames`,
    method: 'GET',
    secure: true,
    skipErrorHandler: true,
    ...params,
  });

/**
 * @description 获取KEYS基于缓存名
 *
 * @tags CacheService
 * @name cacheGetCacheKeys
 * @request GET:/monitor/cache/cacheKeys/{cacheName}
 * @secure
 */
export const cacheGetCacheKeys = (cacheName: string, params: RequestParams = {}) =>
  request<RCollectionString>({
    path: `/monitor/cache/cacheKeys/${cacheName}`,
    method: 'GET',
    secure: true,
    skipErrorHandler: false,
    ...params,
  });
export const cacheGetCacheKeysSkipErrorHandler = (cacheName: string, params: RequestParams = {}) =>
  request<RCollectionString>({
    path: `/monitor/cache/cacheKeys/${cacheName}`,
    method: 'GET',
    secure: true,
    skipErrorHandler: true,
    ...params,
  });

/**
 * @description 清空缓存名
 *
 * @tags CacheService
 * @name cacheDeleteClearCacheName
 * @request DELETE:/monitor/cache/clearCacheName/{cacheName}
 * @secure
 */
export const cacheDeleteClearCacheName = (cacheName: string, params: RequestParams = {}) =>
  request<RVoid>({
    path: `/monitor/cache/clearCacheName/${cacheName}`,
    method: 'DELETE',
    secure: true,
    skipErrorHandler: false,
    ...params,
  });
export const cacheDeleteClearCacheNameSkipErrorHandler = (cacheName: string, params: RequestParams = {}) =>
  request<RVoid>({
    path: `/monitor/cache/clearCacheName/${cacheName}`,
    method: 'DELETE',
    secure: true,
    skipErrorHandler: true,
    ...params,
  });

/**
 * @description 清空缓存KEY
 *
 * @tags CacheService
 * @name cacheDeleteClearCacheKey
 * @request DELETE:/monitor/cache/clearCacheKey/{cacheName}/{cacheKey}
 * @secure
 */
export const cacheDeleteClearCacheKey = (cacheName: string, cacheKey: string, params: RequestParams = {}) =>
  request<RVoid>({
    path: `/monitor/cache/clearCacheKey/${cacheName}/${cacheKey}`,
    method: 'DELETE',
    secure: true,
    skipErrorHandler: false,
    ...params,
  });
export const cacheDeleteClearCacheKeySkipErrorHandler = (
  cacheName: string,
  cacheKey: string,
  params: RequestParams = {},
) =>
  request<RVoid>({
    path: `/monitor/cache/clearCacheKey/${cacheName}/${cacheKey}`,
    method: 'DELETE',
    secure: true,
    skipErrorHandler: true,
    ...params,
  });

/**
 * @description 清空所有缓存
 *
 * @tags CacheService
 * @name cacheDeleteClearCacheAll
 * @request DELETE:/monitor/cache/clearCacheAll
 * @secure
 */
export const cacheDeleteClearCacheAll = (params: RequestParams = {}) =>
  request<RVoid>({
    path: `/monitor/cache/clearCacheAll`,
    method: 'DELETE',
    secure: true,
    skipErrorHandler: false,
    ...params,
  });
export const cacheDeleteClearCacheAllSkipErrorHandler = (params: RequestParams = {}) =>
  request<RVoid>({
    path: `/monitor/cache/clearCacheAll`,
    method: 'DELETE',
    secure: true,
    skipErrorHandler: true,
    ...params,
  });
