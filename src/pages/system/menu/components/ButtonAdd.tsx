import { BaseButtonAdd } from '@/components';
import AccessWithState from '@/components/AccessWithState';
import { useShowCreateModal } from '@/pages/system/menu/model';
import type { FC } from 'react';

const ButtonAdd: FC = () => {
  const showCreateModal = useShowCreateModal();

  return (
    <AccessWithState accessKey="system:menu:add">
      <BaseButtonAdd onClick={showCreateModal} />
    </AccessWithState>
  );
};

export default ButtonAdd;
