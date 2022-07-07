// @ts-ignore
/* eslint-disable */
import { requestGenerator as request } from '@/utils';

/** 批量生成代码 GET /tool/gen/batchGenCode */
export async function GenGetBatchGenCode(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.GenGetBatchGenCodeParams,
  options?: { [key: string]: any },
) {
  return request<any>('/tool/gen/batchGenCode', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 查询数据表字段列表 GET /tool/gen/column/list */
export async function GenGetColumnList(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.GenGetColumnListParams,
  options?: { [key: string]: any },
) {
  return request<API.TableDataInfoGenTableColumn>('/tool/gen/column/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 查询数据库列表 POST /tool/gen/db/list */
export async function GenPostDbList(body: API.GenTablePageQuery, options?: { [key: string]: any }) {
  return request<API.TableDataInfoGenTable>('/tool/gen/db/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 生成代码（下载方式） GET /tool/gen/download */
export async function GenGetDownload(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.GenGetDownloadParams,
  options?: { [key: string]: any },
) {
  return request<any>('/tool/gen/download', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 修改保存代码生成业务 POST /tool/gen/edit */
export async function GenPostEdit(body: API.GenTableReq, options?: { [key: string]: any }) {
  return request<API.ResponseVoid>('/tool/gen/edit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 生成代码（自定义路径） GET /tool/gen/genCode */
export async function GenGetGenCode(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.GenGetGenCodeParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseVoid>('/tool/gen/genCode', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 导入表结构（保存） POST /tool/gen/importTable */
export async function GenPostImportTable(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.GenPostImportTableParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseVoid>('/tool/gen/importTable', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取代码生成业务信息 GET /tool/gen/info */
export async function GenGetInfo(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.GenGetInfoParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseGenInfoVo>('/tool/gen/info', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 查询代码生成列表 POST /tool/gen/list */
export async function GenPostList(body: API.GenTablePageQuery, options?: { [key: string]: any }) {
  return request<API.TableDataInfoGenTable>('/tool/gen/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 预览代码 GET /tool/gen/preview */
export async function GenGetPreview(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.GenGetPreviewParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseMapstringstring>('/tool/gen/preview', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 删除代码生成 POST /tool/gen/remove */
export async function GenPostRemove(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.GenPostRemoveParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseVoid>('/tool/gen/remove', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 同步数据库 GET /tool/gen/synchDb */
export async function GenGetSynchDb(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.GenGetSynchDbParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseVoid>('/tool/gen/synchDb', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
