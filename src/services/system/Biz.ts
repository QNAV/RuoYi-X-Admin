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
  BizUserAddBo,
  BizUserEditBo,
  BizUserPageQueryBo,
  BizUserQueryBo,
  RBizUserVo,
  RVoid,
  TableDataInfoBizUserVo,
} from './data-contracts';

/**
 * @description 删除业务用户信息
 *
 * @tags BizUserService
 * @name bizUserPostRemove
 * @request POST:/biz/user/remove
 * @secure
 */
export const bizUserPostRemove = (
  query: {
    /** 主键串 */
    userIds: number[];
  },
  params: RequestParams = {},
) =>
  request<RVoid>({
    path: `/biz/user/remove`,
    method: 'POST',
    query: query,
    secure: true,
    skipErrorHandler: false,
    ...params,
  });
export const bizUserPostRemoveSkipErrorHandler = (
  query: {
    /** 主键串 */
    userIds: number[];
  },
  params: RequestParams = {},
) =>
  request<RVoid>({
    path: `/biz/user/remove`,
    method: 'POST',
    query: query,
    secure: true,
    skipErrorHandler: true,
    ...params,
  });

/**
 * @description 查询业务用户信息列表
 *
 * @tags BizUserService
 * @name bizUserPostList
 * @request POST:/biz/user/list
 * @secure
 */
export const bizUserPostList = (data: BizUserPageQueryBo, params: RequestParams = {}) =>
  request<TableDataInfoBizUserVo>({
    path: `/biz/user/list`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: false,
    ...params,
  });
export const bizUserPostListSkipErrorHandler = (data: BizUserPageQueryBo, params: RequestParams = {}) =>
  request<TableDataInfoBizUserVo>({
    path: `/biz/user/list`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: true,
    ...params,
  });

/**
 * @description 导出业务用户信息列表
 *
 * @tags BizUserService
 * @name bizUserPostExport
 * @request POST:/biz/user/export
 * @secure
 */
export const bizUserPostExport = (data: BizUserQueryBo, params: RequestParams = {}) =>
  request<any>({
    path: `/biz/user/export`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: false,
    ...params,
  });
export const bizUserPostExportSkipErrorHandler = (data: BizUserQueryBo, params: RequestParams = {}) =>
  request<any>({
    path: `/biz/user/export`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: true,
    ...params,
  });

/**
 * @description 修改业务用户信息
 *
 * @tags BizUserService
 * @name bizUserPostEdit
 * @request POST:/biz/user/edit
 * @secure
 */
export const bizUserPostEdit = (data: BizUserEditBo, params: RequestParams = {}) =>
  request<RVoid>({
    path: `/biz/user/edit`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: false,
    ...params,
  });
export const bizUserPostEditSkipErrorHandler = (data: BizUserEditBo, params: RequestParams = {}) =>
  request<RVoid>({
    path: `/biz/user/edit`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: true,
    ...params,
  });

/**
 * @description 新增业务用户信息
 *
 * @tags BizUserService
 * @name bizUserPostAdd
 * @request POST:/biz/user/add
 * @secure
 */
export const bizUserPostAdd = (data: BizUserAddBo, params: RequestParams = {}) =>
  request<RVoid>({
    path: `/biz/user/add`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: false,
    ...params,
  });
export const bizUserPostAddSkipErrorHandler = (data: BizUserAddBo, params: RequestParams = {}) =>
  request<RVoid>({
    path: `/biz/user/add`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: true,
    ...params,
  });

/**
 * @description 获取业务用户信息详细信息
 *
 * @tags BizUserService
 * @name bizUserGetInfo
 * @request GET:/biz/user/info
 * @secure
 */
export const bizUserGetInfo = (
  query: {
    /**
     * 主键
     * @format int64
     */
    userId: number;
  },
  params: RequestParams = {},
) =>
  request<RBizUserVo>({
    path: `/biz/user/info`,
    method: 'GET',
    query: query,
    secure: true,
    skipErrorHandler: false,
    ...params,
  });
export const bizUserGetInfoSkipErrorHandler = (
  query: {
    /**
     * 主键
     * @format int64
     */
    userId: number;
  },
  params: RequestParams = {},
) =>
  request<RBizUserVo>({
    path: `/biz/user/info`,
    method: 'GET',
    query: query,
    secure: true,
    skipErrorHandler: true,
    ...params,
  });
