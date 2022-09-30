import { useInitActionType } from '@/hooks';
import type { ActionType } from '@ant-design/pro-components';
import { atom, useAtomValue, useSetAtom } from 'jotai';
import { atomWithReset, useResetAtom } from 'jotai/utils';

const AtomMainTableActions = atom<ActionType | undefined>(undefined);
export const useValueMainTableActions = () => useAtomValue(AtomMainTableActions);
export const useActionRefMainTable = () => useInitActionType(AtomMainTableActions);

const AtomSelectedDeptId = atom<number>(0);
export const useValueSelectedDeptId = () => useAtomValue(AtomSelectedDeptId);
export const useSetSelectedDeptId = () => useSetAtom(AtomSelectedDeptId);

// 重置密码弹窗
const AtomResetPasswordModal = atomWithReset({
  open: false,
  userId: 0,
  userName: '',
});
export const useShowResetPasswordModal = () => {
  const setRecoilState = useSetAtom(AtomResetPasswordModal);

  return (userId: number, userName: string) => {
    setRecoilState({
      open: true,
      userId,
      userName,
    });
  };
};
export const useHideResetPasswordModal = () => useResetAtom(AtomResetPasswordModal);
export const useValueResetPasswordModal = () => useAtomValue(AtomResetPasswordModal);
