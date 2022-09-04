import ButtonCreate from '@/pages/system/dept/components/ButtonCreate';
import ButtonDelete from '@/pages/system/dept/components/ButtonDelete';
import DescDetails from '@/pages/system/dept/components/DescDetails';
import TreeDept from '@/pages/system/dept/components/TreeDept';
import { PageContainer, ProCard } from '@ant-design/pro-components';
import type { FC } from 'react';

const PageDept: FC = () => {
  return (
    <PageContainer>
      <ProCard ghost gutter={24}>
        <ProCard title="部门列表" colSpan="500px" extra={<ButtonCreate />}>
          <TreeDept />
        </ProCard>

        <ProCard title="部门详情" extra={<ButtonDelete />}>
          <DescDetails />
        </ProCard>
      </ProCard>
    </PageContainer>
  );
};

export default PageDept;
