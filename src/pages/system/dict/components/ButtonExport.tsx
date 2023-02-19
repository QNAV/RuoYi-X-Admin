import { BaseButtonExport } from '@/components';
import { AccessWithState } from '@/features';
import type { SysDictTypeQueryBo } from '@/services/system/data-contracts';
import { sysDictTypePostExportSkipErrorHandler } from '@/services/system/System';
import { download } from '@/utils';
import { useMutation } from '@tanstack/react-query';
import { App } from 'antd';
import type { FC } from 'react';

const handleExport = async (searchParams: SysDictTypeQueryBo) => {
  const { data } = await sysDictTypePostExportSkipErrorHandler(searchParams, {
    format: 'blob',
  });

  await download(data, `user_${new Date().getTime()}.xlsx`);
};

const ButtonExport: FC<{ searchParams: SysDictTypeQueryBo }> = ({ searchParams }) => {
  const { message } = App.useApp();

  const { isLoading, mutate } = useMutation(handleExport, {
    onSuccess: () => {
      message.success('导出成功');
    },
  });

  return (
    <AccessWithState accessKey="system:dict:export">
      <BaseButtonExport loading={isLoading} onClick={() => mutate(searchParams)} />
    </AccessWithState>
  );
};

export default ButtonExport;
