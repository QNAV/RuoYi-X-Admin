import DescDetails from '@/pages/system/dept/components/DescDetails';
import TreeDept from '@/pages/system/dept/components/TreeDept';
import { PageContainer, ProCard } from '@ant-design/pro-components';
import type { FC } from 'react';

const PageDept: FC = () => {
  return (
    <PageContainer>
      <ProCard ghost gutter={24}>
        <ProCard title="部门列表" colSpan="400px">
          <TreeDept />
        </ProCard>

        <ProCard title="部门详情">
          <DescDetails />
        </ProCard>
      </ProCard>
    </PageContainer>
  );
};

export default PageDept;
