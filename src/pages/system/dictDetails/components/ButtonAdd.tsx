import { Access } from '@/components';
import { useAtomValueAccess } from '@/models';
import { useShowAddModal } from '@/pages/system/dictDetails/model';
import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import type { FC } from 'react';

const ButtonAdd: FC = () => {
  const { canEditSysDict } = useAtomValueAccess();

  const showAddModal = useShowAddModal();

  return (
    <Access accessible={canEditSysDict}>
      <Button icon={<PlusOutlined />} type="primary" onClick={showAddModal}>
        新增
      </Button>
    </Access>
  );
};

export default ButtonAdd;
