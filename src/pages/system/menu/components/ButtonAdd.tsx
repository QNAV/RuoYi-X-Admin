import { Access } from '@/components';
import { useAtomValueAccess } from '@/models';
import { useShowCreateModal } from '@/pages/system/menu/model';
import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import type { FC } from 'react';

const ButtonAdd: FC = () => {
  const { canAddSysMenu } = useAtomValueAccess();

  const showCreateModal = useShowCreateModal();

  return (
    <Access accessible={canAddSysMenu}>
      <Button type="primary" onClick={showCreateModal} icon={<PlusOutlined />}>
        新建
      </Button>
    </Access>
  );
};

export default ButtonAdd;
