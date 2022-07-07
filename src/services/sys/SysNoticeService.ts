// @ts-ignore
/* eslint-disable */
import { request } from '@/utils';

/** 新增通知公告 POST /system/notice/add */
export async function SysNoticePostAdd(body: API.SysNotice, options?: { [key: string]: any }) {
  return request<API.ResponseVoid>('/system/notice/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 修改通知公告 POST /system/notice/edit */
export async function SysNoticePostEdit(body: API.SysNotice, options?: { [key: string]: any }) {
  return request<API.ResponseVoid>('/system/notice/edit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据通知公告编号获取详细信息 GET /system/notice/info */
export async function SysNoticeGetInfo(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.SysNoticeGetInfoParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseSysNotice>('/system/notice/info', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取通知公告列表 POST /system/notice/list */
export async function SysNoticePostList(body: API.SysNoticePageQuery, options?: { [key: string]: any }) {
  return request<API.TableDataInfoSysNotice>('/system/notice/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除通知公告 POST /system/notice/remove */
export async function SysNoticePostRemove(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.SysNoticePostRemoveParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseVoid>('/system/notice/remove', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
