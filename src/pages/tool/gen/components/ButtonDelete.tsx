import { GenPostRemove } from '@/services/gen/GenService';
import { DeleteOutlined } from '@ant-design/icons';
import type { ProCoreActionType } from '@ant-design/pro-components';
import { Button, message, Modal } from 'antd';
import type { FC } from 'react';
import { useMutation } from 'react-query';

const ButtonDelete: FC<{ tableIds: number[]; tableActions?: ProCoreActionType }> = ({
  tableIds = [],
  tableActions,
}) => {
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
    <Button loading={isLoading} icon={<DeleteOutlined />} type="link" onClick={handleDelete}>
      删除
    </Button>
  );
};

export default ButtonDelete;