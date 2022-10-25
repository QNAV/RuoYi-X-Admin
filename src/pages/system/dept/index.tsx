import { BasePageContainer } from '@/components';
import ButtonAdd from '@/pages/system/dept/components/ButtonAdd';
import ButtonDelete from '@/pages/system/dept/components/ButtonDelete';
import DescDetails from '@/pages/system/dept/components/DescDetails';
import TreeDept from '@/pages/system/dept/components/TreeDept';
import { ProCard } from '@ant-design/pro-components';
import type { FC } from 'react';

const PageDept: FC = () => {
  return (
    <BasePageContainer>
      <ProCard ghost gutter={16}>
        <ProCard title="部门列表" colSpan="500px" extra={<ButtonAdd />}>
          <TreeDept />
        </ProCard>

        <ProCard title="部门详情" extra={<ButtonDelete />}>
          <DescDetails />
        </ProCard>
      </ProCard>
    </BasePageContainer>
  );
};

export default PageDept;
