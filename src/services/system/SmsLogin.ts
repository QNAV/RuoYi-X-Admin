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
import type { RLoginVo, SmsLoginBo } from './data-contracts';

/**
 * @description 短信登录(示例)
 *
 * @tags SysLoginService
 * @name sysLoginPostSmsLogin
 * @request POST:/smsLogin
 * @secure
 */
export const sysLoginPostSmsLogin = (data: SmsLoginBo, params: RequestParams = {}) =>
  request<RLoginVo>({
    path: `/smsLogin`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: false,
    ...params,
  });
export const sysLoginPostSmsLoginSkipErrorHandler = (data: SmsLoginBo, params: RequestParams = {}) =>
  request<RLoginVo>({
    path: `/smsLogin`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: true,
    ...params,
  });
