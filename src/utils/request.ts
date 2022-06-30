import { clearToken, getToken } from '@/utils';
import { message, notification } from 'antd';
import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import axios from 'axios';

import { createSearchParams } from '@umijs/max';

enum ErrorShowType {
  SILENT = 0, // 不提示错误
  WARN_MESSAGE = 1, // 警告信息提示
  ERROR_MESSAGE = 2, // 错误信息提示
  NOTIFICATION = 3, // 通知提示
  REDIRECT = 9, // 页面跳转
}

/**
 * 后端请求响应结构体
 */
interface ResponseStructure {
  code: number;
  msg: string;
  data?: any;
}

/**
 * 自定义请求响应结构体
 */
interface CustomResponseStructure<D = any> extends ResponseStructure {
  success: boolean;
  showType: ErrorShowType;
  data: D;
}

interface RequestConfig extends AxiosRequestConfig {
  skipErrorHandler?: boolean;
  convertToProData?: boolean;
  requestType?: 'form';
}

const errorHandler = (res: CustomResponseStructure) => {
  const { msg, showType } = res as any;

  switch (showType) {
    case ErrorShowType.SILENT:
      break;

    case ErrorShowType.WARN_MESSAGE:
      message.warn(msg);
      break;

    case ErrorShowType.NOTIFICATION:
      notification.warn({
        message: msg,
      });
      break;

    case ErrorShowType.ERROR_MESSAGE:
      message.error(msg);
      break;

    case ErrorShowType.REDIRECT:
      clearToken();

      window.location.href = `${LOGIN_PATH_NAME}?${createSearchParams({
        redirect: window.location.pathname,
        msg,
      })}`;
      break;

    default:
      break;
  }
};

const instance = axios.create({
  baseURL: API_HOST,
  timeout: 1000 * 3,
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
  url: string,
  config?: { convertToProData?: false } & Omit<RequestConfig, 'convertToProData'>,
): Promise<D['data']>;
export function request<D extends ResponseStructure>(
  url: string,
  config?: { convertToProData: true } & Omit<RequestConfig, 'convertToProData'>,
): Promise<{ total: number; data: D['data'][]; success: true }>;

export function request<D extends ResponseStructure>(url: string, config?: Omit<RequestConfig, 'url'>) {
  const { requestType, headers = {}, ...restConfig } = config || {};

  if (requestType === 'form') headers['Content-Type'] = 'multipart/form-data';

  return instance({ ...restConfig, headers, url }).then((axiosResponse) => {
    const {
      data: { code, msg, data },
    } = axiosResponse as unknown as AxiosResponse<ResponseStructure>;

    const success = code === 200;

    let showType: ErrorShowType;

    if (success) {
      showType = ErrorShowType.SILENT;
    } else if (code === 401) {
      showType = ErrorShowType.REDIRECT;
    } else {
      showType = ErrorShowType.ERROR_MESSAGE;
    }

    const customResponse: CustomResponseStructure<D['data']> = {
      data,
      code,
      msg,
      showType,
      success,
    };

    if (!config?.skipErrorHandler) {
      errorHandler(customResponse);
    }

    if (!success) {
      throw customResponse;
    }

    if (config?.convertToProData) {
      return {
        total: data?.total ?? 0,
        data: data?.rows ?? [],
        success,
      };
    }

    return data;
  });
}
