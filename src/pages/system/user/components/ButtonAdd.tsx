import { Access } from '@/components';
import { useAtomValueAccess } from '@/models';
import { useShowAddModal } from '@/pages/system/user/model';
import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import type { FC } from 'react';

const ButtonAdd: FC = () => {
  const { canAddSysUser } = useAtomValueAccess();

  const showAddModal = useShowAddModal();

  return (
    <Access accessible={canAddSysUser}>
      <Button type="primary" icon={<PlusOutlined />} onClick={showAddModal}>
        新增
      </Button>
    </Access>
  );
};

export default ButtonAdd;
