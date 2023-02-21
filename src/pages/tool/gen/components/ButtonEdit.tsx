import { BaseButtonEdit } from '@/components';
import { AccessWithState } from '@/features';
import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';

const ButtonEdit: FC<{ tableId: number }> = ({ tableId }) => {
  const navigate = useNavigate();

  return (
    <AccessWithState accessKey="tool:gen:edit">
      <BaseButtonEdit onClick={() => navigate(`/tool/gen-edit/${tableId}`)} />
    </AccessWithState>
  );
};

export default ButtonEdit;
