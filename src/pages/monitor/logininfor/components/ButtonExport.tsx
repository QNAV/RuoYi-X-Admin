import { Access } from '@/components';
import { useAtomValueAccess } from '@/models';
import type { SysLogininforPageQueryBo } from '@/services/system/data-contracts';
import { sysLogininforPostExport } from '@/services/system/Monitor';
import { DownloadOutlined } from '@ant-design/icons';
import { useMutation } from '@tanstack/react-query';
import { Button, message } from 'antd';
import type { FC } from 'react';

const ButtonExport: FC<{ searchParams: SysLogininforPageQueryBo }> = ({ searchParams }) => {
  const { canExportSysLogininfor } = useAtomValueAccess();

  const { isLoading, mutate } = useMutation(() => sysLogininforPostExport(searchParams), {
    onSuccess: () => {
      message.success('导出成功');
    },
  });

  return (
    <Access accessible={canExportSysLogininfor}>
      <Button ghost type="primary" icon={<DownloadOutlined />} loading={isLoading} onClick={() => mutate()}>
        导出当前列表
      </Button>
    </Access>
  );
};

export default ButtonExport;
