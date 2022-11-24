import { Access } from '@/components';
import { useShowEditModal } from '@/pages/system/user/model';
import { EditOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import type { FC } from 'react';

const ButtonEdit: FC<{ userId: number }> = ({ userId }) => {
  const showEditModal = useShowEditModal();

  return (
    <Access accessible>
      <Button type="link" icon={<EditOutlined />} onClick={() => showEditModal(userId)}>
        编辑
      </Button>
    </Access>
  );
};

export default ButtonEdit;
