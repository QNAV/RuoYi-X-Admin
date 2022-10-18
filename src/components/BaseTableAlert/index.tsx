import { Space } from 'antd';
import type { FC, ReactNode } from 'react';

export const BaseTableAlert: FC<{ selectedNum: number; children: ReactNode }> = ({ selectedNum = 0, children }) => {
  return (
    <Space>
      <span>已选择 {selectedNum} 项</span>

      {children}
    </Space>
  );
};
