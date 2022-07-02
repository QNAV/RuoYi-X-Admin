// @ts-ignore
/* eslint-disable */
import { request } from '@/utils';

/** 新增部门 POST /system/dept/add */
export async function SysDeptPostAdd(body: API.SysDept, options?: { [key: string]: any }) {
  return request<API.ResponseVoid>('/system/dept/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 修改部门 POST /system/dept/edit */
export async function SysDeptPostEdit(body: API.SysDept, options?: { [key: string]: any }) {
  return request<API.ResponseVoid>('/system/dept/edit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据部门编号获取详细信息 GET /system/dept/info */
export async function SysDeptGetInfo(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.SysDeptGetInfoParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseSysDept>('/system/dept/info', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取部门列表 POST /system/dept/list */
export async function SysDeptPostList(body: API.SysDeptQuery, options?: { [key: string]: any }) {
  return request<API.ResponseListSysDept>('/system/dept/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询部门列表（排除节点） GET /system/dept/list/exclude */
export async function SysDeptGetExcludeChild(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.SysDeptGetExcludeChildParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseListSysDept>('/system/dept/list/exclude', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 删除部门 POST /system/dept/remove */
export async function SysDeptPostRemove(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.SysDeptPostRemoveParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseVoid>('/system/dept/remove', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 加载对应角色部门列表树 GET /system/dept/roleDeptTreeSelect */
export async function SysDeptGetRoleDeptTreeSelect(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.SysDeptGetRoleDeptTreeSelectParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseRoleDeptTreeSelectDTO>('/system/dept/roleDeptTreeSelect', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取部门下拉树列表 POST /system/dept/treeSelect */
export async function SysDeptPostTreeSelect(body: API.SysDeptQuery, options?: { [key: string]: any }) {
  return request<API.ResponseListTreelong>('/system/dept/treeSelect', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
