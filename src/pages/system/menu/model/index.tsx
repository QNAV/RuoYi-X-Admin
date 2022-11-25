import type { SysMenuQueryBo, SysMenuVo } from '@/services/system/data-contracts';
import { sysMenuPostList, sysMenuPostRemove } from '@/services/system/System';
import { getOptions, parseSimpleTreeData, sortByOrderNum } from '@/utils';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { message, Modal, Typography } from 'antd';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { atomWithReset, useResetAtom } from 'jotai/utils';

const namespace = 'systemMenu';

// 已选中的菜单
const atomSelectedMenuData = atomWithReset<{
  hasSelected: boolean;
  selectedMenuId: number;
  selectedMenuName: string;
}>({
  hasSelected: false,
  selectedMenuId: 0,
  selectedMenuName: '根目录',
});
export const useResetSelectedMenuData = () => useResetAtom(atomSelectedMenuData);
export const useAtomStateSelectedMenuData = () => useAtom(atomSelectedMenuData);
export const useAtomValueSelectedMenuData = () => useAtomValue(atomSelectedMenuData);

// 新建菜单弹窗
const atomModalAdd = atomWithReset<boolean>(false);
export const useHideModalAdd = () => useResetAtom(atomModalAdd);
export const useShowModalAdd = () => {
  const setRecoilState = useSetAtom(atomModalAdd);
  return () => setRecoilState(true);
};
export const useAtomValueModalAdd = () => useAtomValue(atomModalAdd);

// 查询菜单列表
const queryMenuListKey = [namespace, 'list'];
export const useQueryMenuList = (params: SysMenuQueryBo = {}, onSuccess: (parentIds: number[]) => void) => {
  return useQuery(
    queryMenuListKey,
    async () => {
      const data = await sysMenuPostList(params);

      const treeData = parseSimpleTreeData(data, {
        id: 'menuId',
        pId: 'parentId',
        rootPId: null,
      });

      return {
        treeData: sortByOrderNum(treeData),
        map: data.reduce<Map<number, SysMenuVo>>((map, item) => {
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
export const useReFetchMenuList = () => {
  const queryClient = useQueryClient();
  return () => queryClient.invalidateQueries(queryMenuListKey);
};

// 查询菜单下拉列表
const queryMenuOptionsKey = [namespace, 'options'];
export const useQueryMenuOptions = () => {
  return useQuery(queryMenuOptionsKey, async () => {
    const data = await sysMenuPostList({});

    const treeData = parseSimpleTreeData(data, {
      id: 'menuId',
      pId: 'parentId',
      rootPId: null,
    });

    return {
      options: getOptions(sortByOrderNum(treeData)),
      map: data.reduce<Map<number, SysMenuVo>>((map, item) => {
        return map.set(item.menuId, item);
      }, new Map()),
    };
  });
};
export const useReFetchMenuOptions = () => {
  const queryClient = useQueryClient();
  return () => queryClient.invalidateQueries(queryMenuOptionsKey);
};

// 删除菜单
export const useDeleteMenu = () => {
  const reFetchMenuList = useReFetchMenuList();
  const reFetchMenuOptions = useReFetchMenuOptions();
  const resetSelectedMenuData = useResetSelectedMenuData();

  const { mutateAsync, isLoading } = useMutation(
    async (menuId: number) => {
      await sysMenuPostRemove({ menuId });
    },
    {
      onSuccess: async () => {
        resetSelectedMenuData();

        await Promise.all([reFetchMenuList(), reFetchMenuOptions()]);

        message.success('删除成功');
      },
    },
  );

  return (params: { menuId: number; menuName: string }) => {
    Modal.confirm({
      title: '操作确认',
      content: (
        <>
          确定删除菜单<Typography.Text code>{params.menuName}</Typography.Text>吗？
        </>
      ),
      onOk: () => mutateAsync(params.menuId),
      okButtonProps: { loading: isLoading },
    });
  };
};
