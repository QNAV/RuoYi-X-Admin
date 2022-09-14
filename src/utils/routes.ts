import type { MenuDataItem } from '@ant-design/pro-components';

export const convertRoutesToNameMap = (routes: MenuDataItem[], parentPath = '/'): Record<string, string> => {
  const map: Record<string, string> = {};

  routes.forEach((item) => {
    const { path = '', name } = item;

    const currentPath = parentPath ? `${parentPath}${parentPath.endsWith('/') ? '' : '/'}${path}` : path;

    if (currentPath && name) {
      map[currentPath] = name;
    }

    if (item.routes && item.routes.length > 0) {
      Object.assign(map, convertRoutesToNameMap(item.routes, currentPath));
    }
  });

  return map;
};
