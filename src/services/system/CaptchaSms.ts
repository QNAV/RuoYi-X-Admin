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
import type { ResponseVoid } from './data-contracts';

/**
 * No description
 *
 * @tags CaptchaService
 * @name captchaGetSmsCaptcha
 * @summary 短信验证码
 * @request GET:/captchaSms
 * @secure
 */
export const captchaGetSmsCaptcha = (
  query: {
    /** 用户手机号 */
    phoneNumber: string;
  },
  params: RequestParams = {},
) =>
  request<ResponseVoid>({
    path: `/captchaSms`,
    method: 'GET',
    query: query,
    secure: true,
    ...params,
  });
