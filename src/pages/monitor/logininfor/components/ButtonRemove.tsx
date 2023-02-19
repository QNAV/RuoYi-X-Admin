import { BaseButtonRemove } from '@/components';
import { AccessWithState } from '@/features';
import { useAtomValueMainTableActions } from '@/pages/monitor/logininfor/model';
import { sysLogininforPostRemove } from '@/services/system/Monitor';
import { App } from 'antd';
import type { FC } from 'react';

const ButtonRemove: FC<{
  infoId: number[];
  batch?: boolean;
  disabled?: boolean;
}> = ({ infoId, disabled, batch }) => {
  const mainTableActions = useAtomValueMainTableActions();

  const { message, modal } = App.useApp();

  const handleRemove = () => {
    modal.confirm({
      title: '操作确认',
      content: `确定删除访问编号为 ${infoId} 的访问记录吗？`,
      onOk: async () => {
        await sysLogininforPostRemove({ infoIds: infoId });

        mainTableActions?.clearSelected?.();
        mainTableActions?.reload();

        message.success('删除成功');
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
