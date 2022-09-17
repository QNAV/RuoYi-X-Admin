import type { EmptyProps } from 'antd';
import { Empty } from 'antd';
import type { FC } from 'react';
import { cloneElement } from 'react';

export const EmptySimple: FC<EmptyProps> = (props) => {
  return cloneElement(<Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />, props);
};
