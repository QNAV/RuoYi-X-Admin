import { useInitActionType } from '@/hooks';
import type { SysNoticeVo } from '@/services/system/data-contracts';
import type { ActionType } from '@ant-design/pro-components';
import { atom, useAtomValue, useSetAtom } from 'jotai';
import { atomWithReset, useResetAtom } from 'jotai/utils';

const atomMainTableActions = atom<ActionType | undefined>(undefined);
export const useAtomValueMainTableActions = () => useAtomValue(atomMainTableActions);
export const useActionRefMainTable = () => useInitActionType(atomMainTableActions);

export enum NoticeActionType {
  Add,
  Edit,
}
export const noticeActionTypeTextMap = {
  [NoticeActionType.Add]: '新增',
  [NoticeActionType.Edit]: '编辑',
};
const atomAddOrEditModal = atomWithReset<{
  open: boolean;
  actionType: NoticeActionType;
  record?: SysNoticeVo;
}>({
  open: false,
  actionType: NoticeActionType.Add,
});
export const useAtomValueAddOrEditModal = () => useAtomValue(atomAddOrEditModal);
export const useShowAddModal = () => {
  const setAtom = useSetAtom(atomAddOrEditModal);
  return () => {
    setAtom({
      open: true,
      actionType: NoticeActionType.Add,
    });
  };
};
export const useShowEditModal = () => {
  const setAtom = useSetAtom(atomAddOrEditModal);
  return (record: SysNoticeVo) => {
    setAtom({
      open: true,
      actionType: NoticeActionType.Edit,
      record,
    });
  };
};
export const useHideAddOrEditModal = () => useResetAtom(atomAddOrEditModal);
