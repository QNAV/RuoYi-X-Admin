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
import { ContentType, request } from '@/utils';
import type { ResponseLoginVo, SmsLoginBo } from './data-contracts';

/**
 * No description
 *
 * @tags SysLoginService
 * @name sysLoginPostSmsLogin
 * @summary 短信登录(示例)
 * @request POST:/smsLogin
 * @secure
 */
export const sysLoginPostSmsLogin = (data: SmsLoginBo, params: RequestParams = {}) =>
  request<ResponseLoginVo>({
    path: `/smsLogin`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    ...params,
  });
