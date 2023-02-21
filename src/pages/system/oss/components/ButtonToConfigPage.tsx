import { ControlOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';

const ButtonToConfigPage: FC = () => {
  const navigate = useNavigate();

  return (
    <Button
      icon={<ControlOutlined />}
      type="primary"
      ghost
      onClick={() => {
        navigate('/system/oss-config');
      }}
    >
      配置管理
    </Button>
  );
};

export default ButtonToConfigPage;
