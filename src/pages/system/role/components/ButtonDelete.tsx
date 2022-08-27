import { useMainTableActions } from '@/pages/system/role/model';
import { SysRolePostRemove } from '@/services/sys/SysRoleService';
import { DeleteOutlined } from '@ant-design/icons';
import { Button, message, Modal } from 'antd';
import type { FC } from 'react';

const ButtonDelete: FC<{ roleId: number }> = ({ roleId }) => {
  const mainTableActions = useMainTableActions();

  const handleDel = (roleIds: number) =>
    Modal.confirm({
      title: '删除确认',
      content: `确定删除 角色ID 为 ${roleIds} 的角色吗？`,
      onOk: async () => {
        await SysRolePostRemove({ roleIds });
        mainTableActions?.reload();
        message.success('删除成功');
      },
    });

  return (
    <Button type="link" icon={<DeleteOutlined />} onClick={() => handleDel(roleId)}>
      删除
    </Button>
  );
};

export default ButtonDelete;
