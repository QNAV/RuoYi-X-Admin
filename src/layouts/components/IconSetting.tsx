import { SettingOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';

const IconSetting: FC = () => {
  const navigate = useNavigate();

  return (
    <Tooltip title="个人中心">
      <SettingOutlined onClick={() => navigate('/settings')} />
    </Tooltip>
  );
};

export default IconSetting;
