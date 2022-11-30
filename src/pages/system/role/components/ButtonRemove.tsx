import { AccessWithState, BaseButtonRemove } from '@/components';
import { useAtomValueRoleDetails, useAtomValueRoleListActions, useHideRoleDetails } from '@/pages/system/role/model';
import { sysRolePostRemove } from '@/services/system/System';
import { message, Modal } from 'antd';
import type { FC } from 'react';

const ButtonRemove: FC = () => {
  const roleListActions = useAtomValueRoleListActions();

  const hideRoleDetails = useHideRoleDetails();
  const { roleId, open } = useAtomValueRoleDetails();

  const handleDel = () =>
    Modal.confirm({
      title: '操作确认',
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
    <AccessWithState accessKey="system:role:remove">
      <BaseButtonRemove type="primary" size="middle" disabled={!open} onClick={handleDel} />
    </AccessWithState>
  );
};

export default ButtonRemove;
