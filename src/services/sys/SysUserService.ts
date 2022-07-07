// @ts-ignore
/* eslint-disable */
import { request } from '@/utils';

/** 新增用户 POST /system/user/add */
export async function SysUserPostAdd(body: API.SysUserReq, options?: { [key: string]: any }) {
  return request<API.ResponseVoid>('/system/user/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据用户编号获取授权角色 GET /system/user/authRole */
export async function SysUserGetAuthRole(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.SysUserGetAuthRoleParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseUserAuthRoleVo>('/system/user/authRole', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 状态修改 POST /system/user/changeStatus */
export async function SysUserPostChangeStatus(body: API.SysUserReq, options?: { [key: string]: any }) {
  return request<API.ResponseVoid>('/system/user/changeStatus', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 修改用户 POST /system/user/edit */
export async function SysUserPostEdit(body: API.SysUserReq, options?: { [key: string]: any }) {
  return request<API.ResponseVoid>('/system/user/edit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 导出用户列表 POST /system/user/export */
export async function SysUserPostExport(body: API.SysUserQuery, options?: { [key: string]: any }) {
  return request<any>('/system/user/export', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 导入用户列表 POST /system/user/importData */
export async function SysUserPostImportData(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.SysUserPostImportDataParams,
  body: {},
  file?: File,
  options?: { [key: string]: any },
) {
  const formData = new FormData();

  if (file) {
    formData.append('file', file);
  }

  Object.keys(body).forEach((ele) => {
    const item = (body as any)[ele];

    if (item !== undefined && item !== null) {
      formData.append(ele, typeof item === 'object' && !(item instanceof File) ? JSON.stringify(item) : item);
    }
  });

  return request<API.ResponseVoid>('/system/user/importData', {
    method: 'POST',
    params: {
      ...params,
    },
    data: formData,
    requestType: 'form',
    ...(options || {}),
  });
}

/** 下载导入模板 POST /system/user/importTemplate */
export async function SysUserPostImportTemplate(options?: { [key: string]: any }) {
  return request<any>('/system/user/importTemplate', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 根据用户编号获取详细信息 GET /system/user/info */
export async function SysUserGetInfo(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.SysUserGetInfoParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseUserDetailVo>('/system/user/info', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 用户授权角色 POST /system/user/insertAuthRole */
export async function SysUserPostInsertAuthRole(body: API.AuthRoleAllBody, options?: { [key: string]: any }) {
  return request<API.ResponseVoid>('/system/user/insertAuthRole', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取用户列表 POST /system/user/list */
export async function SysUserPostList(body: API.SysUserPageQuery, options?: { [key: string]: any }) {
  return request<API.TableDataInfoSysUser>('/system/user/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除用户 POST /system/user/remove */
export async function SysUserPostRemove(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.SysUserPostRemoveParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseVoid>('/system/user/remove', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 重置密码 POST /system/user/resetPwd */
export async function SysUserPostResetPwd(body: API.SysUserReq, options?: { [key: string]: any }) {
  return request<API.ResponseVoid>('/system/user/resetPwd', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
