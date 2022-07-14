// @ts-ignore
/* eslint-disable */
import { request } from '@/utils';

/** 获取已登录用户信息 GET /info */
export async function SysLoginGetInfo(options?: { [key: string]: any }) {
  return request<API.ResponseUserInfoVo>('/info', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 用户名登录方法 POST /login */
export async function SysLoginPostLogin(body: API.UserNameLoginBo, options?: { [key: string]: any }) {
  return request<API.ResponseLoginVo>('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 登出方法 POST /logout */
export async function SysLoginPostLogout(options?: { [key: string]: any }) {
  return request<API.ResponseVoid>('/logout', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 清空系统访问记录 POST /monitor/logininfor/clean */
export async function SysLogininforPostClean(options?: { [key: string]: any }) {
  return request<API.ResponseVoid>('/monitor/logininfor/clean', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 导出系统访问记录列表 POST /monitor/logininfor/export */
export async function SysLogininforPostExport(body: API.SysLogininforQueryBo, options?: { [key: string]: any }) {
  return request<any>('/monitor/logininfor/export', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询系统访问记录列表 POST /monitor/logininfor/list */
export async function SysLogininforPostList(body: API.SysLogininforPageQueryBo, options?: { [key: string]: any }) {
  return request<API.TableDataInfoSysLogininforVo>('/monitor/logininfor/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除系统访问记录 POST /monitor/logininfor/remove */
export async function SysLogininforPostRemove(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.SysLogininforPostRemoveParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseVoid>('/monitor/logininfor/remove', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取菜单路由信息 GET /routers */
export async function SysLoginGetRouters(options?: { [key: string]: any }) {
  return request<API.ResponseListRouterVo>('/routers', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 短信登录(示例) POST /smsLogin */
export async function SysLoginPostSmsLogin(body: API.SmsLoginBo, options?: { [key: string]: any }) {
  return request<API.ResponseLoginVo>('/smsLogin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 小程序登录(示例) GET /xcxLogin */
export async function SysLoginGetXcxLogin(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.SysLoginGetXcxLoginParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseLoginVo>('/xcxLogin', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
