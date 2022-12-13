import { AccessWithState, BaseButtonRemove } from '@/components';
import { useAtomValueMainTableActions } from '@/pages/monitor/operlog/model';
import { sysOperLogPostRemove } from '@/services/system/Monitor';
import { message, Modal } from 'antd';
import type { FC } from 'react';

const ButtonRemove: FC<{
  operId: number;
  batch?: boolean;
  disabled?: boolean;
}> = ({ operId, disabled = false, batch = false }) => {
  const mainTableActions = useAtomValueMainTableActions();

  const handleRemove = () => {
    Modal.confirm({
      title: '操作确认',
      content: `确定删除日志编号为 ${operId} 的操作日志吗?`,
      onOk: async () => {
        await sysOperLogPostRemove({ operIds: operId });

        mainTableActions?.clearSelected?.();
        mainTableActions?.reload();

        message.success('删除成功');
      },
    });
  };

  return (
    <AccessWithState accessKey="monitor:operlog:remove">
      <BaseButtonRemove disabled={disabled} batch={batch} onClick={handleRemove} />
    </AccessWithState>
  );
};

export default ButtonRemove;
