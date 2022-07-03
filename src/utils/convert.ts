import type { SortOrder } from 'antd/es/table/interface';
import { omit } from 'lodash-es';
import type { Key } from 'react';

type Sort = Record<string, SortOrder>;
type Filter = Record<string, Key[] | null>;

/**
 * 将 ProTable 的 sort 转化为实际接口格式
 * @param params ProTable 中 request 返回的 sort 传参
 */
export const convertSortParams = (params: Sort) => {
  return Object.keys(params).reduce(
    (pre, key) => ({
      orderByColumn: key,
      isAsc: params[key] === 'ascend' ? '1' : '0',
    }),
    {},
  );
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
  const { pageSize, current } = params;

  return pageSize && current ? { pageSize, pageNum: current } : {};
};

export const omitPaginationParams = <T extends Record<string, any>>(
  params: T & {
    pageSize?: number;
    current?: number;
    keyword?: string;
  },
): Omit<
  T & {
    pageSize?: number;
    current?: number;
    keyword?: string;
  },
  'pageSize' | 'current' | 'keyword'
> => {
  return omit(params, ['pageSize', 'current', 'keyword']);
};

export const convertParams = <T extends Record<string, any>>(
  params: T & {
    pageSize?: number;
    current?: number;
    keyword?: string;
  },
  sort: Sort = {},
) => {
  return {
    ...convertPaginationParams(params),
    ...convertSortParams(sort),
  };
};
