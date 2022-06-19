import type { GetMenuListParams, MenuData } from '@/services';
import { reqDeleteMenu, reqGetMenuList } from '@/services';
import { getParentIds, parseSimpleTreeData, sortByOrderNum } from '@/utils';
import { message, Modal } from 'antd';
import { useMutation, useQuery } from 'react-query';
import { atom, useResetRecoilState } from 'recoil';

const key = 'systemMenu';

const queryKey = [key, 'list'];

export const selectedMenuIdAtom = atom<string>({ key: `${key}SelectedMenuId`, default: '0' });

export const visibleCreateModalAtom = atom<boolean>({ key: `${key}VisibleCreateModal`, default: false });

// 查询菜单列表
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

// 删除菜单
export const useDeleteMenu = () => {
  const { refetch } = useQueryMenuList();
  const resetSelectedKeys = useResetRecoilState(selectedMenuIdAtom);

  return useMutation(async (menuId: string) => {
    Modal.confirm({
      title: MODAL_CONFIRM_TITLE,
      content: '确定删除该菜单吗？',
      onOk: async () => {
        await reqDeleteMenu(menuId);

        await refetch();

        resetSelectedKeys();

        message.success('删除成功');
      },
    });
  });
};
