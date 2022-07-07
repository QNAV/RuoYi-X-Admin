// @ts-ignore
/* eslint-disable */
import { request } from '@/utils';

/** 清空操作日志记录 POST /monitor/operlog/clean */
export async function SysOperLogPostClean(options?: { [key: string]: any }) {
  return request<API.ResponseVoid>('/monitor/operlog/clean', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 导出操作日志记录列表 POST /monitor/operlog/export */
export async function SysOperLogPostExport(body: API.SysOperLogQuery, options?: { [key: string]: any }) {
  return request<any>('/monitor/operlog/export', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询操作日志记录列表 POST /monitor/operlog/list */
export async function SysOperLogPostList(body: API.SysOperLogPageQuery, options?: { [key: string]: any }) {
  return request<API.TableDataInfoSysOperLog>('/monitor/operlog/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除操作日志记录 POST /monitor/operlog/remove */
export async function SysOperLogPostRemove(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.SysOperLogPostRemoveParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseVoid>('/monitor/operlog/remove', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
