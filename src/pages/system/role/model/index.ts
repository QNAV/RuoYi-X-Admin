import { useInitActionType } from '@/hooks';
import type { ActionType } from '@ant-design/pro-components';
import { atom, useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';

const namespace = 'systemRole';

// 角色列表操作
const AtomRoleListActions = atom<ActionType>({ key: `${namespace}AtomRoleListActions`, default: undefined });
export const useRoleListActions = () => useRecoilValue(AtomRoleListActions);
export const useRoleListActionRef = () => useInitActionType(AtomRoleListActions);

// 角色详情
const AtomRoleDetails = atom({
  key: `${namespace}AtomRoleDetails`,
  default: {
    visible: false,
    roleId: 0,
    roleName: '',
  },
});
export const useHideRoleDetails = () => useResetRecoilState(AtomRoleDetails);
export const useShowRoleDetails = () => useSetRecoilState(AtomRoleDetails);
export const useRoleDetailsVisibleValue = () => useRecoilValue(AtomRoleDetails);

// 编辑角色权限
const AtomRolePermission = atom({
  key: `${namespace}AtomRolePermission`,
  default: false,
});
export const useStartEditRolePermission = () => {
  const setRecoilState = useSetRecoilState(AtomRolePermission);
  return () => setRecoilState(true);
};
export const useEndEditRolePermission = () => useResetRecoilState(AtomRolePermission);
export const useEditRolePermissionValue = () => useRecoilValue(AtomRolePermission);
