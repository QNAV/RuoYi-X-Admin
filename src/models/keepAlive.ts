import { keepAliveLocal } from '@/routes';
import type { TabsProps } from 'antd';
import type { useOutlet } from 'react-router-dom';
import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

const namespace = 'global';

const AtomKeepAliveLocal = atom<Record<string, string>>({
  key: `${namespace}KeepAliveLocal`,
  default: keepAliveLocal,
});

const AtomKeepAliveElements = atom<Record<string, ReturnType<typeof useOutlet>>>({
  key: `${namespace}KeepAliveElements`,
  default: {},
});

export const useRecoilStateKeepAliveElements = () => useRecoilState(AtomKeepAliveElements);

export const useRecoilValueKeepAliveTabsItems = (): TabsProps['items'] => {
  const dropKeepAliveElementByCacheKey = useDropKeepAliveElementByCacheKey();

  const keepAliveElements = useRecoilValue(AtomKeepAliveElements);
  const keepAliveLocal = useRecoilValue(AtomKeepAliveLocal);

  const keys = Object.keys(keepAliveElements);

  if (keys.length > 5) {
    dropKeepAliveElementByCacheKey(keys[0]);
    keys.shift();
  }

  return keys.map((key) => ({
    label: keepAliveLocal?.[Object.keys(keepAliveLocal).find((k) => k === key) ?? ''] ?? key,
    key,
  }));
};

export const useDropKeepAliveElementByCacheKey = () => {
  const setKeepAliveElements = useSetRecoilState(AtomKeepAliveElements);

  return (targetKey: string) => {
    setKeepAliveElements((elements) => {
      delete elements[targetKey];
      return elements;
    });
  };
};
