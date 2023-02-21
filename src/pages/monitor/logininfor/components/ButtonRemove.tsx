import { BaseButtonRemove } from '@/components';
import { AccessWithState } from '@/features';
import { useAtomValueMainTableActions } from '@/pages/monitor/logininfor/model';
import { sysLogininforPostRemove } from '@/services/system/Monitor';
import { useMutation } from '@tanstack/react-query';
import { App } from 'antd';
import type { FC } from 'react';

const ButtonRemove: FC<{
  infoIds: number[];
  batch?: boolean;
  disabled?: boolean;
}> = ({ infoIds, disabled, batch }) => {
  const mainTableActions = useAtomValueMainTableActions();

  const { message, modal } = App.useApp();

  const { mutate, isLoading } = useMutation(sysLogininforPostRemove, {
    onSuccess: () => {
      mainTableActions?.clearSelected?.();
      mainTableActions?.reload();

      message.success('删除成功');
    },
  });

  const handleRemove = () => {
    modal.confirm({
      title: '操作确认',
      content: `确定删除访问编号为 ${infoIds.join(',')} 的访问记录吗？`,
      okButtonProps: { loading: isLoading },
      onOk: () => mutate({ infoIds }),
    });
  };

  return (
    <AccessWithState accessKey="monitor:logininfor:remove">
      <BaseButtonRemove batch={batch} disabled={disabled} onClick={handleRemove} />
    </AccessWithState>
  );
};

export default ButtonRemove;
