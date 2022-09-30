import { useInitActionType } from '@/hooks';
import type { ActionType } from '@ant-design/pro-components';
import { atom, useAtomValue, useSetAtom } from 'jotai';
import { atomWithReset, useResetAtom } from 'jotai/utils';

// 角色列表操作
const AtomRoleListActions = atom<ActionType | undefined>(undefined);
export const useRoleListActions = () => useAtomValue(AtomRoleListActions);
export const useRoleListActionRef = () => useInitActionType(AtomRoleListActions);

// 角色详情
const AtomRoleDetails = atomWithReset({
  visible: false,
  roleId: 0,
  roleName: '',
});
export const useHideRoleDetails = () => useResetAtom(AtomRoleDetails);
export const useShowRoleDetails = () => useSetAtom(AtomRoleDetails);
export const useRoleDetailsVisibleValue = () => useAtomValue(AtomRoleDetails);
