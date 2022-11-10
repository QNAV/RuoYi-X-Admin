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

import { ResponseVoid } from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class Logout<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags SysLoginService
   * @name SysLoginPostLogout
   * @summary 登出方法
   * @request POST:/logout
   * @secure
   */
  sysLoginPostLogout = (params: RequestParams = {}) =>
    this.request<ResponseVoid, void>({
      path: `/logout`,
      method: 'POST',
      secure: true,
      ...params,
    });
}
