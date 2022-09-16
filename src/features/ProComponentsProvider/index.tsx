import { ProProvider } from '@ant-design/pro-components';
import type { FC, ReactNode } from 'react';
import { useContext } from 'react';

export const ProComponentsProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const context = useContext(ProProvider);

  return (
    <ProProvider.Provider
      value={{
        ...context,
        valueTypeMap: {},
      }}
    >
      {children}
    </ProProvider.Provider>
  );
};
