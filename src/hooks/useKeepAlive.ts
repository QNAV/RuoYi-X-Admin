import { useEffect, useRef } from 'react';
import { matchPath, useLocation } from 'react-router-dom';

export const useActivated = (callback: () => void, ignoreFirstRender = true) => {
  const ref = useRef<{
    pattern?: string;
    isActivated?: boolean;
  }>({});

  const { pathname } = useLocation();

  useEffect(() => {
    const currentPattern = '';

    ref.current.isActivated = false;

    if (!currentPattern) {
      return;
    }

    if (ref.current.pattern === undefined && ignoreFirstRender) {
      ref.current.pattern = currentPattern;
      return;
    }

    if (ref.current.pattern === undefined && !ignoreFirstRender) {
      ref.current.pattern = currentPattern;
      callback();
      return;
    }

    if (!matchPath(ref.current.pattern!, pathname)) {
      return;
    }

    ref.current.isActivated = true;

    callback();
  }, [pathname]);

  return ref.current.isActivated;
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
