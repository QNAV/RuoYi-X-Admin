import { AccessWithState, BaseButtonAdd } from '@/components';
import { useShowAddModal } from '@/pages/system/notice/model';
import type { FC } from 'react';

const ButtonAdd: FC = () => {
  const showAddModal = useShowAddModal();

  return (
    <AccessWithState accessKey="system:notice:add">
      <BaseButtonAdd onClick={showAddModal} />
    </AccessWithState>
  );
};

export default ButtonAdd;
