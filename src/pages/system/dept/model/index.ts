import { SysDeptPostList, SysDeptPostTreeSelect } from '@/services/sys/SysDeptService';
import type { TreeData } from '@/utils';
import { parseSimpleTreeData } from '@/utils';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { atom, useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';

const namespace = 'systemDept';

// 部门详情
const AtomDeptDetails = atom({
  key: `${namespace}AtomDeptDetails`,
  default: {
    visible: false,
    deptId: 0,
    deptName: '',
  },
});
export const useDeptDetailsVisibleValue = () => useRecoilValue(AtomDeptDetails);
export const useShowDeptDetails = () => useSetRecoilState(AtomDeptDetails);
export const useHideDeptDetails = () => useResetRecoilState(AtomDeptDetails);

// 搜索部门列表
const AtomSearchDeptListParams = atom<API.SysDeptQueryBo>({
  key: `${namespace}AtomSearchDeptListParams`,
  default: {},
});
export const useSearchDeptListParamsValue = () => useRecoilValue(AtomSearchDeptListParams);
export const useSetSearchDeptListParams = () => useSetRecoilState(AtomSearchDeptListParams);

// 部门列表
export const queryDeptListKey = [namespace, 'list'];
export const useQueryDeptList = () => {
  const params = useSearchDeptListParamsValue();

  return useQuery(queryDeptListKey, async () => {
    const data = await SysDeptPostList(params);

    const treeData: API.SysDeptVo[] = parseSimpleTreeData(data, {
      id: 'deptId',
      pId: 'parentId',
      rootPId: null,
    });

    return {
      data,
      treeData,
      allParentIds: data.map((item) => item.parentId!),
    };
  });
};

export const queryDeptTreeDataKey = [namespace, 'treeData'];
export const useQueryDeptTreeData = () => {
  return useQuery(queryDeptTreeDataKey, async () => {
    return (await SysDeptPostTreeSelect({})) as TreeData[];
  });
};

export const useHandleSearchDeptList = () => {
  const setSearchDeptListParams = useSetSearchDeptListParams();
  const searchDeptListParamsValue = useSearchDeptListParamsValue();

  const queryDeptList = useQueryDeptList();

  useEffect(() => {
    queryDeptList.refetch();
  }, [searchDeptListParamsValue]);

  return (params: API.SysDeptQueryBo) => {
    setSearchDeptListParams(params);
  };
};
