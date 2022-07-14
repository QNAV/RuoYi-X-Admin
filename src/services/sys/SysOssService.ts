// @ts-ignore
/* eslint-disable */
import { request } from '@/utils';

/** 下载OSS对象存储 GET /system/oss/download */
export async function SysOssGetDownload(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.SysOssGetDownloadParams,
  options?: { [key: string]: any },
) {
  return request<any>('/system/oss/download', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 查询OSS对象存储列表 POST /system/oss/list */
export async function SysOssPostList(body: API.SysOssPageQueryBo, options?: { [key: string]: any }) {
  return request<API.TableDataInfoSysOssVo>('/system/oss/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询OSS对象基于ID GET /system/oss/listByIds */
export async function SysOssGetListByIds(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.SysOssGetListByIdsParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseListSysOssVo>('/system/oss/listByIds', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 删除OSS对象存储 POST /system/oss/remove */
export async function SysOssPostRemove(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.SysOssPostRemoveParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseVoid>('/system/oss/remove', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 上传OSS对象存储 POST /system/oss/upload */
export async function SysOssPostUpload(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.SysOssPostUploadParams,
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

  return request<API.ResponseOssUploadVo>('/system/oss/upload', {
    method: 'POST',
    params: {
      ...params,
    },
    data: formData,
    requestType: 'form',
    ...(options || {}),
  });
}
