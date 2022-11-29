import { sysConfigPostRefreshCache } from '@/services/system/System';
import { ReloadOutlined } from '@ant-design/icons';
import { useMutation } from '@tanstack/react-query';
import { Button, message, Modal } from 'antd';
import type { FC } from 'react';

const ButtonRefresh: FC = () => {
  const { isLoading, mutateAsync } = useMutation(sysConfigPostRefreshCache, {
    onSuccess: () => {
      message.success('刷新成功');
    },
  });

  return (
    <Button
      danger
      icon={<ReloadOutlined />}
      onClick={() => {
        Modal.confirm({
          title: '操作确认',
          content: '确定刷新缓存吗？',
          onOk: () => mutateAsync({}),
          okButtonProps: {
            loading: isLoading,
          },
        });
      }}
    >
      刷新缓存
    </Button>
  );
};

export default ButtonRefresh;
