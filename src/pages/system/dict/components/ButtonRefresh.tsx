import { Access } from '@/components';
import { sysDictTypePostRefreshCache } from '@/services/system/System';
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
            title: '确定要刷新缓存吗？',
            content: '刷新缓存后，所有字典数据将重新加载',
            onOk: async () => {
              await sysDictTypePostRefreshCache();
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
