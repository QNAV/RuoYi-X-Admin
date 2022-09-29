import { atom, useAtom } from 'jotai';
import type { useOutlet } from 'react-router-dom';

type AtomKeepAliveElements = Record<
  string,
  {
    pathname: string;
    children: ReturnType<typeof useOutlet>;
  }
>;
const AtomKeepAliveElements = atom<AtomKeepAliveElements>({});
export const useAtomKeepAliveElements = () => useAtom(AtomKeepAliveElements);
