import type { GetMenuListParams, MenuData } from '@/services/system';
import { reqGetMenuList } from '@/services/system';
import { getParentIds, parseSimpleTreeData, sortByOrderNum } from '@/utils';
import { useQuery } from 'react-query';

const queryKey = ['system', 'menu'];

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
