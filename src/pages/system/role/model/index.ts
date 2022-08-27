import { useInitActionType } from '@/hooks';
import type { ActionType } from '@ant-design/pro-components';
import { atom, useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';

const namespace = 'systemRole';

// 主表格操作
const AtomMainTableActions = atom<ActionType>({ key: `${namespace}AtomMainTableActions`, default: undefined });
export const useMainTableActions = () => useRecoilValue(AtomMainTableActions);
export const useMainTableActionRef = () => useInitActionType(AtomMainTableActions);

// 角色详情
const AtomRoleDetails = atom({
  key: `${namespace}AtomRoleDetails`,
  default: {
    visible: false,
    roleId: 0,
  },
});
export const useHideRoleDetails = () => useResetRecoilState(AtomRoleDetails);
export const useShowRoleDetails = () => useSetRecoilState(AtomRoleDetails);
export const useRoleDetailsVisibleValue = () => useRecoilValue(AtomRoleDetails);
