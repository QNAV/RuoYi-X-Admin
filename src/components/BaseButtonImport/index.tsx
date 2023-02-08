import { UploadOutlined } from '@ant-design/icons';
import type { ButtonProps } from 'antd';
import { Button } from 'antd';
import type { FC } from 'react';
import { cloneElement } from 'react';

export const BaseButtonImport: FC<ButtonProps> = (props) => {
  return cloneElement(
    <Button type="primary" ghost icon={<UploadOutlined />}>
      导入
    </Button>,
    props,
  );
};
