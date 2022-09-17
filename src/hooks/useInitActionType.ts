import type { ActionType } from '@ant-design/pro-components';
import { useEffect, useRef } from 'react';
import type { RecoilState } from 'recoil';
import { useSetRecoilState } from 'recoil';

export const useInitActionType = (atom: RecoilState<ActionType>) => {
  const actionRef = useRef<ActionType>();
  const setActionState = useSetRecoilState(atom);

  useEffect(() => {
    if (actionRef?.current) {
      setActionState(actionRef.current);
    }
  }, []);

  return actionRef;
};
