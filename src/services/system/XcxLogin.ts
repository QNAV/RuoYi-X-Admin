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
import type { RLoginVo } from './data-contracts';

/**
 * @description 小程序登录(示例)
 *
 * @tags SysLoginService
 * @name sysLoginGetXcxLogin
 * @request GET:/xcxLogin
 * @secure
 */
export const sysLoginGetXcxLogin = (
  query: {
    /** 小程序code */
    xcxCode: string;
  },
  params: RequestParams = {},
) =>
  request<RLoginVo>({
    path: `/xcxLogin`,
    method: 'GET',
    query: query,
    secure: true,
    skipErrorHandler: false,
    ...params,
  });
export const sysLoginGetXcxLoginSkipErrorHandler = (
  query: {
    /** 小程序code */
    xcxCode: string;
  },
  params: RequestParams = {},
) =>
  request<RLoginVo>({
    path: `/xcxLogin`,
    method: 'GET',
    query: query,
    secure: true,
    skipErrorHandler: true,
    ...params,
  });
