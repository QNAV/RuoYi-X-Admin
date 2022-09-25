import { useStateKeepAliveElements } from '@/models';
import { keepAliveRoutes } from '@/routes';
import { useEffect, useState } from 'react';
import type { PathPattern } from 'react-router-dom';
import { matchPath, useLocation, useOutlet } from 'react-router-dom';

const MAX_TABS = 5;

export const useKeepAliveOutlets = (pathname: string) => {
  const [keepAliveElements, setKeepAliveElements] = useStateKeepAliveElements();

  const element = useOutlet();

  const keepAliveKey = keepAliveRoutes.find((key) => matchPath(key, pathname));
  const isKeepAlive = keepAliveKey !== undefined;

  useEffect(() => {
    if (isKeepAlive) {
      setKeepAliveElements((elements) => {
        const newElements = {
          ...elements,
          [keepAliveKey]: {
            children: element,
            pathname,
          },
        };

        const keys = Object.keys(newElements);
        if (keys.length > MAX_TABS) {
          delete newElements[keys[0]];
        }

        return newElements;
      });
    }
  }, [pathname]);

  return (
    <>
      {Object.entries(keepAliveElements).map(([key, element]) => (
        <div key={key} hidden={pathname !== element.pathname}>
          {element.children}
        </div>
      ))}
      <div hidden={isKeepAlive}>{!isKeepAlive && element}</div>
    </>
  );
};

export const useActivated = (pattern: string | PathPattern, callback: () => void, defaultActivatedValue = true) => {
  const [isActivated, setIsActivated] = useState(defaultActivatedValue);
  const { pathname } = useLocation();

  useEffect(() => {
    const isMatch = matchPath(pattern, pathname);

    if (!isMatch && isActivated) {
      setIsActivated(false);
    }

    if (!isMatch || isActivated) {
      return;
    }

    setIsActivated(true);

    callback();
  }, [isActivated, pathname]);
};

export const useDeactivated = (pattern: string | PathPattern, callback: () => void) => {
  const [isDeactivated, setIsDeactivated] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const isMatch = matchPath(pattern, pathname);

    if (isMatch && isDeactivated) {
      setIsDeactivated(false);
    }

    if (isMatch || isDeactivated) {
      return;
    }

    setIsDeactivated(true);

    callback();
  }, [isDeactivated, pathname]);
};
