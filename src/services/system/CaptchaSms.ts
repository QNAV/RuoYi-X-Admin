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

export class CaptchaSms<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags CaptchaService
   * @name CaptchaGetSmsCaptcha
   * @summary 短信验证码
   * @request GET:/captchaSms
   * @secure
   */
  captchaGetSmsCaptcha = (
    query: {
      /** 用户手机号 */
      phoneNumber: string;
    },
    params: RequestParams = {},
  ) =>
    this.http.request<ResponseVoid, void>({
      path: `/captchaSms`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    });
}
