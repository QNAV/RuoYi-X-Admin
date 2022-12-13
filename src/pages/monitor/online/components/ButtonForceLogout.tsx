import { AccessWithState } from '@/components';
import { useAtomValueMainTableActions } from '@/pages/monitor/online/model';
import { sysUserOnlinePostForceLogout } from '@/services/system/Monitor';
import { rootKey } from '@/utils';
import { DeleteOutlined } from '@ant-design/icons';
import { Button, message, Modal } from 'antd';
import type { FC } from 'react';

interface ButtonForceLogoutProps {
  userName: string;
  tokenId: string;
  batch?: boolean;
  disabled?: boolean;
}

const ButtonForceLogout: FC<ButtonForceLogoutProps> = ({ userName, tokenId, batch = false, disabled }) => {
  const mainTableActions = useAtomValueMainTableActions();

  const handleForceLogout = () => {
    Modal.confirm({
      title: '操作确认',
      content: `确定强退用户 ${userName} 吗？`,
      onOk: async () => {
        await sysUserOnlinePostForceLogout({ tokenId });

        mainTableActions?.clearSelected?.();
        mainTableActions?.reload();

        message.success('强退成功');
      },
    });
  };

  return (
    <AccessWithState
      accessKey={(e) => {
        if (e.has(rootKey)) {
          return true;
        }

        if (batch) {
          return e.has('monitor:online:batchLogout');
        }

        return e.has('monitor:online:forceLogout');
      }}
    >
      <Button icon={<DeleteOutlined />} disabled={disabled} danger size="small" type="link" onClick={handleForceLogout}>
        {batch ? '批量强退' : '强退'}
      </Button>
    </AccessWithState>
  );
};

export default ButtonForceLogout;
