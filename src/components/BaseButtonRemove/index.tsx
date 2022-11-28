import { DeleteOutlined } from '@ant-design/icons';
import type { ButtonProps } from 'antd';
import { Button } from 'antd';
import type { FC } from 'react';
import { cloneElement } from 'react';

interface BaseButtonRemoveProps extends ButtonProps {
  batch?: boolean;
}

export const BaseButtonRemove: FC<BaseButtonRemoveProps> = ({ batch, ...props }) => {
  return cloneElement(
    <Button danger type="link" size="small" icon={<DeleteOutlined />}>
      {batch ? '批量删除' : '删除'}
    </Button>,
    props,
  );
};
