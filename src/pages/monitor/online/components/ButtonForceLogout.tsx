import { AccessWithState } from '@/features';
import { useAtomValueMainTableActions } from '@/pages/monitor/online/model';
import { sysUserOnlinePostForceLogout } from '@/services/system/Monitor';
import { rootKey } from '@/utils';
import { DeleteOutlined } from '@ant-design/icons';
import { useMutation } from '@tanstack/react-query';
import { App, Button } from 'antd';
import type { FC } from 'react';

interface ButtonForceLogoutProps {
  userName: string;
  tokenId: string;
  batch?: boolean;
  disabled?: boolean;
}

const ButtonForceLogout: FC<ButtonForceLogoutProps> = ({ userName, tokenId, batch = false, disabled }) => {
  const mainTableActions = useAtomValueMainTableActions();

  const { message, modal } = App.useApp();

  const { mutate, isLoading } = useMutation(sysUserOnlinePostForceLogout, {
    onSuccess: () => {
      mainTableActions?.clearSelected?.();
      mainTableActions?.reload();

      message.success('强退成功');
    },
  });

  const handleForceLogout = () => {
    modal.confirm({
      title: '操作确认',
      content: `确定强退用户 ${userName} 吗？`,
      okButtonProps: {
        loading: isLoading,
      },
      onOk: () => mutate({ tokenId }),
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
