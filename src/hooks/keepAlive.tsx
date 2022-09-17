import { keepAliveLocal, keepAliveRoutes } from '@/routes';
import type { TabsProps } from 'antd';
import { useEffect } from 'react';
import { matchPath, useOutlet } from 'react-router-dom';
import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

const AtomKeepAliveLocal = atom<Record<string, string>>({
  key: 'AtomKeepAliveLocal',
  default: keepAliveLocal,
});

const AtomKeepAliveElements = atom<Record<string, ReturnType<typeof useOutlet>>>({
  key: 'AtomKeepAlve',
  default: {},
});

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
      const newElements = { ...elements };
      delete newElements[targetKey];
      return newElements;
    });
  };
};

export const useKeepAliveOutlets = (pathname: string) => {
  const [keepAliveElements, setKeepAliveElements] = useRecoilState(AtomKeepAliveElements);

  const element = useOutlet();

  const isKeepAlive = keepAliveRoutes.some((key) => matchPath(key, pathname));

  useEffect(() => {
    if (isKeepAlive) {
      setKeepAliveElements({ ...keepAliveElements, [pathname]: element });
    }
  }, [pathname]);

  return (
    <>
      {Object.entries(keepAliveElements).map(([pathname, children]: any) => (
        <div
          key={`${pathname}:${keepAliveElements[pathname] || '_'}`}
          style={{ height: '100%', width: '100%', position: 'relative', overflow: 'hidden auto' }}
          className="runtime-keep-alive-layout"
          hidden={!matchPath(location.pathname, pathname)}
        >
          {children}
        </div>
      ))}
      <div
        hidden={isKeepAlive}
        style={{ height: '100%', width: '100%', position: 'relative', overflow: 'hidden auto' }}
        className="runtime-keep-alive-layout-no"
      >
        {!isKeepAlive && element}
      </div>
    </>
  );
};
