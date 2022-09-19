import { BasePageContainer } from '@/components';
import PwdForm from '@/pages/settings/components/PwdForm';
import UserDescriptions from '@/pages/settings/components/UserDescriptions';
import { ProCard } from '@ant-design/pro-components';
import { Tabs } from 'antd';
import type { FC } from 'react';
import { useState } from 'react';

enum TabKey {
  PASSWORD = 'PASSWORD',
}

const SettingsPage: FC = () => {
  const [activeKey, setActiveKey] = useState<TabKey>(TabKey.PASSWORD);

  return (
    <BasePageContainer title="个人中心">
      <ProCard ghost direction="column" gutter={[0, 24]}>
        <ProCard>
          <UserDescriptions />
        </ProCard>

        <ProCard
          bodyStyle={{
            paddingTop: 0,
          }}
        >
          <Tabs
            activeKey={activeKey}
            onChange={(e) => setActiveKey(e as TabKey)}
            items={[
              {
                label: '安全设置',
                key: TabKey.PASSWORD,
                children: <PwdForm />,
              },
            ]}
          />
        </ProCard>
      </ProCard>
    </BasePageContainer>
  );
};

export default SettingsPage;
