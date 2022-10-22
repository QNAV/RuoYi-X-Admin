import { BasePageContainer } from '@/components';
import ModalAddOrEdit from '@/pages/system/config/components/ModalAddOrEdit';
import TableMain from '@/pages/system/config/components/TableMain';
import type { FC } from 'react';

const PageConfig: FC = () => {
  return (
    <BasePageContainer>
      <TableMain />

      <ModalAddOrEdit />
    </BasePageContainer>
  );
};

export default PageConfig;
