import { clearToken, getToken } from '@/utils';
import { message, notification } from 'antd';
import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import axios from 'axios';
import qs from 'query-string';

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
  data: any;
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
}

const errorHandler = (res: CustomResponseStructure) => {
  const { code, msg, showType } = res;

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

      window.location.href = `${LOGIN_PATH_NAME}?${qs.stringify({
        redirect: window.location.pathname,
        code,
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

export const request = <D>(config: RequestConfig) =>
  instance(config).then((axiosResponse) => {
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

    const customResponse: CustomResponseStructure<D> = {
      data,
      code,
      msg,
      showType,
      success,
    };

    if (!config.skipErrorHandler) {
      errorHandler(customResponse);
    }

    if (!success) {
      throw customResponse;
    }

    // 默认直接返回data
    return customResponse.data;
  });
