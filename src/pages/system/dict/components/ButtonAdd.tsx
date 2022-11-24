import { Access } from '@/components';
import { useShowAddModal } from '@/pages/system/dict/model';
import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import type { FC } from 'react';

const ButtonAdd: FC = () => {
  const showAddModal = useShowAddModal();

  return (
    <Access accessible>
      <Button icon={<PlusOutlined />} type="primary" onClick={showAddModal}>
        新增
      </Button>
    </Access>
  );
};

export default ButtonAdd;
