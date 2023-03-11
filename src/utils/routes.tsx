import { IconPark } from '@/components';
import type { RouterVo } from '@/services/system/data-contracts';
import { isHttpUrl } from '@/utils/is';
import type { MenuDataItem } from '@ant-design/pro-components';
import type { IconType } from '@icon-park/react/es/all';

const genFullPath = (path: string, parentPath: string) => {
  if (isHttpUrl(path)) {
    return path;
  }

  return `${parentPath}/${path}`.replace(/\/+/g, '/');
};

export const convertUserRoutesToMenus = (userRoutes: RouterVo[] = [], parentPath = '/'): MenuDataItem[] => {
  const menus: MenuDataItem[] = [];

  userRoutes.forEach((item) => {
    const { path, meta, hidden } = item;

    const fullPath = genFullPath(path, parentPath);

    let children: MenuDataItem[] = [];

    if (item.children && item.children.length > 0) {
      children = convertUserRoutesToMenus(item.children, fullPath);
    }

    menus.push({
      path: fullPath,
      name: meta?.title ?? path,
      hideInMenu: hidden,
      icon: <IconPark type={meta?.icon as IconType} />,
      link: meta?.link,
      children,
    });
  });

  return menus;
};

export interface RouteSetting {
  /**
   * @description: 路由名称，用做 tab 标签页的标题
   */
  name: string;
  /**
   * @description: 是否可关闭 tab 标签页, 默认为 true
   */
  closableTab: boolean;
  /**
   * @description: 是否缓存页面, 默认为 false
   */
  isKeepAlive: boolean;
  /**
   * @description: 当前路径
   */
  key: string;
}
export const getRouteSettingMap = (userMenus: RouterVo[] = [], parentPath = '/'): Record<string, RouteSetting> => {
  const settingMap: Record<string, RouteSetting> = {};

  userMenus.forEach((menu) => {
    const { path, meta } = menu;

    const fullPath = genFullPath(path, parentPath);

    if (menu.children === undefined) {
      settingMap[fullPath] = {
        key: fullPath,
        name: meta?.title ?? path,
        isKeepAlive: !meta?.noCache,
        closableTab: true,
      };
      return;
    }

    Object.assign(settingMap, getRouteSettingMap(menu.children, fullPath));
  });

  return settingMap;
};
