import { Access } from '@/components';
import { useAtomValueMainTableActions } from '@/pages/system/post/model';
import { sysPostPostRemove } from '@/services/system/System';
import { DeleteOutlined } from '@ant-design/icons';
import { useMutation } from '@tanstack/react-query';
import { App, Button } from 'antd';
import type { FC } from 'react';

const ButtonRemove: FC<{
  postId: number[];
  isBatch?: boolean;
  disabled?: boolean;
}> = ({ postId, isBatch, disabled }) => {
  const text = isBatch ? '批量删除' : '删除';

  const mainTableActions = useAtomValueMainTableActions();

  const { message, modal } = App.useApp();

  const { mutateAsync, isLoading } = useMutation(
    async (postIds: number[]) => {
      await sysPostPostRemove({ postIds });
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
    modal.confirm({
      title: '删除岗位',
      content: `确定删除岗位编号为 ${postId} 的岗位吗？`,
      onOk: async () => mutateAsync(postId),
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
