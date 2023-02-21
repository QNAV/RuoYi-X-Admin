import { sysOssGetDownloadSkipErrorHandler } from '@/services/system/System';
import { DownloadOutlined } from '@ant-design/icons';
import { useMutation } from '@tanstack/react-query';
import { App, Button } from 'antd';
import { saveAs } from 'file-saver';
import type { FC } from 'react';

interface ButtonDownloadProps {
  ossId: number;
}

const ButtonDownload: FC<ButtonDownloadProps> = ({ ossId }) => {
  const { message } = App.useApp();

  const { isLoading, mutate } = useMutation(
    async () => {
      const { data, headers } = await sysOssGetDownloadSkipErrorHandler(
        { ossId },
        {
          format: 'blob',
        },
      );

      const blob = new Blob([data], { type: 'application/octet-stream' });

      if (blob instanceof Blob) {
        saveAs(blob, decodeURIComponent(headers['download-filename']));
        message.success('下载成功');
      } else {
        message.error('下载失败');
      }
    },
    {
      onSuccess: () => {},
    },
  );

  return (
    <Button
      type="link"
      icon={<DownloadOutlined />}
      loading={isLoading}
      onClick={() => {
        mutate();
      }}
    >
      下载
    </Button>
  );
};

export default ButtonDownload;
