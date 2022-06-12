import type { CurrentUser } from '@/services/login';
import { request } from '@/utils';

export type UpdateUserProfileParams = Partial<
  Pick<CurrentUser, 'userName' | 'sex' | 'email' | 'phonenumber' | 'avatar'>
>;

export interface UpdateUserPasswordParams {
  newPassword: string;
  oldPassword: string;
}

// 查询个人信息
export const reqGetUserProfile = () => request({ url: '/system/user/profile' });

// 修改个人信息
export const reqUpdateUserProfile = (params: UpdateUserProfileParams) =>
  request({ url: '/system/user/profile', method: 'PUT', data: params });

// 修改密码
export const reqUpdateUserPassword = (params: UpdateUserPasswordParams) =>
  request({ url: '/system/user/profile/updatePwd', method: 'PUT', params });
// 上传头像地址
export const uploadAvatarPath = `${API_HOST}/system/user/profile/avatar`;
