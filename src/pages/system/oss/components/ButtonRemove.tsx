import { BaseButtonRemove } from '@/components';
import { AccessWithState } from '@/features';
import { useAtomValueMainTableActions } from '@/pages/system/oss/model';
import { sysOssPostRemove } from '@/services/system/System';
import { useMutation } from '@tanstack/react-query';
import { App } from 'antd';
import type { FC } from 'react';

export interface ButtonRemoveProps {
  ossIds: number[];
  batch?: boolean;
  disabled?: boolean;
}

const ButtonRemove: FC<ButtonRemoveProps> = ({ ossIds, batch, disabled }) => {
  const { message, modal } = App.useApp();

  const mainTableActions = useAtomValueMainTableActions();

  const { mutate, isLoading } = useMutation(sysOssPostRemove, {
    onSuccess: () => {
      mainTableActions?.reload();
      mainTableActions?.clearSelected?.();
      message.success('删除成功');
    },
  });

  const handleRemove = () => {
    modal.confirm({
      title: '删除用户',
      content: `确定删除OSS对象存储编号为 ${ossIds.join(',')} 的数据吗？`,
      onOk: () => mutate({ ossIds }),
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
