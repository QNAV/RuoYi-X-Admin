import { useAppData } from '@@/exports';
import { PageContainer } from '@ant-design/pro-components';
import type { FC } from 'react';

const HomePage: FC = () => {
  const { clientRoutes } = useAppData();
  console.log(clientRoutes);
  return <PageContainer>TODO</PageContainer>;
};

export default HomePage;
