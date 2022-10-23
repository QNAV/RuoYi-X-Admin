import { Access } from '@/components';
import { useAtomValueAccess } from '@/models';
import { useShowEditModal } from '@/pages/system/dict/model';
import { EditOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import type { FC } from 'react';

const ButtonEdit: FC<{ record: API.SysDictTypeVo }> = ({ record }) => {
  const showEditModal = useShowEditModal();

  const { canEditSysDict } = useAtomValueAccess();

  return (
    <Access accessible={canEditSysDict}>
      <Button type="link" icon={<EditOutlined />} onClick={() => showEditModal(record)}>
        编辑
      </Button>
    </Access>
  );
};

export default ButtonEdit;
