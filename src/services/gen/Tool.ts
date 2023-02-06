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
import type { GenTable, GenTablePageQuery, RGenInfoVo, RMapStringString, RVoid, TableDataInfo } from './data-contracts';

/**
 * @description 删除代码生成
 *
 * @tags GenService
 * @name genPostRemove
 * @request POST:/tool/gen/remove
 * @secure
 */
export const genPostRemove = (
  query: {
    /** 代码生成表编号组 */
    tableIds: number[];
  },
  params: RequestParams = {},
) =>
  request<RVoid>({
    path: `/tool/gen/remove`,
    method: 'POST',
    query: query,
    secure: true,
    skipErrorHandler: false,
    ...params,
  });
export const genPostRemoveSkipErrorHandler = (
  query: {
    /** 代码生成表编号组 */
    tableIds: number[];
  },
  params: RequestParams = {},
) =>
  request<RVoid>({
    path: `/tool/gen/remove`,
    method: 'POST',
    query: query,
    secure: true,
    skipErrorHandler: true,
    ...params,
  });

/**
 * @description 查询代码生成列表
 *
 * @tags GenService
 * @name genPostList
 * @request POST:/tool/gen/list
 * @secure
 */
export const genPostList = (data: GenTablePageQuery, params: RequestParams = {}) =>
  request<TableDataInfo>({
    path: `/tool/gen/list`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: false,
    ...params,
  });
export const genPostListSkipErrorHandler = (data: GenTablePageQuery, params: RequestParams = {}) =>
  request<TableDataInfo>({
    path: `/tool/gen/list`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: true,
    ...params,
  });

/**
 * @description 导入表结构（保存）
 *
 * @tags GenService
 * @name genPostImportTable
 * @request POST:/tool/gen/importTable
 * @secure
 */
export const genPostImportTable = (
  query: {
    /** 业务生成表名称组 */
    tables: string[];
  },
  params: RequestParams = {},
) =>
  request<RVoid>({
    path: `/tool/gen/importTable`,
    method: 'POST',
    query: query,
    secure: true,
    skipErrorHandler: false,
    ...params,
  });
export const genPostImportTableSkipErrorHandler = (
  query: {
    /** 业务生成表名称组 */
    tables: string[];
  },
  params: RequestParams = {},
) =>
  request<RVoid>({
    path: `/tool/gen/importTable`,
    method: 'POST',
    query: query,
    secure: true,
    skipErrorHandler: true,
    ...params,
  });

/**
 * @description 修改保存代码生成业务
 *
 * @tags GenService
 * @name genPostEdit
 * @request POST:/tool/gen/edit
 * @secure
 */
export const genPostEdit = (data: GenTable, params: RequestParams = {}) =>
  request<RVoid>({
    path: `/tool/gen/edit`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: false,
    ...params,
  });
export const genPostEditSkipErrorHandler = (data: GenTable, params: RequestParams = {}) =>
  request<RVoid>({
    path: `/tool/gen/edit`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: true,
    ...params,
  });

/**
 * @description 查询数据库列表
 *
 * @tags GenService
 * @name genPostDbList
 * @request POST:/tool/gen/db/list
 * @secure
 */
export const genPostDbList = (data: GenTablePageQuery, params: RequestParams = {}) =>
  request<TableDataInfo>({
    path: `/tool/gen/db/list`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: false,
    ...params,
  });
export const genPostDbListSkipErrorHandler = (data: GenTablePageQuery, params: RequestParams = {}) =>
  request<TableDataInfo>({
    path: `/tool/gen/db/list`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: true,
    ...params,
  });

/**
 * @description 同步数据库
 *
 * @tags GenService
 * @name genGetSynchDb
 * @request GET:/tool/gen/synchDb
 * @secure
 */
export const genGetSynchDb = (
  query: {
    /** 业务生成表名称 */
    tableName: string;
  },
  params: RequestParams = {},
) =>
  request<RVoid>({
    path: `/tool/gen/synchDb`,
    method: 'GET',
    query: query,
    secure: true,
    skipErrorHandler: false,
    ...params,
  });
export const genGetSynchDbSkipErrorHandler = (
  query: {
    /** 业务生成表名称 */
    tableName: string;
  },
  params: RequestParams = {},
) =>
  request<RVoid>({
    path: `/tool/gen/synchDb`,
    method: 'GET',
    query: query,
    secure: true,
    skipErrorHandler: true,
    ...params,
  });

/**
 * @description 预览代码
 *
 * @tags GenService
 * @name genGetPreview
 * @request GET:/tool/gen/preview
 * @secure
 */
export const genGetPreview = (
  query: {
    /**
     * 代码生成表编号
     * @format int64
     */
    tableId: number;
  },
  params: RequestParams = {},
) =>
  request<RMapStringString>({
    path: `/tool/gen/preview`,
    method: 'GET',
    query: query,
    secure: true,
    skipErrorHandler: false,
    ...params,
  });
