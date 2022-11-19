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
  GenTablePageQuery,
  GenTableReq,
  ResponseGenInfoVo,
  ResponseMapStringString,
  ResponseVoid,
  TableDataInfoGenTable,
  TableDataInfoGenTableColumn,
} from './data-contracts';

/**
 * No description
 *
 * @tags GenService
 * @name genGetBatchGenCode
 * @summary 批量生成代码
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
    ...params,
  });
/**
 * No description
 *
 * @tags GenService
 * @name genGetColumnList
 * @summary 查询数据表字段列表
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
  request<TableDataInfoGenTableColumn>({
    path: `/tool/gen/column/list`,
    method: 'GET',
    query: query,
    secure: true,
    ...params,
  });
/**
 * No description
 *
 * @tags GenService
 * @name genPostDbList
 * @summary 查询数据库列表
 * @request POST:/tool/gen/db/list
 * @secure
 */
export const genPostDbList = (data: GenTablePageQuery, params: RequestParams = {}) =>
  request<TableDataInfoGenTable>({
    path: `/tool/gen/db/list`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    ...params,
  });
/**
 * No description
 *
 * @tags GenService
 * @name genGetDownload
 * @summary 生成代码（下载方式）
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
    ...params,
  });
/**
 * No description
 *
 * @tags GenService
 * @name genPostEdit
 * @summary 修改保存代码生成业务
 * @request POST:/tool/gen/edit
 * @secure
 */
export const genPostEdit = (data: GenTableReq, params: RequestParams = {}) =>
  request<ResponseVoid>({
    path: `/tool/gen/edit`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    ...params,
  });
/**
 * No description
 *
 * @tags GenService
 * @name genGetGenCode
 * @summary 生成代码（自定义路径）
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
  request<ResponseVoid>({
    path: `/tool/gen/genCode`,
    method: 'GET',
    query: query,
    secure: true,
    ...params,
  });
/**
 * No description
 *
 * @tags GenService
 * @name genPostImportTable
 * @summary 导入表结构（保存）
 * @request POST:/tool/gen/importTable
 * @secure
 */
export const genPostImportTable = (
  query: {
    /** 业务生成表名称组 */
    tables: string;
  },
  params: RequestParams = {},
) =>
  request<ResponseVoid>({
    path: `/tool/gen/importTable`,
    method: 'POST',
    query: query,
    secure: true,
    ...params,
  });
/**
 * No description
 *
 * @tags GenService
 * @name genGetInfo
 * @summary 获取代码生成业务信息
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
  request<ResponseGenInfoVo>({
    path: `/tool/gen/info`,
    method: 'GET',
    query: query,
    secure: true,
    ...params,
  });
/**
 * No description
 *
 * @tags GenService
 * @name genPostList
 * @summary 查询代码生成列表
 * @request POST:/tool/gen/list
 * @secure
 */
export const genPostList = (data: GenTablePageQuery, params: RequestParams = {}) =>
  request<TableDataInfoGenTable>({
    path: `/tool/gen/list`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    ...params,
  });
/**
 * No description
 *
 * @tags GenService
 * @name genGetPreview
 * @summary 预览代码
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
  request<ResponseMapStringString>({
    path: `/tool/gen/preview`,
    method: 'GET',
    query: query,
    secure: true,
    ...params,
  });
/**
 * No description
 *
 * @tags GenService
 * @name genPostRemove
 * @summary 删除代码生成
 * @request POST:/tool/gen/remove
 * @secure
 */
export const genPostRemove = (
  query: {
    /**
     * 代码生成表编号组
     * @format int64
     */
    tableIds: number;
  },
  params: RequestParams = {},
) =>
  request<ResponseVoid>({
    path: `/tool/gen/remove`,
    method: 'POST',
    query: query,
    secure: true,
    ...params,
  });
/**
 * No description
 *
 * @tags GenService
 * @name genGetSynchDb
 * @summary 同步数据库
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
  request<ResponseVoid>({
    path: `/tool/gen/synchDb`,
    method: 'GET',
    query: query,
    secure: true,
    ...params,
  });
