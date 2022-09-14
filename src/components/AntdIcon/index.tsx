import * as IconMap from '@ant-design/icons';
import type { AntdIconProps } from '@ant-design/icons/es/components/AntdIcon';
import type { FC } from 'react';
import { createElement } from 'react';

export const AntdIcon: FC<AntdIconProps & { name?: string }> = ({ name, ...props }) => {
  if (!name) return null;

  // @ts-ignore
  return IconMap?.[name] ? createElement(IconMap[name], props) : null;
};
