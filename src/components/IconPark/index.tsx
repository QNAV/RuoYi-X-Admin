import type { IconType, IIconAllProps } from '@icon-park/react/es/all';
import Icon, { ALL_ICON_KEYS } from '@icon-park/react/es/all';
import type { FC } from 'react';
import { cloneElement } from 'react';

export interface IconParkProps extends Omit<IIconAllProps, 'type'> {
  type?: IconType;
}

const ALL_ICON_KEYS_SET = new Set(ALL_ICON_KEYS);

export const IconPark: FC<IconParkProps> = ({ type, ...props }) => {
  if (!type || !ALL_ICON_KEYS_SET.has(type)) {
    return null;
  }

  return cloneElement(<Icon type={type} />, props);
};
