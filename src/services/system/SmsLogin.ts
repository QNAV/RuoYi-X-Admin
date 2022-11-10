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

import { ResponseLoginVo, SmsLoginBo } from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class SmsLogin<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags SysLoginService
   * @name SysLoginPostSmsLogin
   * @summary 短信登录(示例)
   * @request POST:/smsLogin
   * @secure
   */
  sysLoginPostSmsLogin = (data: SmsLoginBo, params: RequestParams = {}) =>
    this.http.request<ResponseLoginVo, void>({
      path: `/smsLogin`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
