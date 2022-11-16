import { Access } from '@/components';
import { useAtomValueAccess } from '@/models';
import { useAtomValueRoleDetails, useAtomValueRoleListActions, useHideRoleDetails } from '@/pages/system/role/model';
import { sysRolePostRemove } from '@/services/system/System';
import { DeleteOutlined } from '@ant-design/icons';
import { Button, message, Modal } from 'antd';
import type { FC } from 'react';

const ButtonDelete: FC = () => {
  const { canRemoveSysRole } = useAtomValueAccess();

  const roleListActions = useAtomValueRoleListActions();

  const hideRoleDetails = useHideRoleDetails();
  const { roleId } = useAtomValueRoleDetails();

  const handleDel = () =>
    Modal.confirm({
      title: '删除角色',
      content: `确定删除角色编号为 ${roleId} 的数据吗？`,
      onOk: async () => {
        await sysRolePostRemove({ roleIds: roleId });
        roleListActions?.reload();
        roleListActions?.clearSelected?.();
        hideRoleDetails();
        message.success('删除成功');
      },
    });

  return (
    <Access accessible={canRemoveSysRole}>
      <Button danger ghost icon={<DeleteOutlined />} onClick={handleDel}>
        删除
      </Button>
    </Access>
  );
};

export default ButtonDelete;
