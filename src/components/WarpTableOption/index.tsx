import type { SpaceProps } from 'antd';
import type { FC } from 'react';
import { cloneElement } from 'react';

export const WarpTableOption: FC<SpaceProps> = (props) => {
  return cloneElement(
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      {props.children}
    </div>,
    props,
  );
};
