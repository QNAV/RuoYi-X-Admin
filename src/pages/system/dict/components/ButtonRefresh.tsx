import { sysDictTypePostRefreshCache } from '@/services/system/System';
import { ReloadOutlined } from '@ant-design/icons';
import { useMutation } from '@tanstack/react-query';
import { App, Button } from 'antd';
import type { FC } from 'react';

const ButtonRefresh: FC = () => {
  const { message, modal } = App.useApp();

  const { mutateAsync, isLoading } = useMutation(sysDictTypePostRefreshCache, {
    onSuccess: () => message.success('刷新成功'),
  });

  const onRefresh = () => {
    modal.confirm({
      title: '操作确认',
      content: '刷新缓存后，所有字典数据将重新加载',
      onOk: () => mutateAsync({}),
      okButtonProps: {
        loading: isLoading,
      },
    });
  };

  return (
    <Button danger icon={<ReloadOutlined />} onClick={onRefresh}>
      刷新缓存
    </Button>
  );
};

export default ButtonRefresh;
