import TableMain from '@/pages/system/user/components/TableMain';
import TreeDept from '@/pages/system/user/components/TreeDept';
import { PageContainer, ProCard } from '@ant-design/pro-components';
import type { FC } from 'react';

const PageUser: FC = () => {
  return (
    <PageContainer>
      <ProCard ghost gutter={24}>
        <ProCard colSpan="300px" className="h-full">
          <TreeDept />
        </ProCard>

        <ProCard ghost className="h-full">
          <TableMain />
        </ProCard>
      </ProCard>
    </PageContainer>
  );
};

export default PageUser;
