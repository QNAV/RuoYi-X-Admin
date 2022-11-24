import { Access } from '@/components';
import { EditOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';

const ButtonEdit: FC<{ tableId: number }> = ({ tableId }) => {
  const navigate = useNavigate();

  return (
    <Access accessible>
      <Button type="link" icon={<EditOutlined />} onClick={() => navigate(`/tool/gen-edit/${tableId}`)}>
        编辑
      </Button>
    </Access>
  );
};

export default ButtonEdit;
