import { SysDeptPostList } from '@/services/sys/SysDeptService';
import { parseSimpleTreeData } from '@/utils';
import { useQuery } from '@tanstack/react-query';
import { atom, useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';

export interface DeptItemData {
  createBy: string;
  createTime: string;
  updateBy: string;
  updateTime?: any;
  parentName?: any;
  parentId: number;
  children: DeptItemData[];
  deptId: number;
  deptName: string;
  orderNum: number;
  leader: string;
  phone: string;
  email: string;
  status: string;
  delFlag: string;
  ancestors: string;
}
export type DeptTreeData = DeptItemData[];

const namespace = 'systemDept';

const AtomSelectedDeptId = atom<number>({ key: `${namespace}AtomSelectedDeptId`, default: 0 });
export const useSelectedDeptIdValue = () => useRecoilValue(AtomSelectedDeptId);
export const useSetSelectedDeptId = () => useSetRecoilState(AtomSelectedDeptId);
export const useHideDetails = () => useResetRecoilState(AtomSelectedDeptId);

export const queryDeptListKey = [namespace, 'list'];
export const useQueryDeptList = (params: API.SysDeptQueryBo = {}) => {
  return useQuery(
    queryDeptListKey,
    async () => {
      const data = await SysDeptPostList(params);

      const treeData: DeptTreeData = parseSimpleTreeData(data, {
        id: 'deptId',
        pId: 'parentId',
        rootPId: null,
      });

      return {
        list: data,
        treeData,
      };
    },
    {},
  );
};
