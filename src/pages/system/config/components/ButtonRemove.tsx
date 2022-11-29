import { AccessWithState, BaseButtonRemove } from '@/components';
import { useAtomValueMainTableActions } from '@/pages/system/config/model';
import { sysConfigPostRemove } from '@/services/system/System';
import { useMutation } from '@tanstack/react-query';
import { message, Modal } from 'antd';
import type { FC } from 'react';

const ButtonRemove: FC<{
  configId: number;
  batch?: boolean;
  disabled?: boolean;
}> = ({ configId, disabled, batch }) => {
  const mainTableActions = useAtomValueMainTableActions();

  const { mutateAsync, isLoading } = useMutation(sysConfigPostRemove, {
    onSuccess: () => {
      mainTableActions?.reload();
      mainTableActions?.clearSelected?.();
      message.success('删除成功');
    },
  });

  const onRemove = () => {
    Modal.confirm({
      title: '操作确认',
      content: `确定删除参数编号为 ${configId} 的参数吗？`,
      onOk: () => mutateAsync({ configIds: configId }),
      okButtonProps: {
        loading: isLoading,
      },
    });
  };

  return (
    <AccessWithState accessKey="system:config:remove">
      <BaseButtonRemove batch={batch} disabled={disabled} onClick={onRemove} />
    </AccessWithState>
  );
};

export default ButtonRemove;
