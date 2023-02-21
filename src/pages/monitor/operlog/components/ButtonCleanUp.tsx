import { AccessWithState } from '@/features';
import { useAtomValueMainTableActions } from '@/pages/monitor/operlog/model';
import { sysOperLogPostClean } from '@/services/system/Monitor';
import { DeleteOutlined } from '@ant-design/icons';
import { useMutation } from '@tanstack/react-query';
import { App, Button } from 'antd';
import type { FC } from 'react';

const ButtonCleanUp: FC = () => {
  const mainTableActions = useAtomValueMainTableActions();

  const { message, modal } = App.useApp();

  const { mutate, isLoading } = useMutation(sysOperLogPostClean, {
    onSuccess: () => {
      mainTableActions?.reloadAndRest?.();
      mainTableActions?.reload();

      message.success('清空成功');
    },
  });

  const handleCleanUp = () => {
    modal.confirm({
      title: '操作确认',
      content: '确认清空操作日志吗？',
      okButtonProps: { loading: isLoading },
      onOk: () => mutate({}),
    });
  };

  return (
    <AccessWithState accessKey="monitor:operlog:remove">
      <Button danger icon={<DeleteOutlined />} onClick={handleCleanUp}>
        清空
      </Button>
    </AccessWithState>
  );
};

export default ButtonCleanUp;
