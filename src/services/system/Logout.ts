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
 * @description 登出方法
 *
 * @tags SysLoginService
 * @name sysLoginPostLogout
 * @request POST:/logout
 * @secure
 */
export const sysLoginPostLogout = (params: RequestParams = {}) =>
  request<RVoid>({
    path: `/logout`,
    method: 'POST',
    secure: true,
    skipErrorHandler: false,
    ...params,
  });
export const sysLoginPostLogoutSkipErrorHandler = (params: RequestParams = {}) =>
  request<RVoid>({
    path: `/logout`,
    method: 'POST',
    secure: true,
    skipErrorHandler: true,
    ...params,
  });
