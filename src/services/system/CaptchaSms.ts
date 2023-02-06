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
import type { RVoid } from './data-contracts';

/**
 * @description 短信验证码
 *
 * @tags CaptchaService
 * @name captchaGetSmsCaptcha
 * @request GET:/captchaSms
 * @secure
 */
export const captchaGetSmsCaptcha = (
  query: {
    /** 用户手机号 */
    用户手机号: string;
  },
  params: RequestParams = {},
) =>
  request<RVoid>({
    path: `/captchaSms`,
    method: 'GET',
    query: query,
    secure: true,
    skipErrorHandler: false,
    ...params,
  });
export const captchaGetSmsCaptchaSkipErrorHandler = (
  query: {
    /** 用户手机号 */
    用户手机号: string;
  },
  params: RequestParams = {},
) =>
  request<RVoid>({
    path: `/captchaSms`,
    method: 'GET',
    query: query,
    secure: true,
    skipErrorHandler: true,
    ...params,
  });
