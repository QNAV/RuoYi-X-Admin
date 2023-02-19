import { BaseButtonExport } from '@/components';
import { AccessWithState } from '@/features';
import type { SysConfigQueryBo } from '@/services/system/data-contracts';
import { sysConfigPostExportSkipErrorHandler } from '@/services/system/System';
import { download } from '@/utils';
import { useMutation } from '@tanstack/react-query';
import { App } from 'antd';
import type { FC } from 'react';

const handleExport = async (searchParams: SysConfigQueryBo) => {
  const { data } = await sysConfigPostExportSkipErrorHandler(searchParams, {
    format: 'blob',
  });

  await download(data, `config_${new Date().getTime()}.xlsx`);
};

const ButtonExport: FC<{ searchParams: SysConfigQueryBo }> = ({ searchParams }) => {
  const { message } = App.useApp();

  const { isLoading, mutate } = useMutation(handleExport, {
    onSuccess: () => {
      message.success('导出成功');
    },
  });

  return (
    <AccessWithState accessKey="system:config:export">
      <BaseButtonExport loading={isLoading} onClick={() => mutate(searchParams)} />
    </AccessWithState>
  );
};

export default ButtonExport;
