import { BasePageContainer } from '@/components';
import ButtonCreate from '@/pages/system/menu/components/ButtonCreate';
import ButtonDelete from '@/pages/system/menu/components/ButtonDelete';
import DescDetails from '@/pages/system/menu/components/DescDetails';
import TreeMenu from '@/pages/system/menu/components/TreeMenu';
import { ProCard } from '@ant-design/pro-components';
import type { FC } from 'react';

const PageMenu: FC = () => {
  return (
    <BasePageContainer>
      <ProCard ghost gutter={24}>
        <ProCard title="菜单列表" colSpan="550px" extra={<ButtonCreate />}>
          <TreeMenu />
        </ProCard>

        <ProCard title="菜单详情" extra={<ButtonDelete />}>
          <DescDetails />
        </ProCard>
      </ProCard>
    </BasePageContainer>
  );
};

export default PageMenu;
