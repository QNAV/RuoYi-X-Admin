import { useShowEditModal } from '@/pages/system/notice/model';
import type { SysNoticeVo } from '@/services/system/data-contracts';
import { EditOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import type { FC } from 'react';

const ButtonEdit: FC<{ record: SysNoticeVo }> = ({ record }) => {
  const showEditModal = useShowEditModal();

  return (
    <Button type="link" icon={<EditOutlined />} onClick={() => showEditModal(record)}>
      编辑
    </Button>
  );
};

export default ButtonEdit;
