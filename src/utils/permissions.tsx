import { Icon } from '@/components';
import type { UserRoute } from '@/services';
import type { MenuDataItem } from '@ant-design/pro-layout';

export const rootKey = '*:*:*';

export const getUserPermissions = (keys: string[]) =>
  keys.reduce<Record<string, boolean>>((acc, cur) => {
    return { ...acc, [cur]: true };
  }, {});

export const getUserRoutesPermissions = (routes: UserRoute[], parentPath: string = ''): Record<string, boolean> =>
  routes.reduce<Record<string, boolean>>((acc, cur) => {
    const curRoutePath = parentPath ? `${parentPath}/${cur.path}` : cur.path;
    return { ...acc, [curRoutePath]: true, ...getUserRoutesPermissions(cur?.children ?? [], curRoutePath) };
  }, {});

export const getUserMenus = (userRoutes: UserRoute[], parentPath: string = ''): MenuDataItem[] => {
  const menus: MenuDataItem[] = [];

  userRoutes.forEach((item) => {
    if (item.hidden) {
      return;
    }

    const {
      path,
      meta: { title, icon },
    } = item;

    let children: MenuDataItem[] = [];

    if (item.children && item.children.length > 0) {
      children = getUserMenus(item.children, path);
    }

    menus.push({
      path: parentPath ? `${parentPath}/${path}` : path,
      name: title,
      ...(icon ? { icon: <Icon name={icon} /> } : {}),
      ...(children.length > 0 ? { children } : {}),
    });
  });

  return menus;
};
