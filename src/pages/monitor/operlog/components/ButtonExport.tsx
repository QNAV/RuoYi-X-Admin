import { BaseButtonExport } from '@/components';
import { AccessWithState } from '@/features';
import type { SysOperLogQueryBo } from '@/services/system/data-contracts';
import { sysOperLogPostExportSkipErrorHandler } from '@/services/system/Monitor';
import { download } from '@/utils';
import { useMutation } from '@tanstack/react-query';
import { App } from 'antd';
import type { FC } from 'react';

const handleExport = async (searchParams: SysOperLogQueryBo) => {
  const { data } = await sysOperLogPostExportSkipErrorHandler(searchParams, {
    format: 'blob',
  });

  await download(data, `operlog_${new Date().getTime()}.xlsx`);
};

const ButtonExport: FC<{ searchParams: SysOperLogQueryBo }> = ({ searchParams }) => {
  const { message } = App.useApp();

  const { isLoading, mutate } = useMutation(handleExport, {
    onSuccess: () => {
      message.success('导出成功');
    },
  });

  return (
    <AccessWithState accessKey="monitor:operlog:export">
      <BaseButtonExport loading={isLoading} onClick={() => mutate(searchParams)} />
    </AccessWithState>
  );
};

export default ButtonExport;
