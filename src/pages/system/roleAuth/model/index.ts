import { useInitActionType } from '@/hooks';
import type { ActionType } from '@ant-design/pro-components';
import { atom, useAtomValue } from 'jotai';

const atomMainTable = atom<ActionType | undefined>(undefined);
export const useActionsMainTable = () => useAtomValue(atomMainTable);
export const useActionRefMainTable = () => useInitActionType(atomMainTable);
