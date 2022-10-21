import * as IconMap from '@ant-design/icons';
import type { AntdIconProps } from '@ant-design/icons/es/components/AntdIcon';
import type { FC } from 'react';
import { createElement } from 'react';

export const IconAntd: FC<AntdIconProps & { name?: string }> = ({ name, ...props }) => {
  // @ts-ignore
  if (!name || !IconMap?.[name]) return null;

  // @ts-ignore
  return createElement(IconMap[name], props);
};
