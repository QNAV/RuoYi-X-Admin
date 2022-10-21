import { getAccess, useSetAtomAccess } from '@/models/access';
import { SysLoginGetInfo, SysLoginGetRouters } from '@/services/sys/SysLoginService';
import { useQuery, useQueryClient } from '@tanstack/react-query';

const initialStateQueryKey = ['global', 'initialState'];

export const useQueryInitialState = () => {
  const setAtomAccess = useSetAtomAccess();

  return useQuery<{ userInfo: API.UserInfoVo; userRoutes: API.RouterVo[] }>(
    initialStateQueryKey,
    async () => {
      const [userInfo, userRoutes] = await Promise.all([SysLoginGetInfo(), SysLoginGetRouters()]);

      setAtomAccess(getAccess(userInfo.permissions));

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
