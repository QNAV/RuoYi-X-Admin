import * as IconMap from '@ant-design/icons';
import type { AntdIconProps } from '@ant-design/icons/es/components/AntdIcon';
import type { FC } from 'react';
import { createElement } from 'react';

interface IconProps extends AntdIconProps {
  name?: string;
}

export const IconAntd: FC<IconProps> = ({ name, ...props }) => {
  if (!name || (IconMap as any)?.[name] === undefined) return null;

  return createElement((IconMap as any)[name], props);
};
