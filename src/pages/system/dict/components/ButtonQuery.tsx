import { BaseButtonQuery } from '@/components';
import { AccessWithState } from '@/features';
import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';

const ButtonQuery: FC<{ dictType: string }> = ({ dictType }) => {
  const navigate = useNavigate();

  return (
    <AccessWithState accessKey="system:dict:query">
      <BaseButtonQuery onClick={() => navigate(dictType)} />
    </AccessWithState>
  );
};

export default ButtonQuery;
