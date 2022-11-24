import { Access } from '@/components';
import { useAtomValueMainTableActions } from '@/pages/monitor/operlog/model';
import { sysOperLogPostRemove } from '@/services/system/Monitor';
import { DeleteOutlined } from '@ant-design/icons';
import { useMutation } from '@tanstack/react-query';
import { Button, message, Modal } from 'antd';
import type { FC } from 'react';

const ButtonRemove: FC<{
  operId: number;
  isBatch?: boolean;
  disabled?: boolean;
}> = ({ operId, disabled = false, isBatch = false }) => {
  const text = isBatch ? '批量删除' : '删除';

  const mainTableActions = useAtomValueMainTableActions();

  const { mutateAsync, isLoading } = useMutation(
    async (operId: number) => {
      await sysOperLogPostRemove({ operIds: operId });
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
      content: `确定删除操作编号为 ${operId} 的操作日志吗`,
      onOk: async () => mutateAsync(operId),
      okButtonProps: {
        loading: isLoading,
      },
    });
  };

  return (
    <Access accessible>
      <Button type="link" danger disabled={disabled} icon={<DeleteOutlined />} onClick={onRemove}>
        {text}
      </Button>
    </Access>
  );
};

export default ButtonRemove;
