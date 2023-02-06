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
import type { RVoid, UserNameRegisterBo } from './data-contracts';

/**
 * @description 用户注册
 *
 * @tags SysRegisterService
 * @name sysRegisterPostRegister
 * @request POST:/register
 * @secure
 */
export const sysRegisterPostRegister = (data: UserNameRegisterBo, params: RequestParams = {}) =>
  request<RVoid>({
    path: `/register`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: false,
    ...params,
  });
export const sysRegisterPostRegisterSkipErrorHandler = (data: UserNameRegisterBo, params: RequestParams = {}) =>
  request<RVoid>({
    path: `/register`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    skipErrorHandler: true,
    ...params,
  });
