import { AccessWithState } from '@/components';
import { sysDictTypePostRefreshCache } from '@/services/system/System';
import { ReloadOutlined } from '@ant-design/icons';
import { useMutation } from '@tanstack/react-query';
import { Button, message, Modal } from 'antd';
import type { FC } from 'react';

const ButtonRefresh: FC = () => {
  const { mutateAsync, isLoading } = useMutation(() => sysDictTypePostRefreshCache(), {
    onSuccess: () => message.success('刷新成功'),
  });

  return (
    <AccessWithState accessKey="system:post:edit">
      <Button
        danger
        icon={<ReloadOutlined />}
        onClick={() => {
          Modal.confirm({
            title: '操作确认',
            content: '刷新缓存后，所有字典数据将重新加载',
            onOk: () => mutateAsync(),
            okButtonProps: {
              loading: isLoading,
            },
          });
        }}
      >
        刷新缓存
      </Button>
    </AccessWithState>
  );
};

export default ButtonRefresh;
