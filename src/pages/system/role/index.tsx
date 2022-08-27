import ButtonCreate from '@/pages/system/role/components/ButtonCreate';
import DetailsRole from '@/pages/system/role/components/DetailsRole';
import ListRole from '@/pages/system/role/components/ListRole';
import { PageContainer, ProCard } from '@ant-design/pro-components';
import type { FC } from 'react';

const PageRole: FC = () => {
  return (
    <PageContainer>
      <ProCard ghost gutter={24}>
        <ProCard title="角色列表" colSpan="400px" extra={<ButtonCreate />}>
          <ListRole />
        </ProCard>

        <ProCard title="角色详情">
          <DetailsRole />
        </ProCard>
      </ProCard>
    </PageContainer>
  );
};

export default PageRole;
