import { GenGetBatchGenCode } from '@/services/gen/GenService';
import { CloudDownloadOutlined } from '@ant-design/icons';
import { Button, message } from 'antd';
import { saveAs } from 'file-saver';
import type { FC } from 'react';
import { useMutation } from 'react-query';

const ButtonDownload: FC<{ tableNames: string[]; isBatch?: boolean }> = ({ tableNames, isBatch = false }) => {
  const text = isBatch ? '批量下载' : '下载';
  const disabled = tableNames.length === 0 && isBatch;

  const { isLoading, mutate } = useMutation(
    async () => {
      const res = await GenGetBatchGenCode(
        { tables: tableNames.join(',') },
        { skipErrorHandler: true, responseType: 'blob' },
      );

      saveAs(new Blob([res.data], { type: 'application/zip' }), 'ruoyi');
    },
    {
      onSuccess: () => {
        message.success('下载成功');
      },
    },
  );

  return (
    <Button
      loading={isLoading}
      onClick={() => mutate()}
      type="link"
      icon={<CloudDownloadOutlined />}
      disabled={disabled}
    >
      {text}
    </Button>
  );
};

export default ButtonDownload;
