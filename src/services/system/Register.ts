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

import { ResponseVoid, UserNameRegisterBo } from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Register<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags SysRegisterService
   * @name SysRegisterPostRegister
   * @summary 用户注册
   * @request POST:/register
   * @secure
   */
  sysRegisterPostRegister = (data: UserNameRegisterBo, params: RequestParams = {}) =>
    this.http.request<ResponseVoid, void>({
      path: `/register`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
