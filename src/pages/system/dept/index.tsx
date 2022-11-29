import { BasePageContainer } from '@/components';
import ButtonAdd from '@/pages/system/dept/components/ButtonAdd';
import ButtonRemove from '@/pages/system/dept/components/ButtonRemove';
import DescDept from '@/pages/system/dept/components/DescDept';
import TreeDept from '@/pages/system/dept/components/TreeDept';
import { ProCard } from '@ant-design/pro-components';
import type { FC } from 'react';

const PageDept: FC = () => {
  return (
    <BasePageContainer>
      <ProCard ghost gutter={[16, 16]} wrap>
        <ProCard
          title="部门列表"
          colSpan={{
            xxl: 8,
            xl: 12,
            lg: 14,
            md: 24,
            sm: 24,
            xs: 24,
          }}
          extra={<ButtonAdd />}
        >
          <TreeDept />
        </ProCard>

        <ProCard
          title="部门详情"
          colSpan={{
            xxl: 16,
            xl: 12,
            lg: 10,
            md: 24,
            sm: 24,
            xs: 24,
          }}
          className="h-full"
          extra={<ButtonRemove />}
        >
          <DescDept />
        </ProCard>
      </ProCard>
    </BasePageContainer>
  );
};

export default PageDept;
