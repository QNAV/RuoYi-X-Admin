import { Access } from '@/components';
import { useAtomValueAccess } from '@/models';
import { useValueMainTableActions } from '@/pages/system/user/model';
import { SysUserPostRemove } from '@/services/sys/SysUserService';
import { DeleteOutlined } from '@ant-design/icons';
import { useMutation } from '@tanstack/react-query';
import { Button, message, Modal, Typography } from 'antd';
import type { FC } from 'react';

const ButtonRemove: FC<{
  userId: number;
  userName: string;
  isBatch?: boolean;
  disabled?: boolean;
}> = ({ userId, userName, isBatch, disabled }) => {
  const text = isBatch ? '批量删除' : '删除';
  const access = useAtomValueAccess();

  const mainTableActions = useValueMainTableActions();

  const { mutateAsync, isLoading } = useMutation(
    async (userIds: number) => {
      await SysUserPostRemove({ userIds });
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
      title: '删除用户',
      content: (
        <>
          确定删除用户<Typography.Text code>{userName}</Typography.Text>吗？
        </>
      ),
      onOk: async () => mutateAsync(userId),
      okButtonProps: {
        loading: isLoading,
      },
    });
  };

  return (
    <Access accessible={access.canRemoveSysUser}>
      <Button type="link" danger disabled={disabled} icon={<DeleteOutlined />} onClick={onRemove}>
        {text}
      </Button>
    </Access>
  );
};

export default ButtonRemove;
