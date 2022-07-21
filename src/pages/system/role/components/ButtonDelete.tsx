import { tableActionsAtom } from '@/pages/system/role/model';
import { SysRolePostRemove } from '@/services/sys/SysRoleService';
import { DeleteOutlined } from '@ant-design/icons';
import { useMutation } from '@tanstack/react-query';
import { Button, message, Modal } from 'antd';
import type { FC } from 'react';
import { useRecoilValue } from 'recoil';

const ButtonDelete: FC<{ roleIds: number[] }> = ({ roleIds }) => {
  const roleIdsStr = roleIds.join(',');
  const tableActions = useRecoilValue(tableActionsAtom);

  const { isLoading, mutateAsync } = useMutation(
    async () => {
      await SysRolePostRemove({ roleIds: roleIdsStr });
    },
    {
      onSuccess: () => {
        tableActions?.clearSelected?.();
        tableActions?.reload();
        message.success('删除成功');
      },
    },
  );

  const handleDel = () =>
    Modal.confirm({
      title: '删除确认',
      content: `确定删除 角色ID 为 ${roleIdsStr} 的角色吗？`,
      onOk: async () => {
        await mutateAsync();
      },
    });

  return (
    <Button type="link" icon={<DeleteOutlined />} loading={isLoading} onClick={handleDel}>
      删除
    </Button>
  );
};

export default ButtonDelete;
