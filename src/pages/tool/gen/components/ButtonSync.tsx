import { Access } from '@/components';
import { useAtomValueAccess } from '@/models';
import { GenGetSynchDb } from '@/services/gen/GenService';
import { CloudSyncOutlined } from '@ant-design/icons';
import { useMutation } from '@tanstack/react-query';
import { Button, message } from 'antd';
import type { FC } from 'react';

const ButtonSync: FC<{ tableName: string }> = ({ tableName }) => {
  const { canEditToolGen } = useAtomValueAccess();

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
    <Access accessible={canEditToolGen}>
      <Button loading={isLoading} type="link" icon={<CloudSyncOutlined />} onClick={() => mutate()}>
        同步
      </Button>
    </Access>
  );
};

export default ButtonSync;
