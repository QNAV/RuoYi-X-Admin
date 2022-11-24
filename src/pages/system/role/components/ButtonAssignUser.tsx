import { Access } from '@/components';
import { useAtomValueRoleDetails } from '@/pages/system/role/model';
import { UserOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';

const ButtonAssignUser: FC = () => {
  const navigate = useNavigate();

  const { roleId } = useAtomValueRoleDetails();

  return (
    <Access accessible>
      <Button type="primary" ghost onClick={() => navigate(`/system/role-auth/${roleId}`)} icon={<UserOutlined />}>
        分配用户
      </Button>
    </Access>
  );
};

export default ButtonAssignUser;
