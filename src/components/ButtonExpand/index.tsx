import { CaretDownOutlined, CaretRightOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import type { FC } from 'react';

export interface ButtonExpandProps {
  expanded: boolean;
  onChange: (expanded: boolean) => void;
}

export const ButtonExpand: FC<ButtonExpandProps> = ({ expanded, onChange }) => {
  return (
    <Button
      size="small"
      icon={expanded ? <CaretDownOutlined /> : <CaretRightOutlined />}
      onClick={() => onChange(!expanded)}
    >
      {expanded ? '全部折叠' : '全部展开'}
    </Button>
  );
};
