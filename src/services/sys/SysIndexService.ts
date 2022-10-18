// @ts-ignore
/* eslint-disable */
import { request } from '@/utils';

/** 访问首页，提示语 GET / */
export async function SysIndexGetIndex(options?: { [key: string]: any }) {
  return request<any>('/', {
    method: 'GET',
    ...(options || {}),
  });
}
