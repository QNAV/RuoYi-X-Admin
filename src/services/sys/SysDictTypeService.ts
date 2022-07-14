// @ts-ignore
/* eslint-disable */
import { request } from '@/utils';

/** 新增字典类型 POST /system/dict/type/add */
export async function SysDictTypePostAdd(body: API.SysDictTypeAddBo, options?: { [key: string]: any }) {
  return request<API.ResponseVoid>('/system/dict/type/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 修改字典类型 POST /system/dict/type/edit */
export async function SysDictTypePostEdit(body: API.SysDictTypeEditBo, options?: { [key: string]: any }) {
  return request<API.ResponseVoid>('/system/dict/type/edit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 导出字典类型列表 POST /system/dict/type/export */
export async function SysDictTypePostExport(body: API.SysDictTypeQueryBo, options?: { [key: string]: any }) {
  return request<any>('/system/dict/type/export', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询字典类型详细 GET /system/dict/type/info */
export async function SysDictTypeGetInfo(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.SysDictTypeGetInfoParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseSysDictTypeVo>('/system/dict/type/info', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 查询字典类型列表 POST /system/dict/type/list */
export async function SysDictTypePostList(body: API.SysDictTypePageQueryBo, options?: { [key: string]: any }) {
  return request<API.TableDataInfoSysDictTypeVo>('/system/dict/type/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取字典选择框列表 GET /system/dict/type/optionSelect */
export async function optionSelectUsingGET(options?: { [key: string]: any }) {
  return request<API.ResponseListSysDictTypeVo>('/system/dict/type/optionSelect', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 刷新字典缓存 POST /system/dict/type/refreshCache */
export async function SysDictTypePostRefreshCache(options?: { [key: string]: any }) {
  return request<API.ResponseVoid>('/system/dict/type/refreshCache', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 删除字典类型 POST /system/dict/type/remove */
export async function SysDictTypePostRemove(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.SysDictTypePostRemoveParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseVoid>('/system/dict/type/remove', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