export const genGetPreviewSkipErrorHandler = (
  query: {
    /**
     * 代码生成表编号
     * @format int64
     */
    tableId: number;
  },
  params: RequestParams = {},
) =>
  request<RMapStringString>({
    path: `/tool/gen/preview`,
    method: 'GET',
    query: query,
    secure: true,
    skipErrorHandler: true,
    ...params,
  });

/**
 * @description 获取代码生成业务信息
 *
 * @tags GenService
 * @name genGetInfo
 * @request GET:/tool/gen/info
 * @secure
 */
export const genGetInfo = (
  query: {
    /**
     * 生成表编号
     * @format int64
     */
    tableId: number;
  },
  params: RequestParams = {},
) =>
  request<RGenInfoVo>({
    path: `/tool/gen/info`,
    method: 'GET',
    query: query,
    secure: true,
    skipErrorHandler: false,
    ...params,
  });
export const genGetInfoSkipErrorHandler = (
  query: {
    /**
     * 生成表编号
     * @format int64
     */
    tableId: number;
  },
  params: RequestParams = {},
) =>
  request<RGenInfoVo>({
    path: `/tool/gen/info`,
    method: 'GET',
    query: query,
    secure: true,
    skipErrorHandler: true,
    ...params,
  });

/**
 * @description 生成代码（自定义路径）
 *
 * @tags GenService
 * @name genGetGenCode
 * @request GET:/tool/gen/genCode
 * @secure
 */
export const genGetGenCode = (
  query: {
    /** 业务生成表名称 */
    tableName: string;
  },
  params: RequestParams = {},
) =>
  request<RVoid>({
    path: `/tool/gen/genCode`,
    method: 'GET',
    query: query,
    secure: true,
    skipErrorHandler: false,
    ...params,
  });
export const genGetGenCodeSkipErrorHandler = (
  query: {
    /** 业务生成表名称 */
    tableName: string;
  },
  params: RequestParams = {},
) =>
  request<RVoid>({
    path: `/tool/gen/genCode`,
    method: 'GET',
    query: query,
    secure: true,
    skipErrorHandler: true,
    ...params,
  });

/**
 * @description 生成代码（下载方式）
 *
 * @tags GenService
 * @name genGetDownload
 * @request GET:/tool/gen/download
 * @secure
 */
export const genGetDownload = (
  query: {
    /** 业务生成表名称 */
    tableName: string;
  },
  params: RequestParams = {},
) =>
  request<any>({
    path: `/tool/gen/download`,
    method: 'GET',
    query: query,
    secure: true,
    skipErrorHandler: false,
    ...params,
  });
export const genGetDownloadSkipErrorHandler = (
  query: {
    /** 业务生成表名称 */
    tableName: string;
  },
  params: RequestParams = {},
) =>
  request<any>({
    path: `/tool/gen/download`,
    method: 'GET',
    query: query,
    secure: true,
    skipErrorHandler: true,
    ...params,
  });

/**
 * @description 查询数据表字段列表
 *
 * @tags GenService
 * @name genGetColumnList
 * @request GET:/tool/gen/column/list
 * @secure
 */
export const genGetColumnList = (
  query: {
    /**
     * 生成业务表编号
     * @format int64
     */
    tableId: number;
  },
  params: RequestParams = {},
) =>
  request<TableDataInfo>({
    path: `/tool/gen/column/list`,
    method: 'GET',
    query: query,
    secure: true,
    skipErrorHandler: false,
    ...params,
  });
export const genGetColumnListSkipErrorHandler = (
  query: {
    /**
     * 生成业务表编号
     * @format int64
     */
    tableId: number;
  },
  params: RequestParams = {},
) =>
  request<TableDataInfo>({
    path: `/tool/gen/column/list`,
    method: 'GET',
    query: query,
    secure: true,
    skipErrorHandler: true,
    ...params,
  });

/**
 * @description 批量生成代码
 *
 * @tags GenService
 * @name genGetBatchGenCode
 * @request GET:/tool/gen/batchGenCode
 * @secure
 */
export const genGetBatchGenCode = (
  query: {
    /** 业务生成表名称，多个表用,分隔 */
    tables: string;
  },
  params: RequestParams = {},
) =>
  request<any>({
    path: `/tool/gen/batchGenCode`,
    method: 'GET',
    query: query,
    secure: true,
    skipErrorHandler: false,
    ...params,
  });
export const genGetBatchGenCodeSkipErrorHandler = (
  query: {
    /** 业务生成表名称，多个表用,分隔 */
    tables: string;
  },
  params: RequestParams = {},
) =>
  request<any>({
    path: `/tool/gen/batchGenCode`,
    method: 'GET',
    query: query,
    secure: true,
    skipErrorHandler: true,
    ...params,
  });
