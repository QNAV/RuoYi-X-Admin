import ButtonCreateRole from '@/pages/system/role/components/ButtonCreateRole';
import ButtonDeleteRole from '@/pages/system/role/components/ButtonDeleteRole';
import DetailsRole from '@/pages/system/role/components/DetailsRole';
import ListRole from '@/pages/system/role/components/ListRole';
import { PageContainer, ProCard } from '@ant-design/pro-components';
import type { FC } from 'react';

const PageRole: FC = () => {
  return (
    <PageContainer>
      <ProCard ghost gutter={24}>
        <ProCard title="角色列表" colSpan="400px" extra={<ButtonCreateRole />}>
          <ListRole />
        </ProCard>

        <ProCard title="角色详情" extra={<ButtonDeleteRole />}>
          <DetailsRole />
        </ProCard>
      </ProCard>
    </PageContainer>
  );
};

export default PageRole;
