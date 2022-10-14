import { useShowEditModal } from '@/pages/system/notice/model';
import { EditOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import type { FC } from 'react';

const ButtonEdit: FC<{ record: API.SysNoticeVo }> = ({ record }) => {
  const showEditModal = useShowEditModal();
  return (
    <Button type="link" icon={<EditOutlined />} onClick={() => showEditModal(record)}>
      编辑
    </Button>
  );
};

export default ButtonEdit;
