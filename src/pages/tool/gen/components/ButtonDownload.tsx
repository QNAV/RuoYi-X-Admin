import { Access } from '@/components';
import { useAtomValueAccess } from '@/models';
import { GenGetBatchGenCode } from '@/services/gen/GenService';
import { CloudDownloadOutlined } from '@ant-design/icons';
import { useMutation } from '@tanstack/react-query';
import { Button, message } from 'antd';
import { saveAs } from 'file-saver';
import type { FC } from 'react';

const ButtonDownload: FC<{
  tableName: string;
  isBatch?: boolean;
  disabled?: boolean;
}> = ({ tableName, isBatch = false, disabled = false }) => {
  const text = isBatch ? '批量下载' : '下载';

  const { canCodeToolGen } = useAtomValueAccess();

  const { isLoading, mutate } = useMutation(
    async () => {
      const res = await GenGetBatchGenCode({ tables: tableName }, { skipErrorHandler: true, responseType: 'blob' });

      saveAs(new Blob([res.data], { type: 'application/zip' }), 'ruoyi');
    },
    {
      onSuccess: () => {
        message.success('下载成功');
      },
    },
  );

  return (
    <Access accessible={canCodeToolGen}>
      <Button
        loading={isLoading}
        onClick={() => mutate()}
        type="link"
        icon={<CloudDownloadOutlined />}
        disabled={disabled}
      >
        {text}
      </Button>
    </Access>
  );
};

export default ButtonDownload;
