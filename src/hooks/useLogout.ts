import { SysLoginPostLogout } from '@/services/sys/SysLoginService';
import { clearToken } from '@/utils';
import { useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

export const useLogout = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return async () => {
    await SysLoginPostLogout();
    clearToken();
    queryClient.clear();
    navigate('/login');
  };
};
