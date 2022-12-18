import { atom, useAtomValue, useSetAtom } from 'jotai';

const atomGlobalTabsMutation = atom<{
  removeTab: (key: string) => void;
  clearTabs: () => void;
}>({
  removeTab: () => {},
  clearTabs: () => {},
});
export const useSetGlobalTabsMutation = () => useSetAtom(atomGlobalTabsMutation);
export const useAtomValueGlobalTabsMutation = () => useAtomValue(atomGlobalTabsMutation);
