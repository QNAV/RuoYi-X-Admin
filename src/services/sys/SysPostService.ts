// @ts-ignore
/* eslint-disable */
import { request } from '@/utils';

/** 新增岗位 POST /system/post/add */
export async function SysPostPostAdd(body: API.SysPost, options?: { [key: string]: any }) {
  return request<API.ResponseVoid>('/system/post/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 修改岗位 POST /system/post/edit */
export async function SysPostPostEdit(body: API.SysPost, options?: { [key: string]: any }) {
  return request<API.ResponseVoid>('/system/post/edit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 导出岗位列表 POST /system/post/export */
export async function SysPostPostExport(body: API.SysPostQuery, options?: { [key: string]: any }) {
  return request<any>('/system/post/export', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据岗位编号获取详细信息 GET /system/post/info */
export async function SysPostGetInfo(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.SysPostGetInfoParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseSysPost>('/system/post/info', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取岗位列表 POST /system/post/list */
export async function SysPostPostList(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.SysPostPostListParams,
  body: API.SysPostQuery,
  options?: { [key: string]: any },
) {
  return request<API.TableDataInfoSysPost>('/system/post/list', {
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

/** 获取岗位选择框列表 GET /system/post/optionSelect */
export async function SysPostGetOptionSelect(options?: { [key: string]: any }) {
  return request<API.ResponseListSysPost>('/system/post/optionSelect', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 删除岗位 POST /system/post/remove */
export async function SysPostPostRemove(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.SysPostPostRemoveParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseVoid>('/system/post/remove', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
