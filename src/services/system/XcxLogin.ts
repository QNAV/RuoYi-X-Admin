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

import { ResponseLoginVo } from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class XcxLogin<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags SysLoginService
   * @name SysLoginGetXcxLogin
   * @summary 小程序登录(示例)
   * @request GET:/xcxLogin
   * @secure
   */
  sysLoginGetXcxLogin = (
    query: {
      /** 小程序code */
      xcxCode: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<ResponseLoginVo, void>({
      path: `/xcxLogin`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    });
}
