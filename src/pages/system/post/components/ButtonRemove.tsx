import { useMainTableActionsRecoilValue } from '@/pages/system/post/model';
import { SysPostPostRemove } from '@/services/sys/SysPostService';
import { Access, useAccess } from '@@/plugin-access';
import { DeleteOutlined } from '@ant-design/icons';
import { useMutation } from '@tanstack/react-query';
import { Button, message, Modal } from 'antd';
import type { FC } from 'react';

const ButtonRemove: FC<{
  postId: number;
  isBatch?: boolean;
  disabled?: boolean;
}> = ({ postId, isBatch, disabled }) => {
  const text = isBatch ? '批量删除' : '删除';
  const access = useAccess();

  const mainTableActions = useMainTableActionsRecoilValue();

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
      content: `确定删除 岗位编号 为 ${postId} 的岗位吗？`,
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