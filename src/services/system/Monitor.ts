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
  ResponseCacheInfoVo,
  ResponseVoid,
  SysLogininforPageQueryBo,
  SysLogininforQueryBo,
  SysOperLogPageQueryBo,
  SysOperLogQueryBo,
  TableDataInfoSysLogininforVo,
  TableDataInfoSysOperLogVo,
  TableDataInfoSysUserOnlineVo,
} from './data-contracts';

/**
 * No description
 *
 * @tags CacheService
 * @name cacheGetInfo
 * @summary 获取缓存监控详细信息
 * @request GET:/monitor/cache/info
 * @secure
 */
export const cacheGetInfo = (params: RequestParams = {}) =>
  request<ResponseCacheInfoVo>({
    path: `/monitor/cache/info`,
    method: 'GET',
    secure: true,
    ...params,
  });
/**
 * No description
 *
 * @tags SysLoginService
 * @name sysLogininforPostClean
 * @summary 清空系统访问记录
 * @request POST:/monitor/logininfor/clean
 * @secure
 */
export const sysLogininforPostClean = (params: RequestParams = {}) =>
  request<ResponseVoid>({
    path: `/monitor/logininfor/clean`,
    method: 'POST',
    secure: true,
    ...params,
  });
/**
 * No description
 *
 * @tags SysLoginService
 * @name sysLogininforPostExport
 * @summary 导出系统访问记录列表
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
    ...params,
  });
/**
 * No description
 *
 * @tags SysLoginService
 * @name sysLogininforPostList
 * @summary 查询系统访问记录列表
 * @request POST:/monitor/logininfor/list
 * @secure
 */
export const sysLogininforPostList = (data: SysLogininforPageQueryBo, params: RequestParams = {}) =>
  request<TableDataInfoSysLogininforVo>({
    path: `/monitor/logininfor/list`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    ...params,
  });
/**
 * No description
 *
 * @tags SysLoginService
 * @name sysLogininforPostRemove
 * @summary 删除系统访问记录
 * @request POST:/monitor/logininfor/remove
 * @secure
 */
export const sysLogininforPostRemove = (
  query: {
    /**
     * 登录日志ID组
     * @format int64
     */
    infoIds: number;
  },
  params: RequestParams = {},
) =>
  request<ResponseVoid>({
    path: `/monitor/logininfor/remove`,
    method: 'POST',
    query: query,
    secure: true,
    ...params,
  });
/**
 * No description
 *
 * @tags SysOperlogService
 * @name sysOperLogPostClean
 * @summary 清空操作日志记录
 * @request POST:/monitor/operlog/clean
 * @secure
 */
export const sysOperLogPostClean = (params: RequestParams = {}) =>
  request<ResponseVoid>({
    path: `/monitor/operlog/clean`,
    method: 'POST',
    secure: true,
    ...params,
  });
/**
 * No description
 *
 * @tags SysOperlogService
 * @name sysOperLogPostExport
 * @summary 导出操作日志记录列表
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
    ...params,
  });
/**
 * No description
 *
 * @tags SysOperlogService
 * @name sysOperLogPostList
 * @summary 查询操作日志记录列表
 * @request POST:/monitor/operlog/list
 * @secure
 */
export const sysOperLogPostList = (data: SysOperLogPageQueryBo, params: RequestParams = {}) =>
  request<TableDataInfoSysOperLogVo>({
    path: `/monitor/operlog/list`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    ...params,
  });
/**
 * No description
 *
 * @tags SysOperlogService
 * @name sysOperLogPostRemove
 * @summary 删除操作日志记录
 * @request POST:/monitor/operlog/remove
 * @secure
 */
export const sysOperLogPostRemove = (
  query: {
    /**
     * 操作日志ID组
     * @format int64
     */
    operIds: number;
  },
  params: RequestParams = {},
) =>
  request<ResponseVoid>({
    path: `/monitor/operlog/remove`,
    method: 'POST',
    query: query,
    secure: true,
    ...params,
  });
/**
 * No description
 *
 * @tags SysUserOnlineService
 * @name sysUserOnlinePostForceLogout
 * @summary 强退用户
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
  request<ResponseVoid>({
    path: `/monitor/online/forceLogout`,
    method: 'POST',
    query: query,
    secure: true,
    ...params,
  });
/**
 * No description
 *
 * @tags SysUserOnlineService
 * @name sysUserOnlineGetList
 * @summary 在线用户列表
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
  request<TableDataInfoSysUserOnlineVo>({
    path: `/monitor/online/list`,
    method: 'GET',
    query: query,
    secure: true,
    ...params,
  });
