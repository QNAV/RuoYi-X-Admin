import { SysLoginPostLogout } from '@/services/sys/SysLoginService';
import { clearToken } from '@/utils';
import { useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

const LOGIN_PATH_NAME = import.meta.env.VITE_LOGIN_PATH_NAME;

export const useLogout = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return async () => {
    await SysLoginPostLogout();
    clearToken();
    queryClient.clear();
    navigate(LOGIN_PATH_NAME);
  };
};
