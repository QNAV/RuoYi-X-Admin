import { BaseButtonAdd } from '@/components';
import { AccessWithState } from '@/features';
import { useShowAddModal } from '@/pages/system/config/model';
import type { FC } from 'react';

const ButtonAdd: FC = () => {
  const showAddModal = useShowAddModal();

  return (
    <AccessWithState accessKey="system:config:add">
      <BaseButtonAdd onClick={showAddModal} />
    </AccessWithState>
  );
};

export default ButtonAdd;
