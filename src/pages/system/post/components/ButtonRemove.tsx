import { Access } from '@/components';
import { useAtomValueAccess } from '@/models';
import { useAtomValueMainTableActions } from '@/pages/system/post/model';
import { SysPostPostRemove } from '@/services/sys/SysPostService';
import { DeleteOutlined } from '@ant-design/icons';
import { useMutation } from '@tanstack/react-query';
import { Button, message, Modal, Typography } from 'antd';
import type { FC } from 'react';

const ButtonRemove: FC<{
  postId: number;
  postName: string;
  isBatch?: boolean;
  disabled?: boolean;
}> = ({ postId, postName, isBatch, disabled }) => {
  const text = isBatch ? '批量删除' : '删除';
  const access = useAtomValueAccess();

  const mainTableActions = useAtomValueMainTableActions();

  const { mutateAsync, isLoading } = useMutation(
    async (postIds: number) => {
      await SysPostPostRemove({ postIds });
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
      title: '删除岗位',
      content: (
        <>
          确定删除岗位<Typography.Text code>{postName}</Typography.Text>吗？
        </>
      ),
      onOk: async () => mutateAsync(postId),
      okButtonProps: {
        loading: isLoading,
      },
    });
  };

  return (
    <Access accessible={access.canRemoveSysPost}>
      <Button type="link" danger disabled={disabled} icon={<DeleteOutlined />} onClick={onRemove}>
        {text}
      </Button>
    </Access>
  );
};

export default ButtonRemove;
