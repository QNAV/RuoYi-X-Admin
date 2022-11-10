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

import { ResponseUserInfoVo } from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class Info<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags SysLoginService
   * @name SysLoginGetInfo
   * @summary 获取已登录用户信息
   * @request GET:/info
   * @secure
   */
  sysLoginGetInfo = (params: RequestParams = {}) =>
    this.http.request<ResponseUserInfoVo, void>({
      path: `/info`,
      method: 'GET',
      secure: true,
      ...params,
    });
}
