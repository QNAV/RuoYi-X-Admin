import type { AccessObject } from '@/models/access';
import { getAccess, useSetAtomAccess } from '@/models/access';
import { SysLoginGetInfo, SysLoginGetRouters } from '@/services/sys/SysLoginService';
import { useQuery } from '@tanstack/react-query';

export const initialStateQueryKey = ['global', 'initialState'];

export const useInitialState = () => {
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
