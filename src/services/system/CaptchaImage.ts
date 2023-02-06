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
import type { RCaptchaImageVo } from './data-contracts';

/**
 * @description 生成验证码
 *
 * @tags CaptchaService
 * @name captchaGetGetCode
 * @request GET:/captchaImage
 * @secure
 */
export const captchaGetGetCode = (params: RequestParams = {}) =>
  request<RCaptchaImageVo>({
    path: `/captchaImage`,
    method: 'GET',
    secure: true,
    skipErrorHandler: false,
    ...params,
  });
export const captchaGetGetCodeSkipErrorHandler = (params: RequestParams = {}) =>
  request<RCaptchaImageVo>({
    path: `/captchaImage`,
    method: 'GET',
    secure: true,
    skipErrorHandler: true,
    ...params,
  });
