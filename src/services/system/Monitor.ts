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
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Monitor<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags CacheService
   * @name CacheGetInfo
   * @summary 获取缓存监控详细信息
   * @request GET:/monitor/cache/info
   * @secure
   */
  cacheGetInfo = (params: RequestParams = {}) =>
    this.http.request<ResponseCacheInfoVo, void>({
      path: `/monitor/cache/info`,
      method: 'GET',
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags SysLoginService
   * @name SysLogininforPostClean
   * @summary 清空系统访问记录
   * @request POST:/monitor/logininfor/clean
   * @secure
   */
  sysLogininforPostClean = (params: RequestParams = {}) =>
    this.http.request<ResponseVoid, void>({
      path: `/monitor/logininfor/clean`,
      method: 'POST',
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags SysLoginService
   * @name SysLogininforPostExport
   * @summary 导出系统访问记录列表
   * @request POST:/monitor/logininfor/export
   * @secure
   */
  sysLogininforPostExport = (data: SysLogininforQueryBo, params: RequestParams = {}) =>
    this.http.request<void, void>({
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
   * @name SysLogininforPostList
   * @summary 查询系统访问记录列表
   * @request POST:/monitor/logininfor/list
   * @secure
   */
  sysLogininforPostList = (data: SysLogininforPageQueryBo, params: RequestParams = {}) =>
    this.http.request<TableDataInfoSysLogininforVo, void>({
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
   * @name SysLogininforPostRemove
   * @summary 删除系统访问记录
   * @request POST:/monitor/logininfor/remove
   * @secure
   */
  sysLogininforPostRemove = (
    query: {
      /**
       * 登录日志ID组
       * @format int64
       */
      infoIds: number;
    },
    params: RequestParams = {},
  ) =>
    this.http.request<ResponseVoid, void>({
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
   * @name SysOperLogPostClean
   * @summary 清空操作日志记录
   * @request POST:/monitor/operlog/clean
   * @secure
   */
  sysOperLogPostClean = (params: RequestParams = {}) =>
    this.http.request<ResponseVoid, void>({
      path: `/monitor/operlog/clean`,
      method: 'POST',
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags SysOperlogService
   * @name SysOperLogPostExport
   * @summary 导出操作日志记录列表
   * @request POST:/monitor/operlog/export
   * @secure
   */
  sysOperLogPostExport = (data: SysOperLogQueryBo, params: RequestParams = {}) =>
    this.http.request<void, void>({
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
   * @name SysOperLogPostList
   * @summary 查询操作日志记录列表
   * @request POST:/monitor/operlog/list
   * @secure
   */
  sysOperLogPostList = (data: SysOperLogPageQueryBo, params: RequestParams = {}) =>
    this.http.request<TableDataInfoSysOperLogVo, void>({
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
   * @name SysOperLogPostRemove
   * @summary 删除操作日志记录
   * @request POST:/monitor/operlog/remove
   * @secure
   */
  sysOperLogPostRemove = (
    query: {
      /**
       * 操作日志ID组
       * @format int64
       */
      operIds: number;
    },
    params: RequestParams = {},
  ) =>
    this.http.request<ResponseVoid, void>({
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
   * @name SysUserOnlinePostForceLogout
   * @summary 强退用户
   * @request POST:/monitor/online/forceLogout
   * @secure
   */
  sysUserOnlinePostForceLogout = (
    query: {
      /** tokenId */
      tokenId: string;
    },
    params: RequestParams = {},
  ) =>
    this.http.request<ResponseVoid, void>({
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
   * @name SysUserOnlineGetList
   * @summary 在线用户列表
   * @request GET:/monitor/online/list
   * @secure
   */
  sysUserOnlineGetList = (
    query?: {
      /** ip地址 */
      ipaddr?: string;
      /** 用户名 */
      userName?: string;
    },
    params: RequestParams = {},
  ) =>
    this.http.request<TableDataInfoSysUserOnlineVo, void>({
      path: `/monitor/online/list`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    });
}
