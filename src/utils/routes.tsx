import { IconAntd } from '@/components';
import type { RouterVo } from '@/services/system/data-contracts';
import type { MenuDataItem } from '@ant-design/pro-components';

export const convertUserRoutesToMenus = (userRoutes: RouterVo[] = []): MenuDataItem[] => {
  const menus: MenuDataItem[] = [];

  userRoutes.forEach((item) => {
    const { path, meta, hidden } = item;

    let children: MenuDataItem[] = [];

    if (item.children && item.children.length > 0) {
      children = convertUserRoutesToMenus(item.children);
    }

    menus.push({
      path: path,
      name: meta?.title ?? path,
      hideInMenu: hidden,
      icon: <IconAntd name={meta?.icon} />,
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
export const getRouteSettingMap = (userMenus: RouterVo[] = []): Record<string, RouteSetting> => {
  const settingMap: Record<string, RouteSetting> = {};

  userMenus.forEach((menu) => {
    const { path, meta } = menu;

    if (menu.children === undefined) {
      settingMap[path] = {
        key: path,
        name: meta?.title ?? path,
        isKeepAlive: !meta?.noCache,
        closableTab: true,
      };
      return;
    }

    Object.assign(settingMap, getRouteSettingMap(menu.children));
  });

  return settingMap;
};
