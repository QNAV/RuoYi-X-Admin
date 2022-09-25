import type { useOutlet } from 'react-router-dom';
import { atom, useRecoilState } from 'recoil';

const namespace = 'global';

type AtomKeepAliveElements = Record<
  string,
  {
    pathname: string;
    children: ReturnType<typeof useOutlet>;
  }
>;

const AtomKeepAliveElements = atom<AtomKeepAliveElements>({
  key: `${namespace}KeepAliveElements`,
  default: {},
});

export const useStateKeepAliveElements = () => useRecoilState(AtomKeepAliveElements);
