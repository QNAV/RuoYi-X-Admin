import type { SortOrder } from 'antd/es/table/interface';
import type { Key } from 'react';

type Sort = Record<string, SortOrder>;
type Filter = Record<string, Key[] | null>;

/**
 * 将 ProTable 的 sort 转化为实际接口格式
 * @param params ProTable 中 request 返回的 sort 传参
 */
export const convertSortParams = (params: Sort) => {
  return Object.keys(params).reduce((pre, key) => {
    const value = params[key];

    return {
      ...pre,
      ...(value ? { sort: `${key}:${value === 'ascend' ? 1 : -1}` } : {}),
    };
  }, {});
};

/**
 * 将 ProTable 的 filter 转化为实际接口格式
 * @param params ProTable 中 request 返回的 filter 传参
 */
export const convertFilterParams = (params: Filter) => {
  return Object.keys(params).reduce((pre, key) => {
    const value = params[key];

    return {
      ...pre,
      ...(value ? { [key]: value.join(',') } : {}),
    };
  }, {});
};

/**
 * 将 ProTable 的 分页参数 转化为 实际接口格式
 * @param params ProTable 中 request 返回的 params 传参
 */
export const convertPaginationParams = <T extends Record<string, any>>(
  params: T & {
    pageSize?: number;
    current?: number;
    keyword?: string;
  },
) => {
  const { pageSize, current, ...restParams } = params;

  return {
    ...restParams,
    ...(pageSize && current ? { limit: pageSize, pageSize: pageSize * current } : {}),
  };
};