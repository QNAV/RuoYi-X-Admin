import { EditOutlined } from '@ant-design/icons';
import type { ButtonProps } from 'antd';
import { Button } from 'antd';
import type { FC } from 'react';
import { cloneElement } from 'react';

export const BaseButtonEdit: FC<ButtonProps> = (props) => {
  return cloneElement(
    <Button type="link" size="small" icon={<EditOutlined />}>
      编辑
    </Button>,
    props,
  );
};
