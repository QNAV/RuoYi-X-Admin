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
import type { ResponseLoginVo } from './data-contracts';

/**
 * No description
 *
 * @tags SysLoginService
 * @name sysLoginGetXcxLogin
 * @summary 小程序登录(示例)
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
  request<ResponseLoginVo>({
    path: `/xcxLogin`,
    method: 'GET',
    query: query,
    secure: true,
    ...params,
  });
