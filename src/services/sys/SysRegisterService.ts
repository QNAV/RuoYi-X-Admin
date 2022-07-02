// @ts-ignore
/* eslint-disable */
import { request } from '@/utils';

/** 用户注册 POST /register */
export async function SysRegisterPostRegister(body: API.RegisterBodyUserName, options?: { [key: string]: any }) {
  return request<API.ResponseVoid>('/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
