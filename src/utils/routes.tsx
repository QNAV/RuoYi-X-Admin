import { AntdIcon } from '@/components';
import type { Route } from '@/routes';
import type { MenuDataItem } from '@ant-design/pro-components';
import qs from 'query-string';

const getFullPath = (currPath = '', parentPath = ''): string => {
  if (currPath.startsWith('/')) {
    return currPath;
  }
  return `${parentPath}/${currPath}`.replace(/\/+/g, '/');
};

export const getRoutesKeepAliveKeys = (routes: Route[], parentPath = ''): string[] => {
  const keys: string[] = [];
  routes.forEach((route) => {
    const fullPath = getFullPath(route.path, parentPath);
    if (route.isKeepAlive && route.path) {
      keys.push(fullPath);
    }
    if (route.children) {
      keys.push(...getRoutesKeepAliveKeys(route.children, fullPath));
    }
  });
  return keys;
};

export const getRoutesKeepAliveLocal = (routes: Route[], parentPath = ''): Record<string, string> => {
  const local: Record<string, string> = {};
  routes.forEach((route) => {
    const fullPath = getFullPath(route.path, parentPath);
    if (route.isKeepAlive && route.path && route.name) {
      local[fullPath] = route.name;
    }
    if (route.children) {
      Object.assign(local, getRoutesKeepAliveLocal(route.children, fullPath));
    }
  });
  return local;
};

export const getRoutesAccessKeysMap = (routes: Route[], parentPath = ''): Record<string, string> => {
  const map: Record<string, string> = {};
  routes.forEach((route) => {
    const fullPath = getFullPath(route.path, parentPath);
    if (route.access && route.path) {
      map[fullPath] = route.access;
    }
    if (route.children) {
      Object.assign(map, getRoutesAccessKeysMap(route.children, fullPath));
    }
  });
  return map;
};

export const convertUserRoutesToMenus = (userRoutes: API.RouterVo[] = []): MenuDataItem[] => {
  const menus: MenuDataItem[] = [];

  userRoutes.forEach((item) => {
    const { query, path, hidden, meta } = item;

    let children: MenuDataItem[] = [];

    const queryString = query ? `?${qs.stringify(JSON.parse(query))}` : '';

    if (item.children && item.children.length > 0) {
      children = convertUserRoutesToMenus(item.children);
    }

    menus.push({
      path: `${path}${queryString}`,
      name: meta?.title,
      hideInMenu: hidden,
      icon: <AntdIcon name={meta?.icon} />,
      children,
    });
  });

  return menus;
};
