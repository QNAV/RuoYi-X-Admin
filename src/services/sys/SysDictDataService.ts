// @ts-ignore
/* eslint-disable */
import { request } from '@/utils';

/** 新增字典类型 POST /system/dict/data/add */
export async function SysDictDataPostAdd(body: API.SysDictDataAddBo, options?: { [key: string]: any }) {
  return request<API.ResponseVoid>('/system/dict/data/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 修改保存字典类型 POST /system/dict/data/edit */
export async function SysDictDataPostEdit(body: API.SysDictDataEditBo, options?: { [key: string]: any }) {
  return request<API.ResponseVoid>('/system/dict/data/edit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 导出字典数据列表 POST /system/dict/data/export */
export async function SysDictDataPostExport(body: API.SysDictDataQueryBo, options?: { [key: string]: any }) {
  return request<any>('/system/dict/data/export', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询字典数据详细 GET /system/dict/data/info */
export async function SysDictDataGetInfo(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.SysDictDataGetInfoParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseSysDictDataVo>('/system/dict/data/info', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 查询字典数据列表 POST /system/dict/data/list */
export async function SysDictDataPostList(body: API.SysDictDataPageQueryBo, options?: { [key: string]: any }) {
  return request<API.TableDataInfoSysDictDataVo>('/system/dict/data/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除字典类型 POST /system/dict/data/remove */
export async function SysDictDataPostRemove(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.SysDictDataPostRemoveParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseVoid>('/system/dict/data/remove', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据字典类型查询字典数据信息 GET /system/dict/data/type */
export async function SysDictDataGetType(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.SysDictDataGetTypeParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseListSysDictDataVo>('/system/dict/data/type', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
