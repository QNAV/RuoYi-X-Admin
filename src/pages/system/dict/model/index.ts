import { useInitActionType } from '@/hooks';
import type { SysDictTypeVo } from '@/services/system/data-contracts';
import type { ActionType } from '@ant-design/pro-components';
import { atom, useAtomValue, useSetAtom } from 'jotai';
import { atomWithReset, useResetAtom } from 'jotai/utils';

const atomMainTableActions = atom<ActionType | undefined>(undefined);
export const useAtomValueMainTableActions = () => useAtomValue(atomMainTableActions);
export const useActionRefMainTable = () => useInitActionType(atomMainTableActions);

const atomAddOrEditModal = atomWithReset<{ actionType: 'add' | 'edit'; open: boolean; record?: SysDictTypeVo }>({
  actionType: 'add',
  open: false,
});
export const useAtomValueAddOrEditModal = () => useAtomValue(atomAddOrEditModal);
export const useHideAddOrEditModal = () => useResetAtom(atomAddOrEditModal);
export const useShowAddModal = () => {
  const setAtom = useSetAtom(atomAddOrEditModal);
  return () => {
    setAtom({ actionType: 'add', open: true });
  };
};
export const useShowEditModal = () => {
  const setAtom = useSetAtom(atomAddOrEditModal);
  return (record: SysDictTypeVo) => {
    setAtom({ actionType: 'edit', open: true, record });
  };
};
