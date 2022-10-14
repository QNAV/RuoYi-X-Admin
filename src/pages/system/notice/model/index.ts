import { useInitActionType } from '@/hooks';
import { SysDictDataGetType } from '@/services/sys/SysDictDataService';
import { convertDict2ValueEnum } from '@/utils';
import type { ActionType } from '@ant-design/pro-components';
import { useQuery } from '@tanstack/react-query';
import { atom, useAtomValue, useSetAtom } from 'jotai';
import { atomWithReset, useResetAtom } from 'jotai/utils';

const atomMainTableActions = atom<ActionType | undefined>(undefined);
export const useAtomValueMainTableActions = () => useAtomValue(atomMainTableActions);
export const useMainTableActionRef = () => useInitActionType(atomMainTableActions);

const atomAddOrEditModal = atomWithReset<{
  open: boolean;
  actionType: 'add' | 'edit';
  record?: API.SysNoticeVo;
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
  return (record: API.SysNoticeVo) => {
    setAtom({
      open: true,
      actionType: 'edit',
      record,
    });
  };
};
export const useHideAddOrEditModal = () => useResetAtom(atomAddOrEditModal);

// 公告类型字典
const queryKey = ['system', 'notice', 'dict'];
export const useNoticeTypeDict = () => {
  return useQuery(queryKey, async () => {
    const dict = await SysDictDataGetType({ dictType: 'sys_notice_type' });

    return convertDict2ValueEnum(dict);
  });
};
