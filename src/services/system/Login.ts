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

import { ResponseLoginVo, UserNameLoginBo } from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Login<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags SysLoginService
   * @name SysLoginPostLogin
   * @summary 用户名登录方法
   * @request POST:/login
   * @secure
   */
  sysLoginPostLogin = (data: UserNameLoginBo, params: RequestParams = {}) =>
    this.http.request<ResponseLoginVo, void>({
      path: `/login`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
