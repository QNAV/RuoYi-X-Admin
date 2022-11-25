import { BasePageContainer } from '@/components';
import ButtonAdd from '@/pages/system/menu/components/ButtonAdd';
import ButtonRemove from '@/pages/system/menu/components/ButtonRemove';
import DescMenu from '@/pages/system/menu/components/DescMenu';
import ModalAdd from '@/pages/system/menu/components/ModalAdd';
import TreeMenu from '@/pages/system/menu/components/TreeMenu';
import { ProCard } from '@ant-design/pro-components';
import type { FC } from 'react';

const PageMenu: FC = () => {
  return (
    <BasePageContainer>
      <ProCard ghost gutter={[16, 16]} wrap>
        <ProCard
          title="菜单列表"
          colSpan={{
            xxl: 8,
            xl: 12,
            lg: 14,
            md: 24,
            sm: 24,
            xs: 24,
          }}
          extra={<ButtonAdd />}
        >
          <TreeMenu />
        </ProCard>

        <ProCard
          title="菜单详情"
          extra={<ButtonRemove />}
          colSpan={{
            xxl: 16,
            xl: 12,
            lg: 10,
            md: 24,
            sm: 24,
            xs: 24,
          }}
          className="h-full"
        >
          <DescMenu />
        </ProCard>
      </ProCard>

      <ModalAdd />
    </BasePageContainer>
  );
};

export default PageMenu;
