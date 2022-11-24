import { checkToken, clearToken, getToken } from '@/utils';
import { RequestCanceler } from '@/utils/requestCanceler';
import { message, Modal } from 'antd';
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

/**
 * 后端请求响应结构体
 */
interface ResponseStructure<D = any> {
  code: number;
  msg: string;
  data?: D;
}

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

const redirectToLoginPage = () => {
  window.location.href = `${import.meta.env.VITE_BASE_NAME}login?${createSearchParams({
    redirect: window.location.pathname.replace(import.meta.env.VITE_BASE_NAME, '/'),
  })}`;
};

const requestCanceler = new RequestCanceler();

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

  requestCanceler.addPendingRequest(restConfig);

  return {
    ...restConfig,
    headers,
  };
});

instance.interceptors.response.use(
  (axiosResponse) => {
    requestCanceler.removePendingRequest(axiosResponse.config);
    return axiosResponse;
  },
  async (error) => {
    if (error?.config) requestCanceler.removePendingRequest(error.config);

    if (error?.code === 'ERR_CANCELED') return;

    let errorMessage = '网络错误，请稍后再试';

    if (typeof error === 'string') {
      errorMessage = error;
    } else if (error?.message) {
      errorMessage = error.message;
    }

    message.error(errorMessage);
  },
);

let modal: ReturnType<typeof Modal.confirm> | null = null;

export function request<D extends ResponseStructure>(
  params: { skipErrorHandler?: false } & Omit<FullRequestParams, 'skipErrorHandler'>,
): Promise<D['data']>;
export function request<D extends ResponseStructure>(
  params: { skipErrorHandler: true } & Omit<FullRequestParams, 'skipErrorHandler'>,
): Promise<AxiosResponse<D>>;
export function request({ secure, path, type, query, format, body, skipErrorHandler, ...params }: FullRequestParams) {
  if (secure && !checkToken()) {
    redirectToLoginPage();
  }

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
  }).then(async (axiosResponse) => {
    if (skipErrorHandler) {
      return axiosResponse;
    }

    switch (axiosResponse.data.code) {
      case 200:
        return axiosResponse.data?.data ?? axiosResponse.data;
      case 401:
        requestCanceler.clearPendingRequest();

        if (modal) return;

        modal = Modal.confirm({
          title: '提示',
          content: '登录已过期，请重新登录',
          okText: '前往登录页',
          onOk: () => {
            clearToken();
            redirectToLoginPage();
          },
          onCancel: () => {
            modal = null;
          },
        });
        break;
      default:
        message.error(axiosResponse.data?.msg ?? '网络错误，请稍后再试');
    }

    throw axiosResponse.data;
  });
}
