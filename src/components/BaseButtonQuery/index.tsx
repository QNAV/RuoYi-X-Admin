import { EyeOutlined } from '@ant-design/icons';
import type { ButtonProps } from 'antd';
import { Button } from 'antd';
import type { FC } from 'react';
import { cloneElement } from 'react';

export const BaseButtonQuery: FC<ButtonProps> = (props) => {
  return cloneElement(
    <Button type="link" size="small" icon={<EyeOutlined />}>
      查看
    </Button>,
    props,
  );
};
