import { BasePageContainer } from '@/components';
import ModalAddOrEdit from '@/pages/system/dict/components/ModalAddOrEdit';
import TableMain from '@/pages/system/dict/components/TableMain';
import type { FC } from 'react';

const PageDict: FC = () => {
  return (
    <BasePageContainer>
      <TableMain />

      <ModalAddOrEdit />
    </BasePageContainer>
  );
};

export default PageDict;
