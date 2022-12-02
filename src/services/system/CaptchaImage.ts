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
import { request } from '@/utils';
import type { ResponseCaptchaImageVo } from './data-contracts';

/**
 * No description
 *
 * @tags CaptchaService
 * @name captchaGetGetCode
 * @summary 生成验证码
 * @request GET:/captchaImage
 * @secure
 */
export const captchaGetGetCode = (params: RequestParams = {}) =>
  request<ResponseCaptchaImageVo>({
    path: `/captchaImage`,
    method: 'GET',
    secure: true,
    skipErrorHandler: false,
    ...params,
  });
export const captchaGetGetCodeSkipErrorHandler = (params: RequestParams = {}) =>
  request<ResponseCaptchaImageVo>({
    path: `/captchaImage`,
    method: 'GET',
    secure: true,
    skipErrorHandler: true,
    ...params,
  });
