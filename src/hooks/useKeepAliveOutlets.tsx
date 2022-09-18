import { useRecoilStateKeepAliveElements } from '@/models';
import { keepAliveRoutes } from '@/routes';
import { useEffect } from 'react';
import { matchPath, useOutlet } from 'react-router-dom';

export const useKeepAliveOutlets = (pathname: string) => {
  const [keepAliveElements, setKeepAliveElements] = useRecoilStateKeepAliveElements();

  const element = useOutlet();

  const isKeepAlive = keepAliveRoutes.some((key) => matchPath(key, pathname));

  useEffect(() => {
    if (isKeepAlive) {
      setKeepAliveElements({ ...keepAliveElements, [pathname]: element });
    }
  }, [pathname]);

  return (
    <>
      {Object.entries(keepAliveElements).map(([key, children]: any) => (
        <div
          key={`${key}:${keepAliveElements[key] || '_'}`}
          style={{ height: '100%', width: '100%', position: 'relative', overflow: 'hidden auto' }}
          className="runtime-keep-alive-layout"
          hidden={!matchPath(pathname, key)}
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
