import type { AntdIconProps } from '@ant-design/icons/es/components/AntdIcon';
import type { FC } from 'react';
import { createElement } from 'react';

const IconMap: Record<string, FC> = {};

export const Icon: FC<AntdIconProps & { name: string }> = ({ name, ...props }) => {
  return IconMap?.[name] ? createElement(IconMap[name], props) : null;
};
