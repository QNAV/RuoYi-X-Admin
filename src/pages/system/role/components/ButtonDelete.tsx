import { Access } from '@/components';
import { useAtomValueAccess } from '@/models';
import { useAtomValueRoleDetails, useAtomValueRoleListActions, useHideRoleDetails } from '@/pages/system/role/model';
import { SysRolePostRemove } from '@/services/sys/SysRoleService';
import { DeleteOutlined } from '@ant-design/icons';
import { Button, message, Modal, Typography } from 'antd';
import type { FC } from 'react';

const ButtonDelete: FC = () => {
  const access = useAtomValueAccess();

  const roleListActions = useAtomValueRoleListActions();

  const hideRoleDetails = useHideRoleDetails();
  const { roleId, roleName } = useAtomValueRoleDetails();

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
        roleListActions?.reload();
        roleListActions?.clearSelected?.();
        hideRoleDetails();
        message.success('删除成功');
      },
    });

  return (
    <Access accessible={access.canRemoveSysRole}>
      <Button danger ghost icon={<DeleteOutlined />} onClick={handleDel}>
        删除
      </Button>
    </Access>
  );
};

export default ButtonDelete;
