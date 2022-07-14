// @ts-ignore
/* eslint-disable */
import { request } from '@/utils';

/** 个人信息 GET /system/user/profile */
export async function SysProfileGetProfile(options?: { [key: string]: any }) {
  return request<API.ResponseProfileVo>('/system/user/profile', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 修改用户 POST /system/user/profile */
export async function SysProfilePostUpdateProfile(body: API.LoginUserUpdateBo, options?: { [key: string]: any }) {
  return request<API.ResponseVoid>('/system/user/profile', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 头像上传 POST /system/user/profile/avatar */
export async function SysProfilePostAvatar(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.SysProfilePostAvatarParams,
  body: {},
  avatarfile?: File,
  options?: { [key: string]: any },
) {
  const formData = new FormData();

  if (avatarfile) {
    formData.append('avatarfile', avatarfile);
  }

  Object.keys(body).forEach((ele) => {
    const item = (body as any)[ele];

    if (item !== undefined && item !== null) {
      formData.append(ele, typeof item === 'object' && !(item instanceof File) ? JSON.stringify(item) : item);
    }
  });

  return request<API.ResponseAvatarUploadVo>('/system/user/profile/avatar', {
    method: 'POST',
    params: {
      ...params,
    },
    data: formData,
    requestType: 'form',
    ...(options || {}),
  });
}

/** 重置密码 POST /system/user/profile/updatePwd */
export async function SysProfilePostUpdatePwd(body: API.UpdatePwdBo, options?: { [key: string]: any }) {
  return request<API.ResponseVoid>('/system/user/profile/updatePwd', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
