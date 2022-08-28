import { useHideRoleDetails, useRoleDetailsVisibleValue, useRoleListActions } from '@/pages/system/role/model';
import { SysRolePostRemove } from '@/services/sys/SysRoleService';
import { Access, useAccess } from '@@/plugin-access';
import { DeleteOutlined } from '@ant-design/icons';
import { Button, message, Modal } from 'antd';
import type { FC } from 'react';

const ButtonDeleteRole: FC = () => {
  const access = useAccess();

  const mainTableActions = useRoleListActions();

  const hideRoleDetails = useHideRoleDetails();
  const { visible, roleId } = useRoleDetailsVisibleValue();

  const handleDel = () =>
    Modal.confirm({
      title: '删除确认',
      content: `确定删除 角色ID 为 ${roleId} 的角色吗？`,
      onOk: async () => {
        await SysRolePostRemove({ roleIds: roleId });
        hideRoleDetails();
        mainTableActions?.clearSelected?.();
        mainTableActions?.reload();
        message.success('删除成功');
      },
    });

  return (
    <Access accessible={access.canRemoveSysRole}>
      <Button danger ghost icon={<DeleteOutlined />} disabled={!visible} onClick={handleDel}>
        删除
      </Button>
    </Access>
  );
};

export default ButtonDeleteRole;
