import { BaseButtonExport } from '@/components';
import { AccessWithState } from '@/features';
import type { SysUserQueryBo } from '@/services/system/data-contracts';
import { sysUserPostExportSkipErrorHandler } from '@/services/system/System';
import { download } from '@/utils';
import { useMutation } from '@tanstack/react-query';
import { App } from 'antd';
import type { FC } from 'react';

export interface ButtonExportProps {
  searchParams: SysUserQueryBo;
}

const handleExport = async (searchParams: SysUserQueryBo) => {
  const { data } = await sysUserPostExportSkipErrorHandler(searchParams, {
    format: 'blob',
  });

  await download(data, `user_${new Date().getTime()}.xlsx`);
};

const ButtonExport: FC<ButtonExportProps> = ({ searchParams }) => {
  const { message } = App.useApp();

  const { isLoading, mutate } = useMutation(handleExport, {
    onSuccess: () => {
      message.success('导出成功');
    },
  });

  return (
    <AccessWithState accessKey="system:user:export">
      <BaseButtonExport loading={isLoading} onClick={() => mutate(searchParams)} />
    </AccessWithState>
  );
};

export default ButtonExport;
