import { Access } from '@/components';
import { useAtomValueMainTableActions } from '@/pages/monitor/operlog/model';
import { sysOperLogPostClean } from '@/services/system/Monitor';
import { DeleteOutlined } from '@ant-design/icons';
import { useMutation } from '@tanstack/react-query';
import { Button, message, Modal } from 'antd';
import type { FC } from 'react';

const ButtonCleanUp: FC = () => {
  const tableActions = useAtomValueMainTableActions();

  const { isLoading, mutate } = useMutation(() => sysOperLogPostClean(), {
    onSuccess: () => {
      tableActions?.reload();
      message.success('清空操作日志成功');
    },
  });

  return (
    <Access accessible>
      <Button
        danger
        icon={<DeleteOutlined />}
        onClick={() =>
          Modal.confirm({
            title: '清空操作日志',
            content: '确认清空操作日志吗？',
            okButtonProps: {
              loading: isLoading,
            },
            onOk: mutate,
          })
        }
      >
        清空
      </Button>
    </Access>
  );
};

export default ButtonCleanUp;
