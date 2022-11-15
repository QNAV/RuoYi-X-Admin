import { clearToken, getToken } from '@/utils';
import { message, notification } from 'antd';
import type { AxiosRequestConfig, AxiosResponse, ResponseType } from 'axios';
import axios from 'axios';
import { createSearchParams } from 'react-router-dom';

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, 'data' | 'params' | 'url' | 'responseType'> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
  /** skip error handler */
  skipErrorHandler?: boolean;
}

export type RequestParams = Omit<FullRequestParams, 'body' | 'method' | 'query' | 'path' | 'skipErrorHandler'>;

export enum ContentType {
  Json = 'application/json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
  Text = 'text/plain',
}

enum ErrorShowType {
  /**
   * 静默处理
   */
  SILENT = 0,
  /**
   * 警告信息提示
   */
  WARN_MESSAGE = 1,
  /**
   * 错误信息提示
   */
  ERROR_MESSAGE = 2,
  /**
   * 通知信息提示
   */
  NOTIFICATION = 3,
  /**
   * 跳转到登录页
   */
  REDIRECT = 9,
}

/**
 * 后端请求响应结构体
 */
interface ResponseStructure<D = any> {
  code: number;
  msg: string;
  data?: D;
}

/**
 * 自定义请求响应结构体
 */
interface CustomResponseStructure extends ResponseStructure {
  success: boolean;
  showType: ErrorShowType;
}

const errorHandler = (res: CustomResponseStructure) => {
  const { msg, showType } = res;

  switch (showType) {
    case ErrorShowType.SILENT:
      break;

    case ErrorShowType.WARN_MESSAGE:
      message.warning(msg);
      break;

    case ErrorShowType.NOTIFICATION:
      notification.warning({
        message: msg,
      });
      break;

    case ErrorShowType.ERROR_MESSAGE:
      message.error(msg);
      break;

    case ErrorShowType.REDIRECT:
      clearToken();

      window.location.href = `${import.meta.env.VITE_BASE_NAME}login?${createSearchParams({
        redirect: window.location.pathname.replace(import.meta.env.VITE_BASE_NAME, '/'),
        msg: '登录已过期，请重新登录',
      })}`;
      break;

    default:
      break;
  }
};

const stringifyFormItem = (formItem: unknown) => {
  if (typeof formItem === 'object' && formItem !== null) {
    return JSON.stringify(formItem);
  } else {
    return `${formItem}`;
  }
};

const createFormData = (input: Record<string, unknown>): FormData => {
  return Object.keys(input || {}).reduce((formData, key) => {
    const property = input[key];
    const propertyContent: any[] = property instanceof Array ? property : [property];

    for (const formItem of propertyContent) {
      const isFileType = formItem instanceof Blob || formItem instanceof File;
      formData.append(key, isFileType ? formItem : stringifyFormItem(formItem));
    }

    return formData;
  }, new FormData());
};

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_HOST,
  timeout: 1000 * 3,
  paramsSerializer: {
    indexes: null,
  },
});

instance.interceptors.request.use((config) => {
  const { headers = {}, ...restConfig } = config;

  headers.Authorization = getToken();

  return {
    ...restConfig,
    headers,
  };
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    let errorMessage = '网络错误，请稍后再试';

    if (typeof error === 'string') {
      errorMessage = error;
    } else if (error?.message) {
      errorMessage = error.message;
    }

    message.error(errorMessage);

    throw error;
  },
);

export function request<D extends ResponseStructure>(
  params: { skipErrorHandler?: false } & Omit<FullRequestParams, 'skipErrorHandler'>,
): Promise<D['data']>;
export function request<D extends ResponseStructure>(
  params: { skipErrorHandler: true } & Omit<FullRequestParams, 'skipErrorHandler'>,
): Promise<AxiosResponse<D>>;
export function request({ secure, path, type, query, format, body, ...params }: FullRequestParams) {
  let data = body;

  if (type === ContentType.FormData && body && typeof body === 'object') {
    data = createFormData(body as Record<string, unknown>);
  }

  if (type === ContentType.Text && body && typeof body !== 'string') {
    data = JSON.stringify(body);
  }

  return instance({
    ...params,
    headers: {
      ...(params.headers || {}),
      ...(type && type !== ContentType.FormData ? { 'Content-Type': type } : {}),
    },
    params: query,
    responseType: format,
    data,
    url: path,
  }).then((axiosResponse) => {
    if (params?.skipErrorHandler) {
      return axiosResponse;
    }

    const success = axiosResponse.data?.code === 200;

    let showType: ErrorShowType;

    if (success) {
      showType = ErrorShowType.SILENT;
    } else if (axiosResponse.data?.code === 401) {
      showType = ErrorShowType.REDIRECT;
    } else {
      showType = ErrorShowType.ERROR_MESSAGE;
    }

    const customResponse = {
      data: axiosResponse.data?.data,
      code: axiosResponse.data?.code,
      msg: axiosResponse.data?.msg ?? '网络错误，请稍后再试',
      showType,
      success,
    };

    errorHandler(customResponse);

    if (!success) {
      throw customResponse;
    }

    return customResponse.data;
  });
}
