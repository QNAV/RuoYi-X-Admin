import { useShowEditModal } from '@/pages/system/config/model';
import type { SysConfigVo } from '@/services/system/data-contracts';
import { EditOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import type { FC } from 'react';

const ButtonEdit: FC<{ record: SysConfigVo }> = ({ record }) => {
  const showEditModal = useShowEditModal();

  return (
    <Button type="link" icon={<EditOutlined />} onClick={() => showEditModal(record)}>
      编辑
    </Button>
  );
};

export default ButtonEdit;
