// @ts-ignore
/* eslint-disable */
import { request } from '@/utils';

/** 新增参数配置 POST /system/config/add */
export async function SysConfigPostAdd(body: API.SysConfig, options?: { [key: string]: any }) {
  return request<API.ResponseVoid>('/system/config/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据参数键名查询参数值 GET /system/config/configKey */
export async function SysConfigGetConfigKey(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.SysConfigGetConfigKeyParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseVoid>('/system/config/configKey', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 修改参数配置 POST /system/config/edit */
export async function SysConfigPostEdit(body: API.SysConfig, options?: { [key: string]: any }) {
  return request<API.ResponseVoid>('/system/config/edit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 导出参数配置列表 POST /system/config/export */
export async function SysConfigPostExport(body: API.SysConfigQuery, options?: { [key: string]: any }) {
  return request<any>('/system/config/export', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据参数编号获取详细信息 GET /system/config/info */
export async function SysConfigGetInfo(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.SysConfigGetInfoParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseSysConfig>('/system/config/info', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取参数配置列表 POST /system/config/list */
export async function SysConfigPostList(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.SysConfigPostListParams,
  body: API.SysConfigQuery,
  options?: { [key: string]: any },
) {
  return request<API.TableDataInfoSysConfig>('/system/config/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      ...params,
    },
    data: body,
    ...(options || {}),
  });
}

/** 刷新参数缓存 POST /system/config/refreshCache */
export async function SysConfigPostRefreshCache(options?: { [key: string]: any }) {
  return request<API.ResponseVoid>('/system/config/refreshCache', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 删除参数配置 POST /system/config/remove */
export async function SysConfigPostRemove(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.SysConfigPostRemoveParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseVoid>('/system/config/remove', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据参数键名修改参数配置 POST /system/config/updateByKey */
export async function SysConfigPostUpdateByKey(body: API.SysConfig, options?: { [key: string]: any }) {
  return request<API.ResponseVoid>('/system/config/updateByKey', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
