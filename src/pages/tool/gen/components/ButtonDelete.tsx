import { useAtomValueMainTableActions } from '@/pages/tool/gen/model';
import { GenPostRemove } from '@/services/gen/GenService';
import { DeleteOutlined } from '@ant-design/icons';
import { useMutation } from '@tanstack/react-query';
import { Button, message, Modal } from 'antd';
import type { FC } from 'react';

const ButtonDelete: FC<{ tableIds: number[]; isBatch?: boolean }> = ({ tableIds, isBatch = false }) => {
  const text = isBatch ? '批量删除' : '删除';
  const disabled = tableIds.length === 0 && isBatch;

  const tableActions = useAtomValueMainTableActions();

  const { mutateAsync, isLoading } = useMutation(GenPostRemove, {
    onSuccess: () => {
      tableActions?.reload();
      tableActions?.clearSelected?.();
      message.success('删除成功');
    },
  });

  const handleDelete = () => {
    Modal.confirm({
      title: '删除生成代码',
      content: `确定删除 表ID 为 ${tableIds.join(',')} 生成的代码吗？`,
      onOk: async () => {
        // @ts-ignore
        await mutateAsync({ tableIds });
      },
    });
  };

  return (
    <Button loading={isLoading} icon={<DeleteOutlined />} type="link" onClick={handleDelete} disabled={disabled}>
      {text}
    </Button>
  );
};

export default ButtonDelete;
