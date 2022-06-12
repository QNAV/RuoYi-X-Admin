import * as AntdIcon from '@ant-design/icons';
import type { AntdIconProps } from '@ant-design/icons/es/components/AntdIcon';
import type { FC } from 'react';
import { createElement } from 'react';

export const Icon: FC<AntdIconProps & { name: string }> = ({ name, ...props }) => {
  // @ts-ignore
  return AntdIcon?.[name] ? createElement(AntdIcon[name], props) : null;
};
