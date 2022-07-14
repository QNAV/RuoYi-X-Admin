// @ts-ignore
/* eslint-disable */
import { request } from '@/utils';

/** 强退用户 POST /monitor/online/forceLogout */
export async function SysUserOnlinePostForceLogout(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.SysUserOnlinePostForceLogoutParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseVoid>('/monitor/online/forceLogout', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 在线用户列表 GET /monitor/online/list */
export async function SysUserOnlineGetList(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.SysUserOnlineGetListParams,
  options?: { [key: string]: any },
) {
  return request<API.TableDataInfoSysUserOnlineVo>('/monitor/online/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
