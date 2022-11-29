import { AccessWithState, BaseButtonEdit } from '@/components';
import { useShowEditModal } from '@/pages/system/dictDetails/model';
import type { SysDictDataVo } from '@/services/system/data-contracts';
import type { FC } from 'react';

const ButtonEdit: FC<{ record: SysDictDataVo }> = ({ record }) => {
  const showEditModal = useShowEditModal();
  return (
    <AccessWithState accessKey="system:dict:edit">
      <BaseButtonEdit onClick={() => showEditModal(record)} />
    </AccessWithState>
  );
};

export default ButtonEdit;
