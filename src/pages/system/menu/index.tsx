import { BasePageContainer } from '@/components';
import ButtonAdd from '@/pages/system/menu/components/ButtonAdd';
import ButtonDelete from '@/pages/system/menu/components/ButtonDelete';
import DescDetails from '@/pages/system/menu/components/DescDetails';
import ModalAdd from '@/pages/system/menu/components/ModalAdd';
import TreeMenu from '@/pages/system/menu/components/TreeMenu';
import { ProCard } from '@ant-design/pro-components';
import type { FC } from 'react';

const PageMenu: FC = () => {
  return (
    <BasePageContainer>
      <ProCard ghost gutter={16}>
        <ProCard title="菜单列表" colSpan="550px" extra={<ButtonAdd />}>
          <TreeMenu />
        </ProCard>

        <ProCard title="菜单详情" extra={<ButtonDelete />} className="h-full">
          <DescDetails />
        </ProCard>
      </ProCard>

      <ModalAdd />
    </BasePageContainer>
  );
};

export default PageMenu;
