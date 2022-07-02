import type { ActionType } from '@ant-design/pro-components';
import { atom } from 'recoil';

const key = 'toolGen';

export const tableActionsAtom = atom<ActionType>({
  key: `${key}TableActionsAtom`,
});

export const previewIdAtom = atom({
  key: `${key}PreviewIdAtom`,
  default: 0,
});
