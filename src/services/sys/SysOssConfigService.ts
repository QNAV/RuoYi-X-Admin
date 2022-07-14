// @ts-ignore
/* eslint-disable */
import { request } from '@/utils';

/** 新增对象存储配置 POST /system/oss/config/add */
export async function SysOssConfigPostAdd(body: API.SysOssConfigAddBo, options?: { [key: string]: any }) {
  return request<API.ResponseVoid>('/system/oss/config/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 状态修改 POST /system/oss/config/changeStatus */
export async function SysOssConfigPostChangeStatus(body: API.SysOssConfigEditBo, options?: { [key: string]: any }) {
  return request<API.ResponseVoid>('/system/oss/config/changeStatus', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 修改对象存储配置 POST /system/oss/config/edit */
export async function SysOssConfigPostEdit(body: API.SysOssConfigEditBo, options?: { [key: string]: any }) {
  return request<API.ResponseVoid>('/system/oss/config/edit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取对象存储配置详细信息 GET /system/oss/config/info */
export async function SysOssConfigGetInfo(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.SysOssConfigGetInfoParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseSysOssConfigVo>('/system/oss/config/info', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 查询对象存储配置列表 POST /system/oss/config/list */
export async function SysOssConfigPostList(body: API.SysOssConfigPageQueryBo, options?: { [key: string]: any }) {
  return request<API.TableDataInfoSysOssConfigVo>('/system/oss/config/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除对象存储配置 POST /system/oss/config/remove */
export async function SysOssConfigPostRemove(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.SysOssConfigPostRemoveParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseVoid>('/system/oss/config/remove', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
