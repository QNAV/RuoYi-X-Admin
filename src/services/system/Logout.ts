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
 * @tags SysLoginService
 * @name sysLoginPostLogout
 * @summary 登出方法
 * @request POST:/logout
 * @secure
 */
export const sysLoginPostLogout = (params: RequestParams = {}) =>
  request<ResponseVoid>({
    path: `/logout`,
    method: 'POST',
    secure: true,
    skipErrorHandler: false,
    ...params,
  });
export const sysLoginPostLogoutSkipErrorHandler = (params: RequestParams = {}) =>
  request<ResponseVoid>({
    path: `/logout`,
    method: 'POST',
    secure: true,
    skipErrorHandler: true,
    ...params,
  });
