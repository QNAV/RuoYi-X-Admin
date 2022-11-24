import { PlusOutlined } from '@ant-design/icons';
import type { ButtonProps } from 'antd';
import { Button } from 'antd';
import type { FC } from 'react';
import { cloneElement } from 'react';

export const BaseButtonAdd: FC<ButtonProps> = (props) => {
  return cloneElement(
    <Button type="primary" icon={<PlusOutlined />}>
      新建
    </Button>,
    props,
  );
};
