import { BasePageContainer } from '@/components';
import ModalAddOrEdit from '@/pages/system/post/components/ModalAddOrEdit';
import TableMain from '@/pages/system/post/components/TableMain';
import type { FC } from 'react';

const PagePost: FC = () => {
  return (
    <BasePageContainer>
      <TableMain />

      <ModalAddOrEdit />
    </BasePageContainer>
  );
};

export default PagePost;
