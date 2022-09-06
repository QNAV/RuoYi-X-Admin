import { useShowEditModal } from '@/pages/system/post/model';
import { Access, useAccess } from '@@/plugin-access';
import { EditOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import type { FC } from 'react';

const ButtonEdit: FC<{ record: API.SysPostVo }> = ({ record }) => {
  const access = useAccess();

  const showEditModal = useShowEditModal();

  return (
    <Access accessible={access.canEditSysPost}>
      <Button type="link" icon={<EditOutlined />} onClick={() => showEditModal(record)}>
        编辑
      </Button>
    </Access>
  );
};

export default ButtonEdit;
