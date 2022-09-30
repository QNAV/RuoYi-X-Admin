import { BasePageContainer } from '@/components';
import DescriptionsUser from '@/pages/settings/components/DescriptionsUser';
import FormUpdatePwd from '@/pages/settings/components/FormUpdatePwd';
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
      <ProCard ghost direction="column" gutter={[0, 16]}>
        <ProCard>
          <DescriptionsUser />
        </ProCard>

        <ProCard>
          <Tabs
            activeKey={activeKey}
            onChange={(e) => setActiveKey(e as TabKey)}
            items={[
              {
                label: '安全设置',
                key: TabKey.PASSWORD,
                children: <FormUpdatePwd />,
              },
            ]}
          />
        </ProCard>
      </ProCard>
    </BasePageContainer>
  );
};

export default SettingsPage;
