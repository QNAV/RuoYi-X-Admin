import { EyeOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';

const ButtonDetails: FC<{ dictType: string }> = ({ dictType }) => {
  const navigate = useNavigate();

  return (
    <Button type="link" icon={<EyeOutlined />} onClick={() => navigate(dictType)}>
      查看
    </Button>
  );
};

export default ButtonDetails;
