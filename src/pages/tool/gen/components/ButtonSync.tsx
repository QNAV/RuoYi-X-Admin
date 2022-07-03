import { GenGetSynchDb } from '@/services/gen/GenService';
import { CloudSyncOutlined } from '@ant-design/icons';
import { Button, message } from 'antd';
import type { FC } from 'react';
import { useMutation } from 'react-query';

const ButtonSync: FC<{ tableName: string }> = ({ tableName }) => {
  const { isLoading, mutate } = useMutation(
    async () => {
      await GenGetSynchDb({ tableName });
    },
    {
      onSuccess: () => {
        message.success('同步成功');
      },
    },
  );

  return (
    <Button loading={isLoading} type="link" icon={<CloudSyncOutlined />} onClick={() => mutate()}>
      同步
    </Button>
  );
};

export default ButtonSync;
