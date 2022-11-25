import { cloneDeep } from 'lodash-es';

export interface TreeData {
  id: number;
  label: string;
  parentId: number;
  weight: number;
  children?: TreeData[];
}

export const parseSimpleTreeData = <T extends Record<string, any>>(
  treeData: T[],
  { id, pId, rootPId }: { id: keyof T; pId: keyof T; rootPId: keyof T | null },
) => {
  const keyNodes: Partial<Record<keyof T, any>> = {};
  const rootNodeList: T[] = [];

  // Fill in the map
  const nodeList = treeData.map((node) => {
    const clone: { key: string } & T = { key: '', ...node };
    const key = clone[id];
    keyNodes[key] = clone;
    if (!clone.key) {
      clone.key = key;
    }
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

// 获取 tree 的所有父菜单 id
export const getParentIds = (data: TreeData[]): number[] => {
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
export const getMenuIds = (data: TreeData[]): number[] => {
  const menuIds = data.reduce<number[]>((acc, cur) => {
    acc.push(cur.id);

    if (cur.children) {
      return [...acc, ...getMenuIds(cur.children)];
    }

    return acc;
  }, []);

  return Array.from(new Set(menuIds));
};

export const filterCheckedTree = (tree: TreeData[], checkedKeys: number[]): TreeData[] => {
  const newTree: TreeData[] = [];

  const cloneTree = cloneDeep(tree);

  cloneTree.forEach((item) => {
    if (item.children) {
      item.children = filterCheckedTree(item.children, checkedKeys);
    }

    if (checkedKeys.includes(item.id) || (item?.children && item.children.length > 0)) {
      newTree.push(item);
    }
  });

  return newTree;
};

export const getExpandedKeys = (list: TreeData[]) => {
  const result: number[] = [];

  list.forEach(({ id, children }) => {
    result.push(id);

    if (children) {
      result.push(...getExpandedKeys(children));
    }
  });

  return result;
};
