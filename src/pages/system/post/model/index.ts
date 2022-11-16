import { useInitActionType } from '@/hooks';
import type { SysPostVo } from '@/services/system/data-contracts';
import type { ActionType } from '@ant-design/pro-components';
import { atom, useAtomValue, useSetAtom } from 'jotai';
import { atomWithReset, useResetAtom } from 'jotai/utils';

// 主表格操作
const atomMainTableActions = atom<ActionType | undefined>(undefined);
export const useActionRefMainTable = () => useInitActionType(atomMainTableActions);
export const useAtomValueMainTableActions = () => useAtomValue(atomMainTableActions);

// 新建或编辑弹窗
const atomAddOrEditModal = atomWithReset<{
  open: boolean;
  record?: SysPostVo;
  actionType: 'add' | 'edit';
}>({
  open: false,
  actionType: 'add',
});
export const useShowAddModal = () => {
  const showAddModal = useSetAtom(atomAddOrEditModal);
  return () => showAddModal({ open: true, actionType: 'add' });
};
export const useShowEditModal = () => {
  const showEditModal = useSetAtom(atomAddOrEditModal);
  return (record: SysPostVo) => showEditModal({ open: true, actionType: 'edit', record });
};
export const useHideAddOrEditModal = () => useResetAtom(atomAddOrEditModal);
export const useValueAddOrEditModal = () => useAtomValue(atomAddOrEditModal);
