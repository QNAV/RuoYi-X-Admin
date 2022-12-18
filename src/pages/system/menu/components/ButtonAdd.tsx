import { BaseButtonAdd } from '@/components';
import { AccessWithState } from '@/features';
import { useShowModalAdd } from '@/pages/system/menu/model';
import type { FC } from 'react';

const ButtonAdd: FC = () => {
  const showCreateModal = useShowModalAdd();

  return (
    <AccessWithState accessKey="system:menu:add">
      <BaseButtonAdd onClick={showCreateModal} />
    </AccessWithState>
  );
};

export default ButtonAdd;
