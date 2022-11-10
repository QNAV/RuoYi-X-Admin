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

import { ResponseCaptchaImageVo } from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class CaptchaImage<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags CaptchaService
   * @name CaptchaGetGetCode
   * @summary 生成验证码
   * @request GET:/captchaImage
   * @secure
   */
  captchaGetGetCode = (params: RequestParams = {}) =>
    this.http.request<ResponseCaptchaImageVo, void>({
      path: `/captchaImage`,
      method: 'GET',
      secure: true,
      ...params,
    });
}
