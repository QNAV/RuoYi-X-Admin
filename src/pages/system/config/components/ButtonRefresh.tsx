import { Access } from '@/components';
import { useAtomValueAccess } from '@/models';
import { SysConfigPostRefreshCache } from '@/services/sys/SysConfigService';
import { ReloadOutlined } from '@ant-design/icons';
import { Button, message, Modal } from 'antd';
import type { FC } from 'react';

const ButtonRefresh: FC = () => {
  const { canRemoveSysConfig } = useAtomValueAccess();
  return (
    <Access accessible={canRemoveSysConfig}>
      <Button
        danger
        icon={<ReloadOutlined />}
        onClick={() => {
          Modal.confirm({
            title: '确定要刷新缓存吗？',
            content: '刷新缓存后，所有参数设置将重新加载',
            onOk: async () => {
              await SysConfigPostRefreshCache();
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
