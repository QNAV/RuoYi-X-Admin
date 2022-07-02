// @ts-ignore
/* eslint-disable */
import { request } from '@/utils';

/** 生成验证码 GET /captchaImage */
export async function CaptchaGetGetCode(options?: { [key: string]: any }) {
  return request<API.ResponseCaptchaImageDto>('/captchaImage', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 短信验证码 GET /captchaSms */
export async function CaptchaGetSmsCaptcha(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.CaptchaGetSmsCaptchaParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseVoid>('/captchaSms', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
