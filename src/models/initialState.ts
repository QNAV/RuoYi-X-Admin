import { useSetAccess } from '@/models/access';
import { SysLoginGetInfo, SysLoginGetRouters } from '@/services/sys/SysLoginService';
import { useQuery } from '@tanstack/react-query';

export const initialStateQueryKey = ['global', 'initialState'];

export const useInitialState = () => {
  const setAccess = useSetAccess();

  return useQuery<{ userInfo: API.UserInfoVo; userRoutes: API.RouterVo[] }>(
    initialStateQueryKey,
    async () => {
      const [userInfo, userRoutes] = await Promise.all([SysLoginGetInfo(), SysLoginGetRouters()]);
      return { userInfo, userRoutes };
    },
    {
      staleTime: Infinity,
      cacheTime: Infinity,
      onSuccess: (data) => {
        setAccess(data.userInfo.permissions);
      },
    },
  );
};
