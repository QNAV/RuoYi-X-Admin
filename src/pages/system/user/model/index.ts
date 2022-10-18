import { useInitActionType } from '@/hooks';
import type { ActionType } from '@ant-design/pro-components';
import { atom, useAtomValue, useSetAtom } from 'jotai';
import { atomWithReset, useResetAtom } from 'jotai/utils';

export * from './columns';

const atomMainTableActions = atom<ActionType | undefined>(undefined);
export const useAtomValueMainTableActions = () => useAtomValue(atomMainTableActions);
export const useActionRefMainTable = () => useInitActionType(atomMainTableActions);

const atomSelectedDeptId = atom<number>(0);
export const useAtomValueSelectedDeptId = () => useAtomValue(atomSelectedDeptId);
export const useSetAtomSelectedDeptId = () => useSetAtom(atomSelectedDeptId);

// 重置密码弹窗
const atomResetPwdModal = atomWithReset<{
  open: boolean;
  record?: API.SysUserVo;
}>({
  open: false,
});
export const useShowResetPwdModal = () => {
  const setRecoilState = useSetAtom(atomResetPwdModal);
  return (record: API.SysUserVo) => {
    setRecoilState({
      open: true,
      record,
    });
  };
};
export const useHideResetPwdModal = () => useResetAtom(atomResetPwdModal);
export const useAtomValueResetPwdModal = () => useAtomValue(atomResetPwdModal);

// 新增或编辑用户弹窗
const atomAddOrEditModal = atomWithReset<{ open: boolean; actionType: 'add' | 'edit'; userId: number }>({
  open: false,
  actionType: 'add',
  userId: 0,
});
export const useShowAddModal = () => {
  const setRecoilState = useSetAtom(atomAddOrEditModal);
  return () => {
    setRecoilState({
      open: true,
      actionType: 'add',
      userId: 0,
    });
  };
};
export const useShowEditModal = () => {
  const setRecoilState = useSetAtom(atomAddOrEditModal);
  return (userId: number) => {
    setRecoilState({
      open: true,
      actionType: 'edit',
      userId,
    });
  };
};
export const useHideAddOrEditModal = () => useResetAtom(atomAddOrEditModal);
export const useAtomValueAddOrEditModal = () => useAtomValue(atomAddOrEditModal);
