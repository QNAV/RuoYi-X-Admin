import type { useOutlet } from 'react-router-dom';
import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

const namespace = 'global';

const AtomKeepAliveElements = atom<Record<string, ReturnType<typeof useOutlet>>>({
  key: `${namespace}KeepAliveElements`,
  default: {},
});

export const useRecoilStateKeepAliveElements = () => useRecoilState(AtomKeepAliveElements);
export const useRecoilValueKeepAliveElements = () => useRecoilValue(AtomKeepAliveElements);

export const useDropKeepAliveElementByCacheKey = () => {
  const setKeepAliveElements = useSetRecoilState(AtomKeepAliveElements);

  return (targetKey: string) => {
    setKeepAliveElements((elements) => {
      const newElements = { ...elements };
      delete newElements[targetKey];
      return newElements;
    });
  };
};
