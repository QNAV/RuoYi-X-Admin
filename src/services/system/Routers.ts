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
import type { RListRouterVo } from './data-contracts';

/**
 * @description 获取菜单路由信息
 *
 * @tags SysLoginService
 * @name sysLoginGetRouters
 * @request GET:/routers
 * @secure
 */
export const sysLoginGetRouters = (params: RequestParams = {}) =>
  request<RListRouterVo>({
    path: `/routers`,
    method: 'GET',
    secure: true,
    skipErrorHandler: false,
    ...params,
  });
export const sysLoginGetRoutersSkipErrorHandler = (params: RequestParams = {}) =>
  request<RListRouterVo>({
    path: `/routers`,
    method: 'GET',
    secure: true,
    skipErrorHandler: true,
    ...params,
  });
