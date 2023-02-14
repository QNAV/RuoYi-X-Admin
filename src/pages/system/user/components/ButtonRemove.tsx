import { BaseButtonRemove } from '@/components';
import { AccessWithState } from '@/features';
import { useAtomValueMainTableActions } from '@/pages/system/user/model';
import { sysUserPostRemove } from '@/services/system/System';
import { useMutation } from '@tanstack/react-query';
import { App } from 'antd';
import type { FC } from 'react';

export interface ButtonRemoveProps {
  userIds: number[];
  batch?: boolean;
  disabled?: boolean;
}

const ButtonRemove: FC<ButtonRemoveProps> = ({ userIds, batch, disabled }) => {
  const { message, modal } = App.useApp();

  const mainTableActions = useAtomValueMainTableActions();

  const { mutate, isLoading } = useMutation(sysUserPostRemove, {
    onSuccess: () => {
      mainTableActions?.reload();
      mainTableActions?.clearSelected?.();
      message.success('删除成功');
    },
  });

  const handleRemove = () => {
    modal.confirm({
      title: '删除用户',
      content: `确定删除用户编号为 ${userIds.join(',')} 的数据吗？`,
      onOk: () => mutate({ userIds }),
      okButtonProps: {
        loading: isLoading,
      },
    });
  };

  return (
    <AccessWithState accessKey="system:user:remove">
      <BaseButtonRemove batch={batch} disabled={disabled} onClick={handleRemove} />
    </AccessWithState>
  );
};

export default ButtonRemove;
