import { Access } from '@/components';
import { useAtomValueAccess } from '@/models';
import type { SysConfigQueryBo } from '@/services/system/data-contracts';
import { sysConfigPostExport } from '@/services/system/System';
import { DownloadOutlined } from '@ant-design/icons';
import { useMutation } from '@tanstack/react-query';
import { Button, message } from 'antd';
import type { FC } from 'react';

const ButtonExport: FC<{ searchParams: SysConfigQueryBo }> = ({ searchParams }) => {
  const { canExportSysConfig } = useAtomValueAccess();

  const { isLoading, mutate } = useMutation(() => sysConfigPostExport(searchParams), {
    onSuccess: () => {
      message.success('导出成功');
    },
  });

  return (
    <Access accessible={canExportSysConfig}>
      <Button ghost type="primary" icon={<DownloadOutlined />} loading={isLoading} onClick={() => mutate()}>
        导出当前列表
      </Button>
    </Access>
  );
};

export default ButtonExport;
