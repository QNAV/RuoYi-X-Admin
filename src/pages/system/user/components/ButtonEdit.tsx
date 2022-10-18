import { Access } from '@/components';
import { useAtomValueAccess } from '@/models';
import { useShowEditModal } from '@/pages/system/user/model';
import { EditOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import type { FC } from 'react';

const ButtonEdit: FC<{ userId: number }> = ({ userId }) => {
  const { canEditSysUser } = useAtomValueAccess();

  const showEditModal = useShowEditModal();

  return (
    <Access accessible={canEditSysUser}>
      <Button type="link" icon={<EditOutlined />} onClick={() => showEditModal(userId)}>
        编辑
      </Button>
    </Access>
  );
};

export default ButtonEdit;
