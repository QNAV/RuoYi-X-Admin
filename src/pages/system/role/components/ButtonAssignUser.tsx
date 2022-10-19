import { Access } from '@/components';
import { useAtomValueAccess } from '@/models';
import { UserOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';

const ButtonAssignUser: FC = () => {
  const { canEditSysRole } = useAtomValueAccess();

  const navigate = useNavigate();

  return (
    <Access accessible={canEditSysRole}>
      <Button type="primary" ghost onClick={() => navigate('/')} icon={<UserOutlined />}>
        分配用户
      </Button>
    </Access>
  );
};

export default ButtonAssignUser;
