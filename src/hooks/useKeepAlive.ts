import { useAtomValueKeepAliveRoutes } from '@/models';
import { useEffect, useRef } from 'react';
import { matchPath, useLocation } from 'react-router-dom';

export const useActivated = (callback?: () => void, ignoreFirstRender = true) => {
  const ref = useRef<{
    pattern?: string;
    isActivated?: boolean;
  }>({});

  const { pathname } = useLocation();

  const atomValueKeepAliveRoutes = useAtomValueKeepAliveRoutes();

  useEffect(() => {
    if (ref.current.pattern && !matchPath(ref.current.pattern, pathname)) {
      ref.current.isActivated = false;
      return;
    }

    if (ref.current.isActivated) {
      return;
    }

    const currentPattern = atomValueKeepAliveRoutes.find((i) => matchPath(i, pathname));

    if (!currentPattern) {
      return;
    }

    ref.current.isActivated = true;

    if (ref.current.pattern === undefined) {
      ref.current.pattern = currentPattern;
      if (ignoreFirstRender) return;
    }

    callback?.();
  }, [pathname]);

  return ref.current.isActivated;
};

export const useDeactivated = (callback?: () => void) => {
  const hasActivated = useRef<boolean>(false);

  const { pathname } = useLocation();

  useEffect(() => {
    if (!hasActivated.current) {
      return;
    }

    hasActivated.current = false;

    callback?.();
  }, [pathname]);

  useActivated(() => {
    hasActivated.current = true;
  });

  return hasActivated.current;
};
