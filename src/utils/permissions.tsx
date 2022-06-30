import { AntdIcon } from '@/components';
import { isHttpUrl } from '@/utils';
import type { MenuDataItem } from '@ant-design/pro-layout';
import qs from 'query-string';

export const rootKey = '*:*:*';

// 检验用户权限
export const checkPermission = (permKey: string | string[], userPerms: Set<string>, strict = true) => {
  if (userPerms.has(rootKey)) {
    return true;
  }

  if (typeof permKey === 'string') {
    return userPerms.has(permKey);
  }

  if (strict) {
    return permKey.every((key) => userPerms.has(key));
  }

  return permKey.some((key) => userPerms.has(key));
};

export const convertUserRoutesToMenus = (userRoutes: API.RouterVo[], parentPath: string = ''): MenuDataItem[] => {
  const menus: MenuDataItem[] = [];

  userRoutes.forEach((item) => {
    const {
      query,
      path,
      hidden,
      meta: { title, icon },
    } = item;

    let routes: MenuDataItem[] = [];

    const queryString = query ? `?${qs.stringify(JSON.parse(query))}` : '';

    const curRoutePath = parentPath && !isHttpUrl(path) ? `${parentPath}/${path}` : path;

    if (item.children && item.children.length > 0) {
      routes = convertUserRoutesToMenus(item.children, curRoutePath);
    }

    menus.push({
      path: `${curRoutePath}${queryString}`,
      name: title,
      hideInMenu: hidden,
      icon: <AntdIcon name={icon} />,
      routes,
    });
  });

  return menus;
};
