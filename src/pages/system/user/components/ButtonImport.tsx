import { Access } from '@/components';
import { useAccess } from '@/models';
import { UploadOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import type { FC } from 'react';

const ButtonImport: FC = () => {
  const access = useAccess();

  return (
    <Access accessible={access.canImportSysUser}>
      <Button icon={<UploadOutlined />}>导入</Button>
    </Access>
  );
};

export default ButtonImport;
