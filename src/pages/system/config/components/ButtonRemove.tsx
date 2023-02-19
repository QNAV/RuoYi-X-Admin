import { BaseButtonRemove } from '@/components';
import { AccessWithState } from '@/features';
import { useAtomValueMainTableActions } from '@/pages/system/config/model';
import { sysConfigPostRemove } from '@/services/system/System';
import { useMutation } from '@tanstack/react-query';
import { App } from 'antd';
import type { FC } from 'react';

const ButtonRemove: FC<{
  configIds: number[];
  batch?: boolean;
  disabled?: boolean;
}> = ({ configIds, disabled, batch }) => {
  const { modal, message } = App.useApp();

  const mainTableActions = useAtomValueMainTableActions();

  const { mutate, isLoading } = useMutation(sysConfigPostRemove, {
    onSuccess: () => {
      mainTableActions?.reload();
      mainTableActions?.clearSelected?.();
      message.success('删除成功');
    },
  });

  const handleRemove = () => {
    modal.confirm({
      title: '操作确认',
      content: `确定删除参数编号为 ${configIds.join(',')} 的参数吗？`,
      onOk: () => mutate({ configIds }),
      okButtonProps: {
        loading: isLoading,
      },
    });
  };

  return (
    <AccessWithState accessKey="system:config:remove">
      <BaseButtonRemove batch={batch} disabled={disabled} onClick={handleRemove} />
    </AccessWithState>
  );
};

export default ButtonRemove;
