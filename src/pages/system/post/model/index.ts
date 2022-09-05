import { useInitActionType } from '@/hooks';
import { SysPostPostRemove } from '@/services/sys/SysPostService';
import type { ActionType } from '@ant-design/pro-components';
import { useMutation } from '@tanstack/react-query';
import { message } from 'antd';
import { atom, useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';

const namespace = 'systemPost';

interface AtomAddOrEdit {
  open: boolean;
  record?: API.SysPostVo;
  actionType: 'add' | 'edit';
}

// 主表格操作
const AtomMainTableActions = atom<ActionType>({
  key: `${namespace}AtomMainTableActions`,
  default: undefined,
});
export const useMainTableActionRef = () => useInitActionType(AtomMainTableActions);
export const useMainTableActions = () => useRecoilValue(AtomMainTableActions);

// 新建或编辑弹窗
const AtomAddOrEditModal = atom<AtomAddOrEdit>({
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
export const useAtomAddOrEditModalState = () => useRecoilValue(AtomAddOrEditModal);

// 删除岗位
export const useRemovePost = () => {
  const mainTableActions = useMainTableActions();

  return useMutation(
    async (postIds: number) => {
      await SysPostPostRemove({ postIds });
    },
    {
      onSuccess: () => {
        mainTableActions?.reload();
        mainTableActions?.clearSelected?.();
        message.success('删除成功');
      },
    },
  );
};
