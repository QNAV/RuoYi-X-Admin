import { MenuType } from '@/constants';
import type { SysMenuVo } from '@/services/system/data-contracts';

interface OptionsParentId {
  menuId: number;
  menuName: string;
  children?: OptionsParentId[];
}

const handleSort = (data: SysMenuVo[]): SysMenuVo[] => {
  return data.sort((a, b) => {
    if (a.orderNum === b.orderNum) {
      return new Date(a.createTime!).getTime() - new Date(b.createTime!).getTime();
    }

    return a.orderNum - b.orderNum;
  });
};

// 数组按 orderNum 排序
export const sortByOrderNum = (data: SysMenuVo[]): SysMenuVo[] => {
  const newData = data.map((item) => {
    if (item.children) {
      item.children = sortByOrderNum(item.children);
    }
    return item;
  });

  const directoryAndMenuList = handleSort(newData.filter((item) => item.menuType !== MenuType.F));
  const buttonList = handleSort(newData.filter((item) => item.menuType === MenuType.F));

  return [...directoryAndMenuList, ...buttonList];
};

export const getOptions = (data?: SysMenuVo[]): OptionsParentId[] => {
  const formatOptions = (items: SysMenuVo[]): OptionsParentId[] => {
    return items
      .filter((item) => item.menuType !== MenuType.F)
      .map(({ menuId, menuName, children }) => {
        return { menuId: menuId!, menuName, children: children ? formatOptions(children) : [] };
      });
  };

  return [{ menuId: 0, menuName: '根目录', children: data ? formatOptions(data) : [] }];
};

export const getSelectedParentIds = (data: Map<number, SysMenuVo>, menuId: number): number[] => {
  const parentIds: number[] = [0];

  if (menuId === 0) {
    return parentIds;
  }

  const findParentId = (id: number) => {
    const menu = data.get(id);

    if (!menu) return;

    if (menu?.parentId !== undefined) {
      findParentId(menu.parentId);
    }

    if (menu.menuType !== MenuType.F) {
      parentIds.push(id);
    }
  };

  findParentId(menuId);

  return parentIds;
};
