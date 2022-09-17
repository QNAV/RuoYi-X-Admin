import type { Route } from '@/routes';

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
    if (route.isKeepalive && route.path) {
      keys.push(fullPath);
    }
    if (route.children) {
      keys.push(...getRoutesKeepAliveKeys(route.children, parentPath));
    }
  });
  return keys;
};

export const getRoutesKeepAliveLocal = (routes: Route[], parentPath = ''): Record<string, string> => {
  const local: Record<string, string> = {};
  routes.forEach((route) => {
    const fullPath = getFullPath(route.path, parentPath);
    if (route.isKeepalive && route.path && route.name) {
      local[fullPath] = route.name;
    }
    if (route.children) {
      Object.assign(local, getRoutesKeepAliveLocal(route.children, parentPath));
    }
  });
  return local;
};
