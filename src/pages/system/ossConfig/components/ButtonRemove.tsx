import { BaseButtonRemove } from '@/components';
import { AccessWithState } from '@/features';
import { useAtomValueMainTableActions } from '@/pages/system/ossConfig/model';
import { sysOssConfigPostRemove } from '@/services/system/System';
import { useMutation } from '@tanstack/react-query';
import { App } from 'antd';
import type { FC } from 'react';

export interface ButtonRemoveProps {
  ossConfigIds: number[];
  batch?: boolean;
  disabled?: boolean;
}

const ButtonRemove: FC<ButtonRemoveProps> = ({ ossConfigIds, batch, disabled }) => {
  const { message, modal } = App.useApp();

  const mainTableActions = useAtomValueMainTableActions();

  const { mutate, isLoading } = useMutation(sysOssConfigPostRemove, {
    onSuccess: () => {
      mainTableActions?.reload();
      mainTableActions?.clearSelected?.();
      message.success('删除成功');
    },
  });

  const handleRemove = () => {
    modal.confirm({
      title: '删除配置',
      content: `确定删除编号为 ${ossConfigIds.join(',')} 的配置吗？`,
      onOk: () => mutate({ ossConfigIds }),
      okButtonProps: {
        loading: isLoading,
      },
    });
  };

  return (
    <AccessWithState accessKey="system:oss:remove">
      <BaseButtonRemove batch={batch} disabled={disabled} onClick={handleRemove} />
    </AccessWithState>
  );
};

export default ButtonRemove;
