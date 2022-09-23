import { BasePageContainer } from '@/components';
import ModalResetPwd from '@/pages/system/user/components/ModalResetPwd';
import TableMain from '@/pages/system/user/components/TableMain';
import TreeDept from '@/pages/system/user/components/TreeDept';
import { ProCard } from '@ant-design/pro-components';
import type { FC } from 'react';

const PageUser: FC = () => {
  return (
    <BasePageContainer>
      <ProCard ghost gutter={24}>
        <ProCard colSpan="300px" className="h-full">
          <TreeDept />
        </ProCard>

        <ProCard ghost className="h-full">
          <TableMain />
        </ProCard>
      </ProCard>

      <ModalResetPwd />
    </BasePageContainer>
  );
};

export default PageUser;
