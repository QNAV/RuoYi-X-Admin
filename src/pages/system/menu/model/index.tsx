import { MenuType } from '@/constants';
import type { OptionsParentId } from '@/pages/system/menu/components/ButtonCreate';
import { SysMenuPostList, SysMenuPostRemove } from '@/services/sys/SysMenuService';
import { parseSimpleTreeData, sortByOrderNum } from '@/utils';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { message, Modal, Typography } from 'antd';
import { atom, useRecoilState, useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';

const namespace = 'systemMenu';

const getOptions = (data?: API.SysMenu[]): OptionsParentId[] => {
  const formatOptions = (items: API.SysMenu[]): OptionsParentId[] => {
    return items
      .filter((item) => item.menuType !== MenuType.F)
      .map(({ menuId, menuName, children }) => {
        return { menuId: menuId!, menuName, children: children ? formatOptions(children) : [] };
      });
  };

  return [{ menuId: 0, menuName: '根目录', children: data ? formatOptions(data) : [] }];
};

// 已选中的菜单
const AtomSelectedMenuData = atom<{
  hasSelected: boolean;
  selectedMenuId: number;
  selectedMenuName: string;
}>({
  key: `${namespace}SelectedMenuData`,
  default: {
    hasSelected: false,
    selectedMenuId: 0,
    selectedMenuName: '根目录',
  },
});
export const useResetSelectedMenuData = () => useResetRecoilState(AtomSelectedMenuData);
export const useStateSelectedMenuData = () => useRecoilState(AtomSelectedMenuData);
export const useValueSelectedMenuData = () => useRecoilValue(AtomSelectedMenuData);

// 新建菜单弹窗
const AtomCreateModalState = atom<boolean>({ key: `${namespace}VisibleCreateModal`, default: false });
export const useHideCreateModal = () => useResetRecoilState(AtomCreateModalState);
export const useShowCreateModal = () => {
  const setRecoilState = useSetRecoilState(AtomCreateModalState);
  return () => setRecoilState(true);
};
export const useValueCreateModal = () => useRecoilValue(AtomCreateModalState);

// 查询菜单列表
const queryMenuListKey = [namespace, 'list'];
export const useReFetchMenuList = () => {
  const queryClient = useQueryClient();
  return () => queryClient.invalidateQueries(queryMenuListKey);
};
export const useQueryMenuList = (params: API.SysMenuQueryBo = {}) => {
  return useQuery(queryMenuListKey, async () => {
    const data = await SysMenuPostList(params);

    const treeData: API.SysMenu[] = parseSimpleTreeData(data, {
      id: 'menuId',
      pId: 'parentId',
      rootPId: null,
    });

    return {
      treeData: sortByOrderNum(treeData),
      map: data.reduce<Map<number, API.SysMenu0>>((map, item) => {
        return map.set(item.menuId, item);
      }, new Map()),
      parentIds: Array.from(
        data.reduce<Set<number>>((set, item) => {
          // @ts-ignore
          return set.add(item.parentId);
        }, new Set()),
      ),
    };
  });
};

// 查询菜单下拉列表
const queryMenuOptionsKey = [namespace, 'options'];
export const useReFetchMenuOptions = () => {
  const queryClient = useQueryClient();
  return () => queryClient.invalidateQueries(queryMenuOptionsKey);
};
export const useQueryMenuOptions = () => {
  return useQuery(queryMenuOptionsKey, async () => {
    const data = await SysMenuPostList({});

    const treeData: API.SysMenu[] = parseSimpleTreeData(data, {
      id: 'menuId',
      pId: 'parentId',
      rootPId: null,
    });

    return {
      options: getOptions(sortByOrderNum(treeData)),
      map: data.reduce((map, item) => {
        return { ...map, [item.menuId]: item };
      }, {}),
    };
  });
};

// 删除菜单
export const useDeleteMenu = () => {
  const reFetchMenuList = useReFetchMenuList();
  const reFetchMenuOptions = useReFetchMenuOptions();
  const resetSelectedMenuId = useResetSelectedMenuData();

  return useMutation(async ({ menuId, menuName }: { menuId: number; menuName: string }) => {
    Modal.confirm({
      title: '删除菜单',
      content: (
        <>
          确定删除菜单<Typography.Text code>{menuName}</Typography.Text>吗？
        </>
      ),
      onOk: async () => {
        await SysMenuPostRemove({ menuId });

        await Promise.all([reFetchMenuList(), reFetchMenuOptions()]);

        resetSelectedMenuId();

        message.success('删除成功');
      },
    });
  });
};
