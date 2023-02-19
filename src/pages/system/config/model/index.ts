import { useInitActionType } from '@/hooks';
import { DictTypeActionType } from '@/pages/system/dict/model';
import type { SysConfigVo } from '@/services/system/data-contracts';
import type { ActionType } from '@ant-design/pro-components';
import { atom, useAtomValue, useSetAtom } from 'jotai';
import { atomWithReset, useResetAtom } from 'jotai/utils';

const atomMainTableActions = atom<ActionType | undefined>(undefined);
export const useAtomValueMainTableActions = () => useAtomValue(atomMainTableActions);
export const useActionRefMainTable = () => useInitActionType(atomMainTableActions);

export enum ConfigActionType {
  Add,
  Edit,
}
export const configActionTypeTextMap = {
  [DictTypeActionType.Add]: '新增',
  [DictTypeActionType.Edit]: '编辑',
};
export const atomAddOrEditModal = atomWithReset<{
  open: boolean;
  actionType: ConfigActionType;
  record?: SysConfigVo;
}>({
  open: false,
  actionType: ConfigActionType.Add,
});
export const useAtomValueAddOrEditModal = () => useAtomValue(atomAddOrEditModal);
export const useShowAddModal = () => {
  const setAtom = useSetAtom(atomAddOrEditModal);
  return () => {
    setAtom({
      open: true,
      actionType: ConfigActionType.Add,
    });
  };
};
export const useShowEditModal = () => {
  const setAtom = useSetAtom(atomAddOrEditModal);
  return (record: SysConfigVo) => {
    setAtom({
      open: true,
      actionType: ConfigActionType.Edit,
      record,
    });
  };
};
export const useHideAddOrEditModal = () => useResetAtom(atomAddOrEditModal);
