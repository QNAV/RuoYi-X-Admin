import { BaseButtonEdit } from '@/components';
import { AccessWithState } from '@/features';
import { useShowEditModal } from '@/pages/system/ossConfig/model';
import type { FC } from 'react';

export interface ButtonEditProps {
  ossConfigId: number;
}

const ButtonEdit: FC<ButtonEditProps> = ({ ossConfigId }) => {
  const showEditModal = useShowEditModal();

  return (
    <AccessWithState accessKey="system:oss:edit">
      <BaseButtonEdit onClick={() => showEditModal(ossConfigId)} />
    </AccessWithState>
  );
};

export default ButtonEdit;
