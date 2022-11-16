import { useInitActionType } from '@/hooks';
import type { SysDictDataVo } from '@/services/system/data-contracts';
import type { ActionType } from '@ant-design/pro-components';
import { atom, useAtom, useAtomValue, useSetAtom } from 'jotai';
import { atomWithReset, useResetAtom } from 'jotai/utils';

const atomMainTableActions = atom<ActionType | undefined>(undefined);
export const useAtomValueMainTableActions = () => useAtomValue(atomMainTableActions);
export const useActionRefMainTable = () => useInitActionType(atomMainTableActions);

const atomCurDictType = atom<{ dictType: string; dictName: string }>({
  dictType: '',
  dictName: '',
});
export const useAtomValueCurDictType = () => useAtomValue(atomCurDictType);
export const useAtomCurDictType = () => useAtom(atomCurDictType);

const atomAddOrEditModal = atomWithReset<{ actionType: 'add' | 'edit'; open: boolean; record?: SysDictDataVo }>({
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
  return (record: SysDictDataVo) => {
    setAtom({ actionType: 'edit', open: true, record });
  };
};
