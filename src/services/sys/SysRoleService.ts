// @ts-ignore
/* eslint-disable */
import { request } from '@/utils';

/** 新增角色 POST /system/role/add */
export async function SysRolePostAdd(body: API.SysRoleReq, options?: { [key: string]: any }) {
  return request<API.ResponseVoid>('/system/role/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询已分配用户角色列表 POST /system/role/authUser/allocatedList */
export async function SysRolePostAllocatedList(body: API.SysUserPageQuery, options?: { [key: string]: any }) {
  return request<API.TableDataInfoSysUser>('/system/role/authUser/allocatedList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 取消授权用户 POST /system/role/authUser/cancel */
export async function SysRolePostCancelAuthUser(body: API.SysUserRole, options?: { [key: string]: any }) {
  return request<API.ResponseVoid>('/system/role/authUser/cancel', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 批量取消授权用户 POST /system/role/authUser/cancelAll */
export async function SysUserPostCancelAuthUserAll(body: API.AuthUserAllBody, options?: { [key: string]: any }) {
  return request<API.ResponseVoid>('/system/role/authUser/cancelAll', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 批量选择用户授权 POST /system/role/authUser/selectAll */
export async function SysUserPostSelectAuthUserAll(body: API.AuthUserAllBody, options?: { [key: string]: any }) {
  return request<API.ResponseVoid>('/system/role/authUser/selectAll', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询未分配用户角色列表 POST /system/role/authUser/unallocatedList */
export async function SysRolePostUnallocatedList(body: API.SysUserPageQuery, options?: { [key: string]: any }) {
  return request<API.TableDataInfoSysUser>('/system/role/authUser/unallocatedList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 状态修改 POST /system/role/changeStatus */
export async function SysRolePostChangeStatus(body: API.SysRoleReq, options?: { [key: string]: any }) {
  return request<API.ResponseVoid>('/system/role/changeStatus', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 修改保存数据权限 POST /system/role/dataScope */
export async function SysRolePostDataScope(body: API.SysRoleReq, options?: { [key: string]: any }) {
  return request<API.ResponseVoid>('/system/role/dataScope', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 修改保存角色 POST /system/role/edit */
export async function SysRolePostEdit(body: API.SysRoleReq, options?: { [key: string]: any }) {
  return request<API.ResponseVoid>('/system/role/edit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 导出角色信息列表 POST /system/role/export */
export async function SysRolePostExport(body: API.SysRoleQuery, options?: { [key: string]: any }) {
  return request<any>('/system/role/export', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据角色编号获取详细信息 GET /system/role/info */
export async function SysRoleGetInfo(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.SysRoleGetInfoParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseSysRole>('/system/role/info', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 查询角色信息列表 POST /system/role/list */
export async function SysRolePostList(body: API.SysRoleQuery, options?: { [key: string]: any }) {
  return request<API.TableDataInfoSysRole>('/system/role/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取角色选择框列表 GET /system/role/optionSelect */
export async function SysRoleGetOptionSelect(options?: { [key: string]: any }) {
  return request<API.ResponseListSysRole>('/system/role/optionSelect', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 删除角色 POST /system/role/remove */
export async function SysRolePostRemove(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.SysRolePostRemoveParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseVoid>('/system/role/remove', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
