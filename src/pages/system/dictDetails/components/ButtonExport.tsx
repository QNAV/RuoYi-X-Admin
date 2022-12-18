import { BaseButtonExport } from '@/components';
import { AccessWithState } from '@/features';
import type { SysDictDataQueryBo } from '@/services/system/data-contracts';
import { sysDictDataPostExport } from '@/services/system/System';
import { useMutation } from '@tanstack/react-query';
import { message } from 'antd';
import type { FC } from 'react';

const ButtonExport: FC<{ searchParams: SysDictDataQueryBo }> = ({ searchParams }) => {
  const { isLoading, mutate } = useMutation(sysDictDataPostExport, {
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
