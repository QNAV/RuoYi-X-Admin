import { BaseButtonEdit } from '@/components';
import { AccessWithState } from '@/features';
import { useShowEditModal } from '@/pages/system/user/model';
import type { FC } from 'react';

export interface ButtonEditProps {
  userId: number;
}

const ButtonEdit: FC<ButtonEditProps> = ({ userId }) => {
  const showEditModal = useShowEditModal();

  return (
    <AccessWithState accessKey="system:user:edit">
      <BaseButtonEdit onClick={() => showEditModal(userId)} />
    </AccessWithState>
  );
};

export default ButtonEdit;
