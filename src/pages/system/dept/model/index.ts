import { SysDeptPostList } from '@/services/sys/SysDeptService';
import { parseSimpleTreeData } from '@/utils';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
import { atom, useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';

const namespace = 'systemDept';

// 部门详情
const AtomDeptDetails = atom({
  key: `${namespace}AtomDeptDetails`,
  default: {
    open: false,
    deptId: 0,
    deptName: '',
  },
});
export const useValueDeptDetails = () => useRecoilValue(AtomDeptDetails);
export const useShowDeptDetails = () => {
  const setRecoilState = useSetRecoilState(AtomDeptDetails);
  return (deptId: number, deptName: string) => {
    setRecoilState({
      open: true,
      deptId,
      deptName,
    });
  };
};
export const useHideDeptDetails = () => useResetRecoilState(AtomDeptDetails);

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
