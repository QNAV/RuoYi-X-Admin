import { isKeepAliveRoutes } from '@/routes';
import { useEffect, useRef } from 'react';
import { matchPath, useLocation } from 'react-router-dom';

export const useActivated = (callback: () => void, ignoreFirstRender = true) => {
  const pattern = useRef<string>();

  const { pathname } = useLocation();

  useEffect(() => {
    const currentPattern = isKeepAliveRoutes.find((i) => matchPath(i, pathname));

    if (!currentPattern) {
      return;
    }

    if (pattern.current === undefined && ignoreFirstRender) {
      pattern.current = currentPattern;
      return;
    }

    if (pattern.current === undefined && !ignoreFirstRender) {
      pattern.current = currentPattern;
      callback();
      return;
    }

    if (!matchPath(pattern.current!, pathname)) {
      return;
    }

    callback();
  }, [pathname]);
};

export const useDeactivated = (callback: () => void) => {
  const hasActivated = useRef<boolean>(false);

  const { pathname } = useLocation();

  useEffect(() => {
    if (!hasActivated.current) {
      return;
    }

    hasActivated.current = false;

    callback();
  }, [pathname]);

  useActivated(() => {
    hasActivated.current = true;
  }, false);
};
