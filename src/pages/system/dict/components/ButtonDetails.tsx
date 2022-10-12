import { EyeOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';

const ButtonDetails: FC<{ dictId: number }> = ({ dictId }) => {
  const navigate = useNavigate();

  return (
    <Button type="link" icon={<EyeOutlined />} onClick={() => navigate(`${dictId}`)}>
      查看
    </Button>
  );
};

export default ButtonDetails;
