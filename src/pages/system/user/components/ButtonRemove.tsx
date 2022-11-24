import { Access } from '@/components';
import { useAtomValueMainTableActions } from '@/pages/system/user/model';
import { sysUserPostRemove } from '@/services/system/System';
import { DeleteOutlined } from '@ant-design/icons';
import { useMutation } from '@tanstack/react-query';
import { Button, message, Modal } from 'antd';
import type { FC } from 'react';

const ButtonRemove: FC<{
  userId: number;
  isBatch?: boolean;
  disabled?: boolean;
}> = ({ userId, isBatch, disabled }) => {
  const text = isBatch ? '批量删除' : '删除';

  const mainTableActions = useAtomValueMainTableActions();

  const { mutateAsync, isLoading } = useMutation(() => sysUserPostRemove({ userIds: userId }), {
    onSuccess: () => {
      mainTableActions?.reload();
      mainTableActions?.clearSelected?.();
      message.success('删除成功');
    },
  });

  const onRemove = () => {
    Modal.confirm({
      title: '删除用户',
      content: `确定删除用户编号为 ${userId} 的数据吗？`,
      onOk: () => mutateAsync(),
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
