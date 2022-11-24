import { Access } from '@/components';
import { useShowEditModal } from '@/pages/system/dict/model';
import type { SysDictTypeVo } from '@/services/system/data-contracts';
import { EditOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import type { FC } from 'react';

const ButtonEdit: FC<{ record: SysDictTypeVo }> = ({ record }) => {
  const showEditModal = useShowEditModal();

  return (
    <Access accessible>
      <Button type="link" icon={<EditOutlined />} onClick={() => showEditModal(record)}>
        编辑
      </Button>
    </Access>
  );
};

export default ButtonEdit;
