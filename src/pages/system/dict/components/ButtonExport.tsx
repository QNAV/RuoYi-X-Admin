import { AccessWithState, BaseButtonExport } from '@/components';
import type { SysDictTypeQueryBo } from '@/services/system/data-contracts';
import { sysDictTypePostExport } from '@/services/system/System';
import { useMutation } from '@tanstack/react-query';
import { message } from 'antd';
import type { FC } from 'react';

const ButtonExport: FC<{ searchParams: SysDictTypeQueryBo }> = ({ searchParams }) => {
  const { isLoading, mutate } = useMutation(() => sysDictTypePostExport(searchParams), {
    onSuccess: () => {
      message.success('导出成功');
    },
  });

  return (
    <AccessWithState accessKey="system:dict:export">
      <BaseButtonExport loading={isLoading} onClick={() => mutate()} />
    </AccessWithState>
  );
};

export default ButtonExport;
