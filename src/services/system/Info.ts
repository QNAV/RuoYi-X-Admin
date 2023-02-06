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
import type { RUserInfoVo } from './data-contracts';

/**
 * @description 获取已登录用户信息
 *
 * @tags SysLoginService
 * @name sysLoginGetInfo
 * @request GET:/info
 * @secure
 */
export const sysLoginGetInfo = (params: RequestParams = {}) =>
  request<RUserInfoVo>({
    path: `/info`,
    method: 'GET',
    secure: true,
    skipErrorHandler: false,
    ...params,
  });
export const sysLoginGetInfoSkipErrorHandler = (params: RequestParams = {}) =>
  request<RUserInfoVo>({
    path: `/info`,
    method: 'GET',
    secure: true,
    skipErrorHandler: true,
    ...params,
  });
