import { AccessWithState, BaseButtonExport } from '@/components';
import type { SysOperLogQueryBo } from '@/services/system/data-contracts';
import { sysOperLogPostExport } from '@/services/system/Monitor';
import { useMutation } from '@tanstack/react-query';
import { message } from 'antd';
import type { FC } from 'react';

// TODO 导出
const ButtonExport: FC<{ searchParams: SysOperLogQueryBo }> = ({ searchParams }) => {
  const { isLoading, mutate } = useMutation(sysOperLogPostExport, {
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
