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
const atomResetPwdModal = atomWithReset({
  open: false,
  userId: 0,
  userName: '',
});
export const useShowResetPwdModal = () => {
  const setRecoilState = useSetAtom(atomResetPwdModal);
  return (userId: number, userName: string) => {
    setRecoilState({
      open: true,
      userId,
      userName,
    });
  };
};
export const useHideResetPwdModal = () => useResetAtom(atomResetPwdModal);
export const useAtomValueResetPwdModal = () => useAtomValue(atomResetPwdModal);

// 新增或编辑用户弹窗
const atomAddOrEditModal = atomWithReset<{ open: boolean; actionType: 'add' | 'edit'; record?: API.SysUserVo }>({
  open: false,
  actionType: 'add',
});
export const useShowAddModal = () => {
  const setRecoilState = useSetAtom(atomAddOrEditModal);
  return () => {
    setRecoilState({
      open: true,
      actionType: 'add',
    });
  };
};
export const useShowEditModal = () => {
  const setRecoilState = useSetAtom(atomAddOrEditModal);
  return (record: API.SysUserVo) => {
    setRecoilState({
      open: true,
      actionType: 'edit',
      record,
    });
  };
};
export const useHideAddOrEditModal = () => useResetAtom(atomAddOrEditModal);
export const useAtomValueAddOrEditModal = () => useAtomValue(atomAddOrEditModal);
