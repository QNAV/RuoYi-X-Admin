import { GenPostRemove } from '@/services/gen/GenService';
import { DeleteOutlined } from '@ant-design/icons';
import { Button, Modal } from 'antd';
import type { FC } from 'react';
import { useMutation } from 'react-query';

const ButtonDelete: FC<{ tableIds: number[] }> = ({ tableIds = [] }) => {
  const { mutateAsync, isLoading } = useMutation(GenPostRemove, { onSuccess: () => {} });

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
