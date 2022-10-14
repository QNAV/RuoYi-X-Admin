import { Access } from '@/components';
import { useAtomValueAccess } from '@/models';
import { useAtomValueMainTableActions } from '@/pages/monitor/operlog/model';
import { SysOperLogPostClean } from '@/services/sys/SysOperlogService';
import { DeleteOutlined } from '@ant-design/icons';
import { useMutation } from '@tanstack/react-query';
import { Button, message, Modal } from 'antd';
import type { FC } from 'react';

const ButtonCleanUp: FC = () => {
  const { canRemoveSysOperLog } = useAtomValueAccess();
  const tableActions = useAtomValueMainTableActions();
  const { isLoading, mutate } = useMutation(() => SysOperLogPostClean(), {
    onSuccess: () => {
      tableActions?.reload();
      message.success('清空操作日志成功');
    },
  });

  return (
    <Access accessible={canRemoveSysOperLog}>
      <Button
        danger
        icon={<DeleteOutlined />}
        onClick={() =>
          Modal.confirm({
            title: '清空操作日志',
            content: '清空操作日志后将无法恢复,确认清空操作日志吗？',
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
