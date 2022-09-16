import { BasePageContainer } from '@/components/BasePageContainer';
import ButtonCreate from '@/pages/system/role/components/ButtonCreate';
import ButtonDelete from '@/pages/system/role/components/ButtonDelete';
import DescDetails from '@/pages/system/role/components/DescDetails';
import List from '@/pages/system/role/components/List';
import { ProCard } from '@ant-design/pro-components';
import type { FC } from 'react';

const PageRole: FC = () => {
  return (
    <BasePageContainer>
      <ProCard ghost gutter={24}>
        <ProCard title="角色列表" colSpan="400px" extra={<ButtonCreate />}>
          <List />
        </ProCard>

        <ProCard title="角色详情" extra={<ButtonDelete />}>
          <DescDetails />
        </ProCard>
      </ProCard>
    </BasePageContainer>
  );
};

export default PageRole;
