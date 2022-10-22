import { useEffect, useState } from 'react';
import type { PathPattern } from 'react-router-dom';
import { matchPath, useLocation } from 'react-router-dom';

export const useActivated = (pattern: string | PathPattern, callback: () => void, defaultActivatedValue = false) => {
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
