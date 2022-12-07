import { AccessWithState } from '@/components';
import { useAtomValueMainTableActions } from '@/pages/monitor/operlog/model';
import { sysOperLogPostClean } from '@/services/system/Monitor';
import { DeleteOutlined } from '@ant-design/icons';
import { useMutation } from '@tanstack/react-query';
import { Button, message, Modal } from 'antd';
import type { FC } from 'react';

const ButtonCleanUp: FC = () => {
  const tableActions = useAtomValueMainTableActions();

  const { isLoading, mutate } = useMutation(sysOperLogPostClean, {
    onSuccess: () => {
      message.success('清空成功');
      tableActions?.reload();
    },
  });

  const onCleanUp = () => {
    Modal.confirm({
      title: '操作确认',
      content: '确认清空操作日志吗？',
      okButtonProps: {
        loading: isLoading,
      },
      onOk: () => mutate({}),
    });
  };

  return (
    <AccessWithState accessKey="monitor:operlog:remove">
      <Button danger icon={<DeleteOutlined />} onClick={() => onCleanUp()}>
        清空
      </Button>
    </AccessWithState>
  );
};

export default ButtonCleanUp;
