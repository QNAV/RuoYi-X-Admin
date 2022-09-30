import { SysDeptPostList } from '@/services/sys/SysDeptService';
import { parseSimpleTreeData } from '@/utils';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useAtomValue, useSetAtom } from 'jotai';
import { atomWithReset, useResetAtom } from 'jotai/utils';
import { useEffect } from 'react';

const namespace = 'systemDept';

// 部门详情
const AtomDeptDetails = atomWithReset({
  open: false,
  deptId: 0,
  deptName: '',
});
export const useValueDeptDetails = () => useAtomValue(AtomDeptDetails);
export const useShowDeptDetails = () => {
  const setRecoilState = useSetAtom(AtomDeptDetails);
  return (deptId: number, deptName: string) => {
    setRecoilState({
      open: true,
      deptId,
      deptName,
    });
  };
};
export const useHideDeptDetails = () => useResetAtom(AtomDeptDetails);

// 部门列表
const queryDeptListKey = [namespace, 'list'];
export const useQueryDeptList = (
  params: API.SysDeptQueryBo,
  options: { onSuccess: (allParentIds: number[]) => void },
) => {
  const e = useQuery(
    queryDeptListKey,
    async () => {
      const data = await SysDeptPostList(params);

      const treeData: API.SysDeptVo[] = parseSimpleTreeData(data, {
        id: 'deptId',
        pId: 'parentId',
        rootPId: null,
      });

      return {
        map: data.reduce<Map<number, API.SysDeptVo>>((prev, curr) => {
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
    const data = await SysDeptPostList({});

    const treeData: API.SysDeptVo[] = parseSimpleTreeData(data, {
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
