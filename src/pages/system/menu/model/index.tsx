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
const AtomCreateModal = atom<boolean>({ key: `${namespace}CreateModal`, default: false });
export const useHideCreateModal = () => useResetRecoilState(AtomCreateModal);
export const useShowCreateModal = () => {
  const setRecoilState = useSetRecoilState(AtomCreateModal);
  return () => setRecoilState(true);
};
export const useValueCreateModal = () => useRecoilValue(AtomCreateModal);

// 查询菜单列表
const queryMenuListKey = [namespace, 'list'];
export const useReFetchMenuList = () => {
  const queryClient = useQueryClient();
  return () => queryClient.invalidateQueries(queryMenuListKey);
};
export const useQueryMenuList = (params: API.SysMenuQueryBo = {}, onSuccess: (parentIds: number[]) => void) => {
  return useQuery(
    queryMenuListKey,
    async () => {
      const data = await SysMenuPostList(params);

      const treeData: API.SysMenu[] = parseSimpleTreeData(data, {
        id: 'menuId',
        pId: 'parentId',
        rootPId: null,
      });

      return {
        treeData: sortByOrderNum(treeData),
        map: data.reduce<Map<number, API.SysMenu>>((map, item) => {
          return map.set(item.menuId, item);
        }, new Map()),
        parentIds: Array.from(
          data.reduce<Set<number>>((set, item) => {
            return set.add((item as unknown as { parentId: number }).parentId);
          }, new Set()),
        ),
      };
    },
    {
      onSuccess: (data) => {
        onSuccess(data.parentIds);
      },
    },
  );
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
      map: data.reduce<Map<number, API.SysMenu>>((map, item) => {
        return map.set(item.menuId, item);
      }, new Map()),
    };
  });
};

// 删除菜单
export const useDeleteMenu = () => {
  const reFetchMenuList = useReFetchMenuList();
  const reFetchMenuOptions = useReFetchMenuOptions();
  const resetSelectedMenuData = useResetSelectedMenuData();

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

        resetSelectedMenuData();

        await Promise.all([reFetchMenuList(), reFetchMenuOptions()]);

        message.success('删除成功');
      },
    });
  });
};
