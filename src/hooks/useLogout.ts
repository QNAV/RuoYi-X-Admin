import { sysLoginPostLogout } from '@/services/system/Logout';
import { clearToken } from '@/utils';
import { useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

export const useLogout = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return async () => {
    await sysLoginPostLogout();
    clearToken();
    queryClient.clear();
    navigate('/login');
  };
};
