import { sysLoginGetInfo } from '@/services/system/Info';
import { sysLoginGetRouters } from '@/services/system/Routers';
import { convertUserRoutesToMenus, getRouteSettingMap } from '@/utils';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { atom, useAtomValue, useSetAtom } from 'jotai';

const initialStateQueryKey = ['global', 'initialState'];

const atomPermissions = atom<Set<string>>(new Set([]));
export const useSetAtomPermissions = () => useSetAtom(atomPermissions);
export const useAtomValuePermissions = () => useAtomValue(atomPermissions);

const atomKeepAliveRoutes = atom<string[]>([]);
export const useSetAtomKeepAliveRoutes = () => useSetAtom(atomKeepAliveRoutes);
export const useAtomValueKeepAliveRoutes = () => useAtomValue(atomKeepAliveRoutes);

export const useQueryInitialState = () => {
  const setAtomPermissions = useSetAtomPermissions();
  const setAtomKeepAliveRoutes = useSetAtomKeepAliveRoutes();

  return useQuery(
    initialStateQueryKey,
    async () => {
      const [userInfo, userRoutes] = await Promise.all([sysLoginGetInfo(), sysLoginGetRouters()]);

      setAtomPermissions(new Set(userInfo.permissions));

      const routeSettingMap = getRouteSettingMap(userRoutes);
      setAtomKeepAliveRoutes(Object.keys(routeSettingMap).filter((i) => routeSettingMap[i].isKeepAlive));

      return { userInfo, routeSettingMap, menus: convertUserRoutesToMenus(userRoutes) };
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
