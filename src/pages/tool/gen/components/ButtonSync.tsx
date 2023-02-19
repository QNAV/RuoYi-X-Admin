import { Access } from '@/components';
import { genGetSynchDb } from '@/services/gen/Tool';
import { CloudSyncOutlined } from '@ant-design/icons';
import { useMutation } from '@tanstack/react-query';
import { App, Button } from 'antd';
import type { FC } from 'react';

const ButtonSync: FC<{ tableName: string }> = ({ tableName }) => {
  const { message } = App.useApp();

  const { isLoading, mutate } = useMutation(
    async () => {
      await genGetSynchDb({ tableName });
    },
    {
      onSuccess: () => {
        message.success('同步成功');
      },
    },
  );

  return (
    <Access accessible>
      <Button loading={isLoading} type="link" icon={<CloudSyncOutlined />} onClick={() => mutate()}>
        同步
      </Button>
    </Access>
  );
};

export default ButtonSync;
