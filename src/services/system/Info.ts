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
import type { ResponseUserInfoVo } from './data-contracts';

/**
 * No description
 *
 * @tags SysLoginService
 * @name sysLoginGetInfo
 * @summary 获取已登录用户信息
 * @request GET:/info
 * @secure
 */
export const sysLoginGetInfo = (params: RequestParams = {}) =>
  request<ResponseUserInfoVo>({
    path: `/info`,
    method: 'GET',
    secure: true,
    ...params,
  });
