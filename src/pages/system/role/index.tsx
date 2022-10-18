import { BasePageContainer } from '@/components';
import ButtonCreate from '@/pages/system/role/components/ButtonCreate';
import ButtonDelete from '@/pages/system/role/components/ButtonDelete';
import ButtonExport from '@/pages/system/role/components/ButtonExport';
import DescDetails from '@/pages/system/role/components/DescDetails';
import List from '@/pages/system/role/components/List';
import TreeData from '@/pages/system/role/components/TreeData';
import MenuTree from '@/pages/system/role/components/TreeMenu';
import { ProCard } from '@ant-design/pro-components';
import { useResponsive } from 'ahooks';
import { Space } from 'antd';
import type { FC } from 'react';

const PageRole: FC = () => {
  const { xl } = useResponsive();

  return (
    <BasePageContainer>
      <ProCard ghost gutter={16}>
        <ProCard
          title="角色列表"
          colSpan="450px"
          extra={
            <Space>
              <ButtonExport />
              <ButtonCreate />
            </Space>
          }
        >
          <List />
        </ProCard>

        <ProCard ghost direction="column" gutter={[16, 16]}>
          <ProCard title="角色详情" extra={<ButtonDelete />}>
            <DescDetails />
          </ProCard>

          <ProCard ghost gutter={[16, 16]} direction={xl ? 'row' : 'column'}>
            <ProCard title="角色菜单权限">
              <MenuTree />
            </ProCard>

            <ProCard>
              <TreeData />
            </ProCard>
          </ProCard>
        </ProCard>
      </ProCard>
    </BasePageContainer>
  );
};

export default PageRole;
