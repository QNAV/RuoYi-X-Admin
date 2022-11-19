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
  ResponseBizUserVo,
  ResponseVoid,
  TableDataInfoBizUserVo,
} from './data-contracts';

/**
 * No description
 *
 * @tags BizUserService
 * @name bizUserPostAdd
 * @summary 新增业务用户信息
 * @request POST:/biz/user/add
 * @secure
 */
export const bizUserPostAdd = (data: BizUserAddBo, params: RequestParams = {}) =>
  request<ResponseVoid>({
    path: `/biz/user/add`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    ...params,
  });
/**
 * No description
 *
 * @tags BizUserService
 * @name bizUserPostEdit
 * @summary 修改业务用户信息
 * @request POST:/biz/user/edit
 * @secure
 */
export const bizUserPostEdit = (data: BizUserEditBo, params: RequestParams = {}) =>
  request<ResponseVoid>({
    path: `/biz/user/edit`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    ...params,
  });
/**
 * No description
 *
 * @tags BizUserService
 * @name bizUserPostExport
 * @summary 导出业务用户信息列表
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
    ...params,
  });
/**
 * No description
 *
 * @tags BizUserService
 * @name bizUserGetInfo
 * @summary 获取业务用户信息详细信息
 * @request GET:/biz/user/info
 * @secure
 */
export const bizUserGetInfo = (
  query: {
    /**
     * 主键
     * @format int64
     */
    主键: number;
  },
  params: RequestParams = {},
) =>
  request<ResponseBizUserVo>({
    path: `/biz/user/info`,
    method: 'GET',
    query: query,
    secure: true,
    ...params,
  });
/**
 * No description
 *
 * @tags BizUserService
 * @name bizUserPostList
 * @summary 查询业务用户信息列表
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
    ...params,
  });
/**
 * No description
 *
 * @tags BizUserService
 * @name bizUserPostRemove
 * @summary 删除业务用户信息
 * @request POST:/biz/user/remove
 * @secure
 */
export const bizUserPostRemove = (
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
    path: `/biz/user/remove`,
    method: 'POST',
    query: query,
    secure: true,
    ...params,
  });
