import { Access } from '@/components';
import { sysConfigPostRefreshCache } from '@/services/system/System';
import { ReloadOutlined } from '@ant-design/icons';
import { Button, message, Modal } from 'antd';
import type { FC } from 'react';

const ButtonRefresh: FC = () => {
  return (
    <Access accessible>
      <Button
        danger
        icon={<ReloadOutlined />}
        onClick={() => {
          Modal.confirm({
            title: '刷新缓存？',
            content: '确定刷新缓存吗？',
            onOk: async () => {
              await sysConfigPostRefreshCache();
              message.success('刷新成功');
            },
          });
        }}
      >
        刷新缓存
      </Button>
    </Access>
  );
};

export default ButtonRefresh;
