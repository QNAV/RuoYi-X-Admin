import { AccessWithState, BaseButtonEdit } from '@/components';
import { useShowEditModal } from '@/pages/system/dict/model';
import type { SysDictTypeVo } from '@/services/system/data-contracts';
import type { FC } from 'react';

const ButtonEdit: FC<{ record: SysDictTypeVo }> = ({ record }) => {
  const showEditModal = useShowEditModal();

  return (
    <AccessWithState accessKey="system:dict:edit">
      <BaseButtonEdit onClick={() => showEditModal(record)} />
    </AccessWithState>
  );
};

export default ButtonEdit;
