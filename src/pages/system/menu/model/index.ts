import type { GetMenuListParams, MenuData } from '@/services';
import { reqDeleteMenu, reqGetMenuList } from '@/services';
import { getParentIds, parseSimpleTreeData, sortByOrderNum } from '@/utils';
import { message, Modal } from 'antd';
import type { Key } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { atom, useResetRecoilState } from 'recoil';

const key = 'systemMenu';

const queryKey = [key, 'list'];

export const selectedKeysAtom = atom<Key[]>({ key: `${key}SelectedKeys`, default: [] });

export const visibleCreateModalAtom = atom<boolean>({ key: `${key}VisibleCreateModal`, default: false });

export const useQueryMenuList = (params?: GetMenuListParams) => {
  return useQuery(
    queryKey,
    async () => {
      const data = await reqGetMenuList(params);

      const treeData: MenuData = parseSimpleTreeData(data, {
        id: 'menuId',
        pId: 'parentId',
        rootPId: null,
      });

      return {
        treeData: sortByOrderNum(treeData),
        map: data.reduce((map, item) => {
          return { ...map, [item.menuId]: item };
        }, {}),
        parentIds: getParentIds(data),
      };
    },
    {
      refetchOnWindowFocus: false,
    },
  );
};

// 刷新菜单列表
export const useRefreshMenuList = () => {
  const queryClient = useQueryClient();

  return () => queryClient.invalidateQueries(queryKey);
};

// 删除菜单
export const useDeleteMenu = () => {
  const refreshMenuList = useRefreshMenuList();
  const resetSelectedKeys = useResetRecoilState(selectedKeysAtom);

  return useMutation(async (menuId: number) => {
    Modal.confirm({
      title: MODAL_CONFIRM_TITLE,
      content: '确定删除该菜单吗？',
      onOk: async () => {
        await reqDeleteMenu(menuId);

        await refreshMenuList();

        resetSelectedKeys();

        message.success('删除成功');
      },
    });
  });
};
