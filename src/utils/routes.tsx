import { AntdIcon } from '@/components';
import type { Route } from '@/routes';
import { isHttpUrl } from '@/utils';
import type { MenuDataItem } from '@ant-design/pro-components';
import qs from 'query-string';

const baseName = import.meta.env.VITE_BASE_NAME;

const join = (path: string) => {
  return `${baseName}${path}`.replace(/\/+/g, '/');
};

export function joinBaseName(path: string): string;
export function joinBaseName(path: string[]): string[];
export function joinBaseName(path: any): any {
  if (Array.isArray(path)) {
    return path.map((item) => join(item));
  }
  return join(path);
}

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

export const convertUserRoutesToMenus = (userRoutes: API.RouterVo[], parentPath = ''): MenuDataItem[] => {
  const menus: MenuDataItem[] = [];

  userRoutes.forEach((item) => {
    const { query, path, hidden, meta } = item;

    let routes: MenuDataItem[] = [];

    const queryString = query ? `?${qs.stringify(JSON.parse(query))}` : '';

    const curRoutePath = parentPath && !isHttpUrl(path) ? `${parentPath}/${path}` : path;

    if (item.children && item.children.length > 0) {
      routes = convertUserRoutesToMenus(item.children, curRoutePath);
    }

    menus.push({
      path: `${curRoutePath}${queryString}`,
      name: meta?.title,
      hideInMenu: hidden,
      icon: <AntdIcon name={meta?.icon} />,
      routes,
    });
  });

  return menus;
};
