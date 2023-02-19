import { Access } from '@/components';
import { genGetBatchGenCode } from '@/services/gen/Tool';
import { CloudDownloadOutlined } from '@ant-design/icons';
import { useMutation } from '@tanstack/react-query';
import { App, Button } from 'antd';
import { saveAs } from 'file-saver';
import type { FC } from 'react';

const ButtonDownload: FC<{
  tableName: string;
  isBatch?: boolean;
  disabled?: boolean;
}> = ({ tableName, isBatch = false, disabled = false }) => {
  const text = isBatch ? '批量下载' : '下载';

  const { message } = App.useApp();

  const { isLoading, mutate } = useMutation(
    async () => {
      const res = await genGetBatchGenCode({ tables: tableName });

      saveAs(new Blob([res.data], { type: 'application/zip' }), 'ruoyi');
    },
    {
      onSuccess: () => {
        message.success('下载成功');
      },
    },
  );

  return (
    <Access accessible>
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
