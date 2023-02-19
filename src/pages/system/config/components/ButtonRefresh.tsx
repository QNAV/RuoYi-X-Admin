import { sysConfigPostRefreshCache } from '@/services/system/System';
import { ReloadOutlined } from '@ant-design/icons';
import { useMutation } from '@tanstack/react-query';
import { App, Button } from 'antd';
import type { FC } from 'react';

const ButtonRefresh: FC = () => {
  const { message, modal } = App.useApp();

  const { isLoading, mutate } = useMutation(sysConfigPostRefreshCache, {
    onSuccess: () => {
      message.success('刷新成功');
    },
  });

  return (
    <Button
      danger
      icon={<ReloadOutlined />}
      onClick={() => {
        modal.confirm({
          title: '操作确认',
          content: '确定刷新缓存吗？',
          onOk: () => mutate({}),
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
