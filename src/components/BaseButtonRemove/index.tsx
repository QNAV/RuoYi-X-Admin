import { DeleteOutlined } from '@ant-design/icons';
import type { ButtonProps } from 'antd';
import { Button } from 'antd';
import type { FC } from 'react';
import { cloneElement } from 'react';

export const BaseButtonRemove: FC<ButtonProps> = (props) => {
  return cloneElement(
    <Button danger type="primary" icon={<DeleteOutlined />}>
      删除
    </Button>,
    props,
  );
};
