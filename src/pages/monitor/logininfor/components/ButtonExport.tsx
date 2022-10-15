import { Access } from '@/components';
import { useAtomValueAccess } from '@/models';
import { SysLogininforPostExport } from '@/services/sys/SysLoginService';
import { DownloadOutlined } from '@ant-design/icons';
import { useMutation } from '@tanstack/react-query';
import { Button, message } from 'antd';
import type { FC } from 'react';

const ButtonExport: FC<{ searchParams: API.SysLogininforPageQueryBo }> = ({ searchParams }) => {
  const { canExportSysOperLog } = useAtomValueAccess();

  const { isLoading, mutate } = useMutation(() => SysLogininforPostExport(searchParams), {
    onSuccess: () => {
      message.success('导出成功');
    },
  });

  return (
    <Access accessible={canExportSysOperLog}>
      <Button ghost type="primary" icon={<DownloadOutlined />} loading={isLoading} onClick={() => mutate()}>
        导出当前列表
      </Button>
    </Access>
  );
};

export default ButtonExport;