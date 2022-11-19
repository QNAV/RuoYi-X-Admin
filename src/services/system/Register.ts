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
import type { ResponseVoid, UserNameRegisterBo } from './data-contracts';

/**
 * No description
 *
 * @tags SysRegisterService
 * @name sysRegisterPostRegister
 * @summary 用户注册
 * @request POST:/register
 * @secure
 */
export const sysRegisterPostRegister = (data: UserNameRegisterBo, params: RequestParams = {}) =>
  request<ResponseVoid>({
    path: `/register`,
    method: 'POST',
    body: data,
    secure: true,
    type: ContentType.Json,
    ...params,
  });
