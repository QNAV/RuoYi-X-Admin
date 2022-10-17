import type { AccessObject } from '@/models/access';
import { getAccess, useSetAtomAccess } from '@/models/access';
import { SysLoginGetInfo, SysLoginGetRouters } from '@/services/sys/SysLoginService';
import { useQuery, useQueryClient } from '@tanstack/react-query';

const initialStateQueryKey = ['global', 'initialState'];

export const useQueryInitialState = () => {
  const setAtomAccess = useSetAtomAccess();

  return useQuery<{ userInfo: API.UserInfoVo; userRoutes: API.RouterVo[]; accessObject: AccessObject }>(
    initialStateQueryKey,
    async () => {
      const [userInfo, userRoutes] = await Promise.all([SysLoginGetInfo(), SysLoginGetRouters()]);
      return { userInfo, userRoutes, accessObject: getAccess(userInfo?.permissions) };
    },
    {
      staleTime: Infinity,
      cacheTime: Infinity,
      onSuccess: ({ accessObject }) => {
        setAtomAccess(accessObject);
      },
    },
  );
};

export const useRefreshInitialState = () => {
  const queryClient = useQueryClient();
  return () => queryClient.invalidateQueries(initialStateQueryKey);
};
