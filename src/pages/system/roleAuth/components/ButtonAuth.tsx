import { Access } from '@/components';
import { useActionsMainTable } from '@/pages/system/roleAuth/model';
import { sysRolePostCancelAuthUser, sysRolePostSelectAuthUserAll } from '@/services/system/System';
import { CloseCircleOutlined } from '@ant-design/icons';
import { useMutation } from '@tanstack/react-query';
import { Button, message, Modal, Typography } from 'antd';
import type { FC } from 'react';
import { useParams } from 'react-router-dom';

const ButtonAuth: FC<{
  userId: number | number[];
  userName: string;
  isBatch?: boolean;
  disabled?: boolean;
}> = ({ userId, userName, isBatch, disabled }) => {
  const text = isBatch ? '批量取消授权' : '取消授权';

  const params = useParams<{ roleId: string }>();
  const roleId = Number(params.roleId);

  const actionsMainTable = useActionsMainTable();

  const { mutateAsync, isLoading } = useMutation(
    async () => {
      if (Array.isArray(userId)) {
        await sysRolePostSelectAuthUserAll({ roleId, userIds: userId });
      } else {
        await sysRolePostCancelAuthUser({ roleId, userId });
      }
    },
    {
      onSuccess: () => {
        actionsMainTable?.reload();
        actionsMainTable?.clearSelected?.();
        message.success('取消授权成功');
      },
    },
  );

  const onRemove = () => {
    Modal.confirm({
      title: '取消授权',
      content: (
        <>
          确定取消授权用户<Typography.Text code>{userName}</Typography.Text>吗？
        </>
      ),
      onOk: () => mutateAsync(),
      okButtonProps: {
        loading: isLoading,
      },
    });
  };

  return (
    <Access accessible>
      <Button type="link" danger disabled={disabled} icon={<CloseCircleOutlined />} onClick={onRemove}>
        {text}
      </Button>
    </Access>
  );
};

export default ButtonAuth;
