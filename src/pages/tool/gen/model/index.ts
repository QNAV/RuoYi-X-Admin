import { useInitActionType } from '@/hooks';
import type { ActionType } from '@ant-design/pro-components';
import { atom, useAtomValue, useSetAtom } from 'jotai';
import { atomWithReset, useResetAtom } from 'jotai/utils';

const AtomMainTableActions = atom<ActionType | undefined>(undefined);
export const useActionRefMainTable = () => useInitActionType(AtomMainTableActions);
export const useAtomValueMainTableActions = () => useAtomValue(AtomMainTableActions);

const AtomSelectedTableId = atomWithReset<number>(0);
export const useAtomValueSelectedTableId = () => useAtomValue(AtomSelectedTableId);
export const useShowPreviewModal = () => useSetAtom(AtomSelectedTableId);
export const useHidePreviewModal = () => useResetAtom(AtomSelectedTableId);
