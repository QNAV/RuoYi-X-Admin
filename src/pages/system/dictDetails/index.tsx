import { BasePageContainer } from '@/components';
import ModalAddOrEdit from '@/pages/system/dictDetails/components/ModalAddOrEdit';
import TableMain from '@/pages/system/dictDetails/components/TableMain';
import type { FC } from 'react';

const PageDictDetails: FC = () => {
  return (
    <BasePageContainer>
      <TableMain />

      <ModalAddOrEdit />
    </BasePageContainer>
  );
};

export default PageDictDetails;
