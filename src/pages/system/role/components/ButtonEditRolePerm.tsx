import {
  useEditRolePermissionValue,
  useEndEditRolePermission,
  useStartEditRolePermission,
} from '@/pages/system/role/model';
import { useAccess } from '@@/plugin-access';
import { Button } from 'antd';
import type { FC } from 'react';

const ButtonEditRolePerm: FC = () => {
  const access = useAccess();

  const startEditRolePermission = useStartEditRolePermission();
  const endEditRolePermission = useEndEditRolePermission();
  const editRolePermissionValue = useEditRolePermissionValue();

  if (!access.canEditSysRole) {
    return null;
  }

  if (editRolePermissionValue) {
    return <Button onClick={endEditRolePermission}>取消编辑</Button>;
  }

  return (
    <Button type="primary" onClick={startEditRolePermission}>
      编辑权限
    </Button>
  );
};

export default ButtonEditRolePerm;
