import { AccessWithState } from '@/features';
import { genGetBatchGenCodeSkipErrorHandler } from '@/services/gen/Tool';
import { CloudDownloadOutlined } from '@ant-design/icons';
import { useMutation } from '@tanstack/react-query';
import { App, Button } from 'antd';
import { saveAs } from 'file-saver';
import type { FC } from 'react';

const handleDownload = async (tables: string) => {
  const { data } = await genGetBatchGenCodeSkipErrorHandler(
    { tables },
    {
      format: 'blob',
    },
  );

  saveAs(new Blob([data], { type: 'application/zip' }), `ruoyi_${new Date().getTime()}`);
};

const ButtonDownload: FC<{
  tableName: string;
  batch?: boolean;
  disabled?: boolean;
}> = ({ tableName, batch = false, disabled = false }) => {
  const text = batch ? '批量下载' : '下载';

  const { message } = App.useApp();

  const { isLoading, mutate } = useMutation(handleDownload, {
    onSuccess: () => {
      message.success('下载成功');
    },
  });

  return (
    <AccessWithState accessKey="tool:gen:query">
      <Button
        loading={isLoading}
        onClick={() => mutate(tableName)}
        type="link"
        icon={<CloudDownloadOutlined />}
        disabled={disabled}
      >
        {text}
      </Button>
    </AccessWithState>
  );
};

export default ButtonDownload;
