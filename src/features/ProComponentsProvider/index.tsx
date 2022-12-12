import type { ProRenderFieldPropsType } from '@ant-design/pro-components';
import { ProConfigProvider } from '@ant-design/pro-components';
import type { FC, ReactNode } from 'react';

const valueTypeMap: Record<string, ProRenderFieldPropsType> = {};

export const ProComponentsProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return <ProConfigProvider valueTypeMap={valueTypeMap}>{children}</ProConfigProvider>;
};
