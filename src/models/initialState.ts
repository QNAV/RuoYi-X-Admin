import type { RouterVo, UserInfoVo } from '@/services/system/data-contracts';
import { sysLoginGetInfo } from '@/services/system/Info';
import { sysLoginGetRouters } from '@/services/system/Routers';
import { useQuery, useQueryClient } from '@tanstack/react-query';

const initialStateQueryKey = ['global', 'initialState'];

export const useQueryInitialState = () => {
  return useQuery<{ userInfo: UserInfoVo; userRoutes: RouterVo[] }>(
    initialStateQueryKey,
    async () => {
      const [userInfo, userRoutes] = await Promise.all([sysLoginGetInfo(), sysLoginGetRouters()]);

      return { userInfo, userRoutes };
    },
    {
      cacheTime: Infinity,
      staleTime: Infinity,
    },
  );
};

export const useRefreshInitialState = () => {
  const queryClient = useQueryClient();
  return () => queryClient.invalidateQueries(initialStateQueryKey);
};
