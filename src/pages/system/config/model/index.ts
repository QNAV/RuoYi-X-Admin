import { useInitActionType } from '@/hooks';
import type { ActionType } from '@ant-design/pro-components';
import { atom, useAtomValue, useSetAtom } from 'jotai';
import { atomWithReset, useResetAtom } from 'jotai/utils';

const atomMainTableActions = atom<ActionType | undefined>(undefined);
export const useAtomValueMainTableActions = () => useAtomValue(atomMainTableActions);
export const useActionRefMainTable = () => useInitActionType(atomMainTableActions);

const atomAddOrEditModal = atomWithReset<{
  open: boolean;
  actionType: 'add' | 'edit';
  record?: API.SysConfigVo;
}>({
  open: false,
  actionType: 'add',
});
export const useAtomValueAddOrEditModal = () => useAtomValue(atomAddOrEditModal);
export const useShowAddModal = () => {
  const setAtom = useSetAtom(atomAddOrEditModal);
  return () => {
    setAtom({
      open: true,
      actionType: 'add',
    });
  };
};
export const useShowEditModal = () => {
  const setAtom = useSetAtom(atomAddOrEditModal);
  return (record: API.SysConfigVo) => {
    setAtom({
      open: true,
      actionType: 'edit',
      record,
    });
  };
};
export const useHideAddOrEditModal = () => useResetAtom(atomAddOrEditModal);
