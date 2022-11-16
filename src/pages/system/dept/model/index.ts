import type { SysDeptQueryBo, SysDeptVo } from '@/services/system/data-contracts';
import { sysDeptPostList } from '@/services/system/System';
import { parseSimpleTreeData } from '@/utils';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useAtomValue, useSetAtom } from 'jotai';
import { atomWithReset, useResetAtom } from 'jotai/utils';
import { useEffect } from 'react';

const namespace = 'systemDept';

// 部门详情
const atomDeptDetails = atomWithReset({
  open: false,
  deptId: 0,
  deptName: '',
});
export const useAtomValueDeptDetails = () => useAtomValue(atomDeptDetails);
export const useShowDeptDetails = () => {
  const setRecoilState = useSetAtom(atomDeptDetails);
  return (deptId: number, deptName: string) => {
    setRecoilState({
      open: true,
      deptId,
      deptName,
    });
  };
};
export const useHideDeptDetails = () => useResetAtom(atomDeptDetails);

// 部门列表
const queryDeptListKey = [namespace, 'list'];
export const useQueryDeptList = (params: SysDeptQueryBo, options: { onSuccess: (allParentIds: number[]) => void }) => {
  const e = useQuery(
    queryDeptListKey,
    async () => {
      const data = await sysDeptPostList(params);

      const treeData: SysDeptVo[] = parseSimpleTreeData(data, {
        id: 'deptId',
        pId: 'parentId',
        rootPId: null,
      });

      return {
        map: data.reduce<Map<number, SysDeptVo>>((prev, curr) => {
          return prev.set(curr.deptId, curr);
        }, new Map()),
        treeData,
        allParentIds: Array.from(
          data.reduce<Set<number>>((prev, curr) => {
            return prev.add(
              (
                curr as unknown as {
                  parentId: number;
                }
              ).parentId,
            );
          }, new Set()),
        ),
      };
    },
    {
      onSuccess: (data) => {
        options.onSuccess(data.allParentIds);
      },
    },
  );

  useEffect(() => {
    e.refetch();
  }, [params]);

  return e;
};
export const useReFetchDeptList = () => {
  const queryClient = useQueryClient();
  return () => queryClient.invalidateQueries(queryDeptListKey);
};

const queryDeptOptionsKey = [namespace, 'options'];
export const useQueryDeptOptions = () => {
  return useQuery(queryDeptOptionsKey, async () => {
    const data = await sysDeptPostList({});

    const treeData: SysDeptVo[] = parseSimpleTreeData(data, {
      id: 'deptId',
      pId: 'parentId',
      rootPId: null,
    });

    return treeData;
  });
};
export const useReFetchDeptOptions = () => {
  const queryClient = useQueryClient();
  return () => queryClient.invalidateQueries(queryDeptOptionsKey);
};
