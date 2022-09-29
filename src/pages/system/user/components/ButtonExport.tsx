import { Access } from '@/components';
import { useAtomValueAccess } from '@/models';
import { DownloadOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import type { FC } from 'react';

const ButtonExport: FC = () => {
  const access = useAtomValueAccess();

  return (
    <Access accessible={access.canExportSysUser}>
      <Button icon={<DownloadOutlined />}>导出</Button>
    </Access>
  );
};

export default ButtonExport;
