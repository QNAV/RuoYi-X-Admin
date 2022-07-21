import type { GenType } from '@/constants';
import { GenGetBatchGenCode } from '@/services/gen/GenService';
import { CloudDownloadOutlined } from '@ant-design/icons';
import { useMutation } from '@tanstack/react-query';
import { Button, message } from 'antd';
import { saveAs } from 'file-saver';
import type { FC } from 'react';

const ButtonDownload: FC<{ rows: { tableName: string; genType: GenType; genPath: string }[]; isBatch?: boolean }> = ({
  rows = [],
  isBatch = false,
}) => {
  const text = isBatch ? '批量下载' : '下载';
  const disabled = rows.length === 0 && isBatch;

  const { isLoading, mutate } = useMutation(
    async () => {
      const res = await GenGetBatchGenCode(
        { tables: rows.map((i) => i.tableName).join(',') },
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
