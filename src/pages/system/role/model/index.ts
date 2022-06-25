import type { ActionType } from '@ant-design/pro-components';
import { atom } from 'recoil';

const key = 'systemRole';

export const tableActionsAtom = atom<ActionType>({ key: `${key}TableActions` });
