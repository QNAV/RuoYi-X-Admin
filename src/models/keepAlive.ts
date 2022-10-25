import { atom, useAtomValue, useSetAtom } from 'jotai';

const atomCloseGlobalTab = atom<{
  fn: (key: string) => void;
}>({
  fn: () => {},
});
export const useSetCloseGlobalTab = () => {
  const setAtom = useSetAtom(atomCloseGlobalTab);
  return (fn: (key: string) => void) => {
    setAtom({ fn });
  };
};
export const useAtomValueCloseGlobalTab = () => {
  const { fn } = useAtomValue(atomCloseGlobalTab);
  return fn;
};
