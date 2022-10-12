import { Access } from '@/components';
import { useAtomValueAccess } from '@/models';
import { SysDictTypePostRefreshCache } from '@/services/sys/SysDictTypeService';
import { ReloadOutlined } from '@ant-design/icons';
import { Button, message, Modal } from 'antd';
import type { FC } from 'react';

const ButtonRefresh: FC = () => {
  const { canRemoveSysDict } = useAtomValueAccess();

  return (
    <Access accessible={canRemoveSysDict}>
      <Button
        danger
        icon={<ReloadOutlined />}
        onClick={() => {
          Modal.confirm({
            title: '确定要刷新缓存吗？',
            content: '刷新缓存后，所有字典数据将重新加载',
            onOk: async () => {
              await SysDictTypePostRefreshCache();
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
