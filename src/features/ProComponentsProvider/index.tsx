import type { ConfigContextPropsType } from '@ant-design/pro-components';
import { ProProvider } from '@ant-design/pro-components';
import type { FC, ProviderProps, ReactNode } from 'react';
import { useContext, useMemo } from 'react';

export const ProComponentsProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const context = useContext(ProProvider);

  const value: ProviderProps<ConfigContextPropsType>['value'] = useMemo(() => {
    return {
      ...context,
      valueTypeMap: {},
    };
  }, [context]);

  return <ProProvider.Provider value={value}>{children}</ProProvider.Provider>;
};
