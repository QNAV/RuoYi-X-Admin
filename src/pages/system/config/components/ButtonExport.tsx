import { BaseButtonExport } from '@/components';
import { AccessWithState } from '@/features';
import type { SysConfigQueryBo } from '@/services/system/data-contracts';
import { sysConfigPostExport } from '@/services/system/System';
import { useMutation } from '@tanstack/react-query';
import { message } from 'antd';
import type { FC } from 'react';

const ButtonExport: FC<{ searchParams: SysConfigQueryBo }> = ({ searchParams }) => {
  const { isLoading, mutate } = useMutation(() => sysConfigPostExport(searchParams), {
    onSuccess: () => {
      message.success('导出成功');
    },
  });

  return (
    <AccessWithState accessKey="system:config:export">
      <BaseButtonExport loading={isLoading} onClick={() => mutate()} />
    </AccessWithState>
  );
};

export default ButtonExport;
