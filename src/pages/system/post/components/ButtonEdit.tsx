import { Access } from '@/components';
import { useAtomValueAccess } from '@/models';
import { useShowEditModal } from '@/pages/system/post/model';
import type { SysPostVo } from '@/services/system/data-contracts';
import { EditOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import type { FC } from 'react';

const ButtonEdit: FC<{ record: SysPostVo }> = ({ record }) => {
  const { canEditSysPost } = useAtomValueAccess();

  const showEditModal = useShowEditModal();

  return (
    <Access accessible={canEditSysPost}>
      <Button type="link" icon={<EditOutlined />} onClick={() => showEditModal(record)}>
        编辑
      </Button>
    </Access>
  );
};

export default ButtonEdit;
