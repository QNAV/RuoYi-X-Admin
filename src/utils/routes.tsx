import { IconAntd } from '@/components';
import type { CustomRouteObject, Route } from '@/routes';
import type { RouterVo } from '@/services/system/data-contracts';
import type { MenuDataItem } from '@ant-design/pro-components';
import qs from 'qs';

const getFullPath = (currPath = '', parentPath = ''): string => {
  if (currPath.startsWith('/')) {
    return currPath;
  }

  return `${parentPath}/${currPath}`.replace(/\/+/g, '/');
};

export const getRoutesAccessKeysMap = (routes: Route[], parentPath = ''): Record<string, string | string[]> => {
  const accessKeys: Record<string, string | string[]> = {};

  routes.forEach((route) => {
    const fullPath = getFullPath(route.path, parentPath);

    if (route.access) {
      accessKeys[fullPath] = route.access;
    }

    if (route.children) {
      Object.assign(accessKeys, getRoutesAccessKeysMap(route.children, fullPath));
    }
  });

  return accessKeys;
};

type GetRouteSettingsMapReturnType = Record<string, Required<Omit<CustomRouteObject, 'access'>>>;
export const getRoutesSettingsMap = (routes: Route[], parentPath = ''): GetRouteSettingsMapReturnType => {
  const settings: GetRouteSettingsMapReturnType = {};

  routes.forEach((route) => {
    const fullPath = getFullPath(route.path, parentPath);

    if (route.children === undefined) {
      settings[fullPath] = {
        name: route?.name ?? fullPath,
        isKeepAlive: route?.isKeepAlive ?? false,
        hideInTab: route?.hideInTab ?? false,
        closableTab: route?.closableTab ?? true,
      };
      return;
    }

    Object.assign(settings, getRoutesSettingsMap(route.children, fullPath));
  });

  return settings;
};

export const convertUserRoutesToMenus = (userRoutes: RouterVo[] = []): MenuDataItem[] => {
  const menus: MenuDataItem[] = [];

  userRoutes.forEach((item) => {
    const { query, path, hidden, meta } = item;

    let children: MenuDataItem[] = [];

    if (item.children && item.children.length > 0) {
      children = convertUserRoutesToMenus(item.children);
    }

    menus.push({
      path: `${path}${query ? `?${qs.stringify(JSON.parse(query))}` : ''}`,
      name: meta?.title,
      hideInMenu: hidden,
      icon: <IconAntd name={meta?.icon} />,
      children,
    });
  });

  return menus;
};
