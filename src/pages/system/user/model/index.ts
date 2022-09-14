import { useInitActionType } from '@/hooks';
import type { ActionType } from '@ant-design/pro-components';
import { atom, useRecoilValue, useSetRecoilState } from 'recoil';

const namespace = 'systemUser';

const AtomMainTableActions = atom<ActionType>({
  key: `${namespace}AtomMainTableActions`,
  default: undefined,
});
export const useRecoilValueMainTableActions = () => useRecoilValue(AtomMainTableActions);
export const useMainTableActionRef = () => useInitActionType(AtomMainTableActions);

const AtomSelectedDeptId = atom<number>({
  key: `${namespace}AtomSelectedDeptId`,
  default: 0,
});
export const useRecoilValueSelectedDeptId = () => useRecoilValue(AtomSelectedDeptId);
export const useSetRecoilSelectedDeptId = () => useSetRecoilState(AtomSelectedDeptId);
