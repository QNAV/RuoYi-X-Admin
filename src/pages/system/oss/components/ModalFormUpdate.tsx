import { Access } from '@/components';
import { useAtomValueAccess } from '@/models';
import { UploadOutlined } from '@ant-design/icons';
import { ModalForm, ProFormUploadDragger } from '@ant-design/pro-components';
import { Button } from 'antd';
import type { FC } from 'react';

const action = `${import.meta.env.VITE_API_HOST}/system/oss/upload`;

const ModalFormUpdate: FC = () => {
  const { canUploadSysOSS } = useAtomValueAccess();

  return (
    <Access accessible={canUploadSysOSS}>
      <ModalForm
        title="上传文件"
        trigger={
          <Button type="primary" icon={<UploadOutlined />}>
            上传文件
          </Button>
        }
      >
        <ProFormUploadDragger action={action} />
      </ModalForm>
    </Access>
  );
};

export default ModalFormUpdate;
