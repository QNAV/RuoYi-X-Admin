import { atom } from 'recoil';

const key = 'toolGen';

export const previewIdAtom = atom({
  key: `${key}PreviewIdAtom`,
  default: 0,
});
