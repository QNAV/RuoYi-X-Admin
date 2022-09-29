import type { ActionType } from '@ant-design/pro-components';
import type { PrimitiveAtom } from 'jotai';
import { useSetAtom } from 'jotai';
import { useEffect, useRef } from 'react';

export const useInitActionType = (atom: PrimitiveAtom<ActionType | undefined>) => {
  const actionRef = useRef<ActionType>();
  const setAtom = useSetAtom(atom);

  useEffect(() => {
    if (actionRef?.current) {
      setAtom(actionRef.current);
    }
  }, []);

  return actionRef;
};
