import { useInitActionType } from '@/hooks';
import type { ActionType } from '@ant-design/pro-components';
import { atom, useAtomValue, useSetAtom } from 'jotai';
import { atomWithReset, useResetAtom } from 'jotai/utils';

// 主表格操作
const AtomMainTableActions = atom<ActionType | undefined>(undefined);
export const useActionRefMainTable = () => useInitActionType(AtomMainTableActions);
export const useAtomValueMainTableActions = () => useAtomValue(AtomMainTableActions);

// 新建或编辑弹窗
const AtomAddOrEditModal = atomWithReset<{
  open: boolean;
  record?: API.SysPostVo;
  actionType: 'add' | 'edit';
}>({
  open: false,
  actionType: 'add',
});
export const useShowAddModal = () => {
  const showAddModal = useSetAtom(AtomAddOrEditModal);
  return () => showAddModal({ open: true, actionType: 'add' });
};
export const useShowEditModal = () => {
  const showEditModal = useSetAtom(AtomAddOrEditModal);
  return (record: API.SysPostVo) => showEditModal({ open: true, actionType: 'edit', record });
};
export const useHideAddOrEditModal = () => useResetAtom(AtomAddOrEditModal);
export const useValueAddOrEditModal = () => useAtomValue(AtomAddOrEditModal);
