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

const ButtonExport: FC<ButtonExportProps> = ({ searchParams }) => {
  const { message } = App.useApp();

  const { isLoading, mutate } = useMutation(
    async () => {
      const e = await sysUserPostExportSkipErrorHandler(searchParams, {
        format: 'blob',
      });

      await download(e.data, `user_${new Date().getTime()}.xlsx`);
    },
    {
      onSuccess: () => {
        message.success('导出成功');
      },
    },
  );

  return (
    <AccessWithState accessKey="system:user:export">
      <BaseButtonExport loading={isLoading} onClick={() => mutate()} />
    </AccessWithState>
  );
};

export default ButtonExport;
