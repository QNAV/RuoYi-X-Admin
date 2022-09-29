import { Access } from '@/components';
import { useAtomValueAccess } from '@/models';
import { EditOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import type { FC } from 'react';

const ButtonEdit: FC = () => {
  const access = useAtomValueAccess();

  return (
    <Access accessible={access.canEditSysUser}>
      <Button type="link" icon={<EditOutlined />}>
        编辑
      </Button>
    </Access>
  );
};

export default ButtonEdit;
