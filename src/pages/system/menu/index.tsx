import ButtonCreate from '@/pages/system/menu/components/ButtonCreate';
import ButtonDelete from '@/pages/system/menu/components/ButtonDelete';
import DescDetails from '@/pages/system/menu/components/DescDetails';
import TreeMenu from '@/pages/system/menu/components/TreeMenu';
import { PageContainer, ProCard } from '@ant-design/pro-components';
import { Space } from 'antd';
import type { FC } from 'react';

const PageMenu: FC = () => {
  return (
    <PageContainer>
      <ProCard ghost gutter={24}>
        <ProCard
          title="菜单列表"
          colSpan="550px"
          extra={
            <Space>
              <ButtonCreate />
              <ButtonDelete />
            </Space>
          }
        >
          <TreeMenu />
        </ProCard>

        <ProCard title="菜单详情">
          <DescDetails />
        </ProCard>
      </ProCard>
    </PageContainer>
  );
};

export default PageMenu;
