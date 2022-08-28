import { useHideRoleDetails, useRoleDetailsVisibleValue, useRoleListActions } from '@/pages/system/role/model';
import { SysRolePostRemove } from '@/services/sys/SysRoleService';
import { Access, useAccess } from '@@/plugin-access';
import { DeleteOutlined } from '@ant-design/icons';
import { Button, message, Modal, Typography } from 'antd';
import type { FC } from 'react';

const ButtonDeleteRole: FC = () => {
  const access = useAccess();

  const mainTableActions = useRoleListActions();

  const hideRoleDetails = useHideRoleDetails();
  const { visible, roleId, roleName } = useRoleDetailsVisibleValue();

  const handleDel = () =>
    Modal.confirm({
      title: '删除确认',

      content: (
        <>
          确定对角色<Typography.Text code>{roleName}</Typography.Text>进行<Typography.Text code>删除</Typography.Text>
          操作吗？
        </>
      ),
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
