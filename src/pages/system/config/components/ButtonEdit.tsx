import { AccessWithState, BaseButtonEdit } from '@/components';
import { useShowEditModal } from '@/pages/system/config/model';
import type { SysConfigVo } from '@/services/system/data-contracts';
import type { FC } from 'react';

const ButtonEdit: FC<{ record: SysConfigVo }> = ({ record }) => {
  const showEditModal = useShowEditModal();

  return (
    <AccessWithState accessKey="system:config:edit">
      <BaseButtonEdit onClick={() => showEditModal(record)} />
    </AccessWithState>
  );
};

export default ButtonEdit;
