import { MenuType } from '@/constants';
import type { MenuData, TreeData } from '@/services';
import type { Key } from 'react';

export const parseSimpleTreeData = (
  treeData: Record<any, any>[],
  { id, pId, rootPId }: { id: string; pId: string; rootPId: null | Key },
) => {
  const keyNodes: Record<Key, any> = {};
  const rootNodeList: any[] = [];

  // Fill in the map
  const nodeList = treeData.map((node) => {
    const clone = { ...node };
    const key = clone[id];
    keyNodes[key] = clone;
    clone.key = clone.key || key;
    return clone;
  });

  // Connect tree
  nodeList.forEach((node) => {
    const parentKey = node[pId];
    const parent = keyNodes[parentKey];

    // Fill parent
    if (parent) {
      parent.children = parent.children || [];
      parent.children.push(node);
    }

    // Fill root tree node
    if (parentKey === rootPId || (!parent && rootPId === null)) {
      rootNodeList.push(node);
    }
  });

  return rootNodeList;
};

const handleSort = (data: MenuData) => {
  return data.sort((a, b) => {
    if (a.orderNum === b.orderNum) {
      return new Date(a.createTime).getTime() - new Date(b.createTime).getTime();
    }

    return a.orderNum - b.orderNum;
  });
};

// 数组按 orderNum 排序
export const sortByOrderNum = (data: MenuData): MenuData => {
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

// 获取 tree 的所有父菜单 id
export const getParentIds = (data: any[]): number[] => {
  const parentIds = data.reduce<number[]>((acc, cur) => {
    if (cur.parentId) {
      acc.push(cur.parentId);
    }

    if (cur.children) {
      return [...acc, ...getParentIds(cur.children)];
    }

    return acc;
  }, []);

  return Array.from(new Set(parentIds));
};

// 获取 tree 的所有菜单 id
export const getMenuIds = (data: TreeData): number[] => {
  const menuIds = data.reduce<number[]>((acc, cur) => {
    acc.push(cur.id);

    if (cur.children) {
      return [...acc, ...getMenuIds(cur.children)];
    }

    return acc;
  }, []);

  return Array.from(new Set(menuIds));
};
