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
  BizUserAddBo,
  BizUserEditBo,
  BizUserPageQueryBo,
  BizUserQueryBo,
  ResponseBizUserVo,
  ResponseVoid,
  TableDataInfoBizUserVo,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Biz<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags BizUserService
   * @name BizUserPostAdd
   * @summary 新增业务用户信息
   * @request POST:/biz/user/add
   * @secure
   */
  bizUserPostAdd = (data: BizUserAddBo, params: RequestParams = {}) =>
    this.request<ResponseVoid, void>({
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
   * @name BizUserPostEdit
   * @summary 修改业务用户信息
   * @request POST:/biz/user/edit
   * @secure
   */
  bizUserPostEdit = (data: BizUserEditBo, params: RequestParams = {}) =>
    this.request<ResponseVoid, void>({
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
   * @name BizUserPostExport
   * @summary 导出业务用户信息列表
   * @request POST:/biz/user/export
   * @secure
   */
  bizUserPostExport = (data: BizUserQueryBo, params: RequestParams = {}) =>
    this.request<void, void>({
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
   * @name BizUserGetInfo
   * @summary 获取业务用户信息详细信息
   * @request GET:/biz/user/info
   * @secure
   */
  bizUserGetInfo = (
    query: {
      /**
       * 主键
       * @format int64
       */
      主键: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ResponseBizUserVo, void>({
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
   * @name BizUserPostList
   * @summary 查询业务用户信息列表
   * @request POST:/biz/user/list
   * @secure
   */
  bizUserPostList = (data: BizUserPageQueryBo, params: RequestParams = {}) =>
    this.request<TableDataInfoBizUserVo, void>({
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
   * @name BizUserPostRemove
   * @summary 删除业务用户信息
   * @request POST:/biz/user/remove
   * @secure
   */
  bizUserPostRemove = (
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
      path: `/biz/user/remove`,
      method: 'POST',
      query: query,
      secure: true,
      ...params,
    });
}
