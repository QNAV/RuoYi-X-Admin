import { Access } from '@/components';
import { useShowAddModal } from '@/pages/system/post/model';
import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import type { FC } from 'react';

const ButtonAdd: FC = () => {
  const showAddModal = useShowAddModal();

  return (
    <Access accessible>
      <Button type="primary" icon={<PlusOutlined />} onClick={showAddModal}>
        新增
      </Button>
    </Access>
  );
};

export default ButtonAdd;
