import { Access } from '@/components';
import { useAtomValueAccess } from '@/models';
import { useAtomValueMainTableActions } from '@/pages/monitor/logininfor/model';
import { SysLogininforPostClean } from '@/services/sys/SysLoginService';
import { DeleteOutlined } from '@ant-design/icons';
import { useMutation } from '@tanstack/react-query';
import { Button, message, Modal } from 'antd';
import type { FC } from 'react';

const ButtonCleanUp: FC = () => {
  const { canRemoveSysOperLog } = useAtomValueAccess();
  const tableActions = useAtomValueMainTableActions();
  const { isLoading, mutate } = useMutation(() => SysLogininforPostClean(), {
    onSuccess: () => {
      tableActions?.reload();
      message.success('清空访问记录成功');
    },
  });

  return (
    <Access accessible={canRemoveSysOperLog}>
      <Button
        danger
        icon={<DeleteOutlined />}
        onClick={() =>
          Modal.confirm({
            title: '清空访问记录',
            content: '清空访问记录后将无法恢复,确认清空吗？',
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
