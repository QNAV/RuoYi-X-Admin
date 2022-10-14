import { BasePageContainer } from '@/components';
import ModalAddOrEdit from '@/pages/system/notice/components/ModalAddOrEdit';
import TableMain from '@/pages/system/notice/components/TableMain';
import type { FC } from 'react';

const PageNotice: FC = () => {
  return (
    <BasePageContainer>
      <TableMain />

      <ModalAddOrEdit />
    </BasePageContainer>
  );
};

export default PageNotice;
