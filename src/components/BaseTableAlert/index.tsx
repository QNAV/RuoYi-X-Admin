import { Space } from 'antd';
import type { FC, ReactNode } from 'react';

interface BaseTableAlertProps {
  selectedNum: number;
  children?: ReactNode;
  onCleanSelected: () => void;
}

export const BaseTableAlert: FC<BaseTableAlertProps> = ({ selectedNum = 0, children, onCleanSelected }) => {
  return (
    <Space>
      <span>已选 {selectedNum} 项</span>
      <a onClick={onCleanSelected}>取消选择</a>
      {children}
    </Space>
  );
};
