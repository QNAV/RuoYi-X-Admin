import { BaseButtonEdit } from '@/components';
import { AccessWithState } from '@/features';
import { useShowEditModal } from '@/pages/system/notice/model';
import type { SysNoticeVo } from '@/services/system/data-contracts';
import type { FC } from 'react';

const ButtonEdit: FC<{ record: SysNoticeVo }> = ({ record }) => {
  const showEditModal = useShowEditModal();

  return (
    <AccessWithState accessKey="system:notice:edit">
      <BaseButtonEdit onClick={() => showEditModal(record)} />
    </AccessWithState>
  );
};

export default ButtonEdit;
