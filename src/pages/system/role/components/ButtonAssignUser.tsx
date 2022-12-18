import { AccessWithState } from '@/features';
import { useAtomValueRoleDetails } from '@/pages/system/role/model';
import { UserOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import type { FC } from 'react';
import { generatePath, useNavigate } from 'react-router-dom';

const ButtonAssignUser: FC = () => {
  const navigate = useNavigate();

  const { roleId, open } = useAtomValueRoleDetails();

  return (
    <AccessWithState accessKey="system:user:edit">
      <Button
        type="primary"
        ghost
        onClick={() =>
          navigate(
            generatePath('/system/role-auth/:roleId', {
              roleId: roleId.toString(),
            }),
          )
        }
        icon={<UserOutlined />}
        disabled={!open}
      >
        分配用户
      </Button>
    </AccessWithState>
  );
};

export default ButtonAssignUser;
