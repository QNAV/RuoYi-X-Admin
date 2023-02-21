import { AccessWithState } from '@/features';
import { genGetSynchDb } from '@/services/gen/Tool';
import { CloudSyncOutlined } from '@ant-design/icons';
import { useMutation } from '@tanstack/react-query';
import { App, Button } from 'antd';
import type { FC } from 'react';

const ButtonSync: FC<{ tableName: string }> = ({ tableName }) => {
  const { message } = App.useApp();

  const { isLoading, mutate } = useMutation(genGetSynchDb, {
    onSuccess: () => {
      message.success('同步成功');
    },
  });

  return (
    <AccessWithState accessKey="tool:gen:code">
      <Button loading={isLoading} type="link" icon={<CloudSyncOutlined />} onClick={() => mutate({ tableName })}>
        同步
      </Button>
    </AccessWithState>
  );
};

export default ButtonSync;
