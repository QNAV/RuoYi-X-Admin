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
import type { RLoginVo, UserNameLoginBo } from './data-contracts';

/**
 * @description 用户名登录方法
 *
 * @tags SysLoginService
 * @name sysLoginPostLogin
 * @request POST:/login
 * @secure
 */
export const sysLoginPostLogin = (data: UserNameLoginBo, params: RequestParams = {}) =>
  request<RLoginVo>({
    path: `/login`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: false,
    ...params,
  });
export const sysLoginPostLoginSkipErrorHandler = (data: UserNameLoginBo, params: RequestParams = {}) =>
  request<RLoginVo>({
    path: `/login`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: true,
    ...params,
  });
