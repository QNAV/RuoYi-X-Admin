import { DownloadOutlined } from '@ant-design/icons';
import type { ButtonProps } from 'antd';
import { Button } from 'antd';
import type { FC } from 'react';
import { cloneElement } from 'react';

export const BaseButtonExport: FC<ButtonProps> = (props) => {
  return cloneElement(
    <Button type="primary" ghost icon={<DownloadOutlined />}>
      导出
    </Button>,
    props,
  );
};
