import { Access } from '@/components';
import { useAtomValueAccess } from '@/models';
import { useAtomValueMainTableActions } from '@/pages/monitor/operlog/model';
import { SysOperLogPostRemove } from '@/services/sys/SysOperlogService';
import { DeleteOutlined } from '@ant-design/icons';
import { useMutation } from '@tanstack/react-query';
import { Button, message, Modal, Typography } from 'antd';
import type { FC } from 'react';

const ButtonRemove: FC<{
  operId: number;
  title: string;
  isBatch?: boolean;
  disabled?: boolean;
}> = ({ operId, title, disabled, isBatch }) => {
  const text = isBatch ? '批量删除' : '删除';

  const { canRemoveSysOperLog } = useAtomValueAccess();

  const mainTableActions = useAtomValueMainTableActions();

  const { mutateAsync, isLoading } = useMutation(
    async (operId: number) => {
      await SysOperLogPostRemove({ operIds: operId });
    },
    {
      onSuccess: () => {
        mainTableActions?.reload();
        mainTableActions?.clearSelected?.();
        message.success('删除成功');
      },
    },
  );

  const onRemove = () => {
    Modal.confirm({
      title: '删除操作日志',
      content: (
        <>
          确定删除操作日志<Typography.Text code>{title}</Typography.Text>吗？
        </>
      ),
      onOk: async () => mutateAsync(operId),
      okButtonProps: {
        loading: isLoading,
      },
    });
  };

  return (
    <Access accessible={canRemoveSysOperLog}>
      <Button type="link" danger disabled={disabled} icon={<DeleteOutlined />} onClick={onRemove}>
        {text}
      </Button>
    </Access>
  );
};

export default ButtonRemove;
