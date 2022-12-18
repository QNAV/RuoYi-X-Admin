import { BaseButtonExport } from '@/components';
import { AccessWithState } from '@/features';
import type { SysLogininforPageQueryBo } from '@/services/system/data-contracts';
import { sysLogininforPostExport } from '@/services/system/Monitor';
import { useMutation } from '@tanstack/react-query';
import { message } from 'antd';
import type { FC } from 'react';

// TODO 导出功能
const ButtonExport: FC<{ searchParams: SysLogininforPageQueryBo }> = ({ searchParams }) => {
  const { isLoading, mutate } = useMutation(sysLogininforPostExport, {
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
