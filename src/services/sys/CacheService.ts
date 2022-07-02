// @ts-ignore
/* eslint-disable */
import { request } from '@/utils';

/** 获取缓存监控详细信息 GET /monitor/cache/info */
export async function CacheGetInfo(options?: { [key: string]: any }) {
  return request<API.ResponseCacheInfoDTO>('/monitor/cache/info', {
    method: 'GET',
    ...(options || {}),
  });
}
