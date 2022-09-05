import { useShowAddModal } from '@/pages/system/post/model';
import { Access, useAccess } from '@@/plugin-access';
import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import type { FC } from 'react';

const ButtonAdd: FC = () => {
  const access = useAccess();
  const showAddModal = useShowAddModal();

  return (
    <Access accessible={access.canAddSysPost}>
      <Button type="primary" icon={<PlusOutlined />} onClick={showAddModal}>
        新建
      </Button>
    </Access>
  );
};

export default ButtonAdd;
