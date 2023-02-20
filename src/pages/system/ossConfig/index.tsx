import { BasePageContainer } from '@/components';
import ModalAddOrEdit from '@/pages/system/ossConfig/components/ModalAddOrEdit';
import TableMain from '@/pages/system/ossConfig/components/TableMain';
import type { FC } from 'react';

const PageSystemOssConfig: FC = () => {
  return (
    <BasePageContainer>
      <TableMain />

      <ModalAddOrEdit />
    </BasePageContainer>
  );
};

export default PageSystemOssConfig;
