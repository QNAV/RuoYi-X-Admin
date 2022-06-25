declare const API_HOST: string;
declare const TOKEN_KEY: string;
declare const LOGIN_PATH_NAME: string;

declare module API {
  // 通用分页传参
  export interface PaginationParameters {
    pageNum?: number;
    pageSize?: number;
    isAsc?: string;
    orderByColumn?: string;
    beginCreateTime?: string;
    endCreateTime?: string;
  }
}
