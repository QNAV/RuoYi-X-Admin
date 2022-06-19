import { Icon } from '@/components';
import type { UserRoute } from '@/services';
import { isHttpUrl } from '@/utils';
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

export const convertUserRoutesToMenus = (userRoutes: UserRoute[], parentPath: string = ''): MenuDataItem[] => {
  const menus: MenuDataItem[] = [];

  userRoutes.forEach((item) => {
    const {
      path,
      hidden,
      meta: { title, icon },
    } = item;

    let children: MenuDataItem[] = [];

    const curRoutePath = parentPath && !isHttpUrl(path) ? `${parentPath}/${path}` : path;

    if (item.children && item.children.length > 0) {
      children = convertUserRoutesToMenus(item.children, curRoutePath);
    }

    menus.push({
      path: curRoutePath,
      name: title,
      hideInMenu: hidden,
      icon: <Icon name={icon} />,
      children,
    });
  });

  return menus;
};
