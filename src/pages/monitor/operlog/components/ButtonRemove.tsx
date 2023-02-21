import { BaseButtonRemove } from '@/components';
import { AccessWithState } from '@/features';
import { useAtomValueMainTableActions } from '@/pages/monitor/operlog/model';
import { sysOperLogPostRemove } from '@/services/system/Monitor';
import { useMutation } from '@tanstack/react-query';
import { App } from 'antd';
import type { FC } from 'react';

const ButtonRemove: FC<{
  operIds: number[];
  batch?: boolean;
  disabled?: boolean;
}> = ({ operIds, disabled = false, batch = false }) => {
  const mainTableActions = useAtomValueMainTableActions();

  const { message, modal } = App.useApp();

  const { mutate, isLoading } = useMutation(sysOperLogPostRemove, {
    onSuccess: () => {
      mainTableActions?.clearSelected?.();
      mainTableActions?.reload();

      message.success('删除成功');
    },
  });

  const handleRemove = () => {
    modal.confirm({
      title: '操作确认',
      content: `确定删除日志编号为 ${operIds.join(',')} 的操作日志吗?`,
      okButtonProps: { loading: isLoading },
      onOk: () => mutate({ operIds }),
    });
  };

  return (
    <AccessWithState accessKey="monitor:operlog:remove">
      <BaseButtonRemove disabled={disabled} batch={batch} onClick={handleRemove} />
    </AccessWithState>
  );
};

export default ButtonRemove;
