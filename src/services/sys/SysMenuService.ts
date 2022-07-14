// @ts-ignore
/* eslint-disable */
import { request } from '@/utils';

/** 新增菜单 POST /system/menu/add */
export async function SysMenuPostAdd(body: API.SysMenuAddBo, options?: { [key: string]: any }) {
  return request<API.ResponseVoid>('/system/menu/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 修改菜单 POST /system/menu/edit */
export async function SysMenuPostEdit(body: API.SysMenuEditBo, options?: { [key: string]: any }) {
  return request<API.ResponseVoid>('/system/menu/edit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据菜单编号获取详细信息 GET /system/menu/info */
export async function SysMenuGetInfo(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.SysMenuGetInfoParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseSysMenu>('/system/menu/info', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取菜单列表 POST /system/menu/list */
export async function SysMenuPostList(body: API.SysMenuQueryBo, options?: { [key: string]: any }) {
  return request<API.ResponseListSysMenu>('/system/menu/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除菜单 POST /system/menu/remove */
export async function SysMenuPostRemove(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.SysMenuPostRemoveParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseVoid>('/system/menu/remove', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 加载对应角色菜单列表树 GET /system/menu/roleMenuTreeSelect */
export async function SysMenuGetRoleMenuTreeSelect(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.SysMenuGetRoleMenuTreeSelectParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseRoleMenuTreeSelectVo>('/system/menu/roleMenuTreeSelect', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取菜单下拉树列表 POST /system/menu/treeSelect */
export async function SysMenuPostTreeSelect(body: API.SysMenuQueryBo, options?: { [key: string]: any }) {
  return request<API.ResponseListTreelong>('/system/menu/treeSelect', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
