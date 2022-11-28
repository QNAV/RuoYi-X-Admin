import { useInitActionType } from '@/hooks';
import type { SysDictTypeVo } from '@/services/system/data-contracts';
import type { ActionType } from '@ant-design/pro-components';
import { atom, useAtomValue, useSetAtom } from 'jotai';
import { atomWithReset, useResetAtom } from 'jotai/utils';

const atomMainTableActions = atom<ActionType | undefined>(undefined);
export const useAtomValueMainTableActions = () => useAtomValue(atomMainTableActions);
export const useActionRefMainTable = () => useInitActionType(atomMainTableActions);

export enum DictTypeActionType {
  Add,
  Edit,
}
export const dictTypeTextMap = {
  [DictTypeActionType.Add]: '新增',
  [DictTypeActionType.Edit]: '编辑',
};
const atomAddOrEditModal = atomWithReset<{ actionType: DictTypeActionType; open: boolean; record?: SysDictTypeVo }>({
  actionType: DictTypeActionType.Add,
  open: false,
});
export const useAtomValueAddOrEditModal = () => useAtomValue(atomAddOrEditModal);
export const useHideAddOrEditModal = () => useResetAtom(atomAddOrEditModal);
export const useShowAddModal = () => {
  const setAtom = useSetAtom(atomAddOrEditModal);
  return () => {
    setAtom({ actionType: DictTypeActionType.Add, open: true });
  };
};
export const useShowEditModal = () => {
  const setAtom = useSetAtom(atomAddOrEditModal);
  return (record: SysDictTypeVo) => {
    setAtom({ actionType: DictTypeActionType.Edit, open: true, record });
  };
};
