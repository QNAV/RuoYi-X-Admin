import { useInitActionType } from '@/hooks';
import type { ActionType } from '@ant-design/pro-components';
import { atom, useRecoilValue, useSetRecoilState } from 'recoil';

const namespace = 'systemUser';

const AtomMainTableActions = atom<ActionType>({
  key: `${namespace}AtomMainTableActions`,
  default: undefined,
});
export const useValueMainTableActions = () => useRecoilValue(AtomMainTableActions);
export const useActionRefMainTable = () => useInitActionType(AtomMainTableActions);

const AtomSelectedDeptId = atom<number>({
  key: `${namespace}AtomSelectedDeptId`,
  default: 0,
});
export const useValueSelectedDeptId = () => useRecoilValue(AtomSelectedDeptId);
export const useSetSelectedDeptId = () => useSetRecoilState(AtomSelectedDeptId);
