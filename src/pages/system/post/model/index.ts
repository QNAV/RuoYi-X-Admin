import { useInitActionType } from '@/hooks';
import type { ActionType } from '@ant-design/pro-components';
import { atom, useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';

const namespace = 'systemPost';

// 主表格操作
const AtomMainTableActions = atom<ActionType>({
  key: `${namespace}AtomMainTableActions`,
  default: undefined,
});
export const useActionRefMainTable = () => useInitActionType(AtomMainTableActions);
export const useValueMainTableActions = () => useRecoilValue(AtomMainTableActions);

// 新建或编辑弹窗
const AtomAddOrEditModal = atom<{
  open: boolean;
  record?: API.SysPostVo;
  actionType: 'add' | 'edit';
}>({
  key: `${namespace}AtomAddOrEditModal`,
  default: {
    open: false,
    actionType: 'add',
  },
});
export const useShowAddModal = () => {
  const showAddModal = useSetRecoilState(AtomAddOrEditModal);
  return () => showAddModal({ open: true, actionType: 'add' });
};
export const useShowEditModal = () => {
  const showEditModal = useSetRecoilState(AtomAddOrEditModal);
  return (record: API.SysPostVo) => showEditModal({ open: true, actionType: 'edit', record });
};
export const useHideAddOrEditModal = () => useResetRecoilState(AtomAddOrEditModal);
export const useValueAddOrEditModal = () => useRecoilValue(AtomAddOrEditModal);
