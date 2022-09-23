import { useInitActionType } from '@/hooks';
import type { ActionType } from '@ant-design/pro-components';
import { atom, useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';

const namespace = 'systemUser';

const AtomMainTableActions = atom<ActionType>({
  key: `${namespace}AtomMainTableActions`,
  default: undefined,
});
export const useValueMainTableActions = () => useRecoilValue(AtomMainTableActions);
export const useActionRefMainTable = () => useInitActionType(AtomMainTableActions);

const AtomSelectedDeptId = atom<number>({
  key: `${namespace}AtomSelectedDeptId`,
  default: 0,
});
export const useValueSelectedDeptId = () => useRecoilValue(AtomSelectedDeptId);
export const useSetSelectedDeptId = () => useSetRecoilState(AtomSelectedDeptId);

// 重置密码弹窗
const AtomResetPasswordModal = atom({
  key: `${namespace}AtomResetPasswordModal`,
  default: {
    open: false,
    userId: 0,
    userName: '',
  },
});
export const useShowResetPasswordModal = () => {
  const setRecoilState = useSetRecoilState(AtomResetPasswordModal);

  return (userId: number, userName: string) => {
    setRecoilState({
      open: true,
      userId,
      userName,
    });
  };
};
export const useHideResetPasswordModal = () => useResetRecoilState(AtomResetPasswordModal);
export const useValueResetPasswordModal = () => useRecoilValue(AtomResetPasswordModal);
