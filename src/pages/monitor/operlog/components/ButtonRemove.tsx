import { AccessWithState, BaseButtonRemove } from '@/components';
import { useAtomValueMainTableActions } from '@/pages/monitor/operlog/model';
import { sysOperLogPostRemove } from '@/services/system/Monitor';
import { useMutation } from '@tanstack/react-query';
import { message, Modal } from 'antd';
import type { FC } from 'react';

const ButtonRemove: FC<{
  operId: number;
  batch?: boolean;
  disabled?: boolean;
}> = ({ operId, disabled = false, batch = false }) => {
  const mainTableActions = useAtomValueMainTableActions();

  const { mutateAsync, isLoading } = useMutation(sysOperLogPostRemove, {
    onSuccess: () => {
      mainTableActions?.reload();
      mainTableActions?.clearSelected?.();
      message.success('删除成功');
    },
  });

  const onRemove = () => {
    Modal.confirm({
      title: '操作确认',
      content: `确定删除日志编号为 ${operId} 的操作日志吗?`,
      onOk: async () => mutateAsync({ operIds: operId }),
      okButtonProps: {
        loading: isLoading,
      },
    });
  };

  return (
    <AccessWithState accessKey="monitor:operlog:remove">
      <BaseButtonRemove disabled={disabled} batch={batch} onClick={onRemove} />
    </AccessWithState>
  );
};

export default ButtonRemove;
