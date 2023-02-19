import { useInitActionType } from '@/hooks';
import type { SysUserVo } from '@/services/system/data-contracts';
import type { ActionType } from '@ant-design/pro-components';
import { atom, useAtomValue, useSetAtom } from 'jotai';
import { atomWithReset, useResetAtom } from 'jotai/utils';

export * from './columns';

const atomMainTableActions = atom<ActionType | undefined>(undefined);
export const useAtomValueMainTableActions = () => useAtomValue(atomMainTableActions);
export const useActionRefMainTable = () => useInitActionType(atomMainTableActions);

// 筛选部门ID
const atomSelectedDeptId = atom<number>(0);
export const useAtomValueSelectedDeptId = () => useAtomValue(atomSelectedDeptId);
export const useSetAtomSelectedDeptId = () => useSetAtom(atomSelectedDeptId);

// 重置密码弹窗
interface AtomResetPwdModal {
  open: boolean;
  record?: SysUserVo;
}
const atomResetPwdModal = atomWithReset<AtomResetPwdModal>({
  open: false,
});
export const useShowResetPwdModal = () => {
  const setRecoilState = useSetAtom(atomResetPwdModal);
  return (record: SysUserVo) => {
    setRecoilState({
      open: true,
      record,
    });
  };
};
export const useHideResetPwdModal = () => useResetAtom(atomResetPwdModal);
export const useAtomValueResetPwdModal = () => useAtomValue(atomResetPwdModal);

// 新增或编辑用户弹窗
interface AtomAddOrEditModal {
  open: boolean;
  actionType: 'add' | 'edit';
  userId?: number;
}
const atomAddOrEditModal = atomWithReset<AtomAddOrEditModal>({
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
