import { SettingOutlined } from '@ant-design/icons';
import { history } from '@umijs/max';
import { Tooltip } from 'antd';
import type { FC } from 'react';

export const SettingsIcon: FC = () => {
  return (
    <Tooltip title="个人中心">
      <SettingOutlined onClick={() => history.push('/settings')} />
    </Tooltip>
  );
};
