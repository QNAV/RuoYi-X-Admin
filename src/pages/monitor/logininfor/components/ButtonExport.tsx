import { BaseButtonExport } from '@/components';
import { AccessWithState } from '@/features';
import type { SysLogininforPageQueryBo } from '@/services/system/data-contracts';
import { sysLogininforPostExportSkipErrorHandler } from '@/services/system/Monitor';
import { download } from '@/utils';
import { useMutation } from '@tanstack/react-query';
import { App } from 'antd';
import type { FC } from 'react';

const handleExport = async (searchParams: SysLogininforPageQueryBo) => {
  const { data } = await sysLogininforPostExportSkipErrorHandler(searchParams, {
    format: 'blob',
  });

  await download(data, `user_${new Date().getTime()}.xlsx`);
};

const ButtonExport: FC<{ searchParams: SysLogininforPageQueryBo }> = ({ searchParams }) => {
  const { message } = App.useApp();

  const { isLoading, mutate } = useMutation(handleExport, {
    onSuccess: () => {
      message.success('导出成功');
    },
  });

  return (
    <AccessWithState accessKey="monitor:logininfor:export">
      <BaseButtonExport loading={isLoading} onClick={() => mutate(searchParams)} />
    </AccessWithState>
  );
};

export default ButtonExport;
