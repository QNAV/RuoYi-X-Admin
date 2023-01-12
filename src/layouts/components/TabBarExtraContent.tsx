import UserName from '@/layouts/components/UserName';
import type { FC } from 'react';

const TabBarExtraContent: FC = () => {
  return (
    <div className="px-1">
      <UserName />
    </div>
  );
};

export default TabBarExtraContent;
