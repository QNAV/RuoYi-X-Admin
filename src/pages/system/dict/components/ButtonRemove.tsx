import { BaseButtonRemove } from '@/components';
import { AccessWithState } from '@/features';
import { useAtomValueMainTableActions } from '@/pages/system/dict/model';
import { sysDictTypePostRemove } from '@/services/system/System';
import { useMutation } from '@tanstack/react-query';
import { App } from 'antd';
import type { FC } from 'react';

const ButtonRemove: FC<{
  dictId: number[];
  batch?: boolean;
  disabled?: boolean;
}> = ({ dictId, disabled, batch }) => {
  const { message, modal } = App.useApp();

  const mainTableActions = useAtomValueMainTableActions();

  const { mutateAsync, isLoading } = useMutation(sysDictTypePostRemove, {
    onSuccess: () => {
      mainTableActions?.reload();
      mainTableActions?.clearSelected?.();
      message.success('删除成功');
    },
  });

  const onRemove = () => {
    modal.confirm({
      title: '操作确认',
      content: `确定删除字典编号为 ${dictId} 的字典吗？`,
      onOk: () => mutateAsync({ dictIds: dictId }),
      okButtonProps: {
        loading: isLoading,
      },
    });
  };

  return (
    <AccessWithState accessKey="system:dict:remove">
      <BaseButtonRemove batch={batch} disabled={disabled} onClick={onRemove} />
    </AccessWithState>
  );
};

export default ButtonRemove;
