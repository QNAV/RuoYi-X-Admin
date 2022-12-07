import { AccessWithState, BaseButtonRemove } from '@/components';
import { useAtomValueMainTableActions } from '@/pages/monitor/logininfor/model';
import { sysLogininforPostRemove } from '@/services/system/Monitor';
import { useMutation } from '@tanstack/react-query';
import { message, Modal } from 'antd';
import type { FC } from 'react';

const ButtonRemove: FC<{
  infoId: number;
  batch?: boolean;
  disabled?: boolean;
}> = ({ infoId, disabled, batch }) => {
  const mainTableActions = useAtomValueMainTableActions();

  const { mutateAsync, isLoading } = useMutation(sysLogininforPostRemove, {
    onSuccess: () => {
      message.success('删除成功');

      mainTableActions?.reload();
      mainTableActions?.clearSelected?.();
    },
  });

  const handleRemove = () => {
    Modal.confirm({
      title: '操作确认',
      content: `确定删除访问编号为 ${infoId} 的访问记录吗？`,
      onOk: () => mutateAsync({ infoIds: infoId }),
      okButtonProps: {
        loading: isLoading,
      },
    });
  };

  return (
    <AccessWithState accessKey="monitor:logininfor:remove">
      <BaseButtonRemove batch={batch} disabled={disabled} onClick={handleRemove} />
    </AccessWithState>
  );
};

export default ButtonRemove;
