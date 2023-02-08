import { BasePageContainer } from '@/components';
import ModalAddOrEdit from '@/pages/system/user/components/ModalAddOrEdit';
import ModalResetPwd from '@/pages/system/user/components/ModalResetPwd';
import TableMain from '@/pages/system/user/components/TableMain';
import type { FC } from 'react';

const PageSystemUser: FC = () => {
  return (
    <BasePageContainer>
      <TableMain />

      <ModalAddOrEdit />

      <ModalResetPwd />
    </BasePageContainer>
  );
};

export default PageSystemUser;
