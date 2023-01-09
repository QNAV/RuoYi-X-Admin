import { sysLoginPostLogout } from '@/services/system/Logout';
import { clearToken } from '@/utils';

export const useLogout = () => {
  return async () => {
    await sysLoginPostLogout();
    clearToken();
    window.location.replace('/login');
  };
};
