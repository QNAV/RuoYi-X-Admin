import { BasePageContainer, EmptySimple } from '@/components';
import ButtonAssignUser from '@/pages/system/role/components/ButtonAssignUser';
import ButtonCreate from '@/pages/system/role/components/ButtonCreate';
import ButtonDelete from '@/pages/system/role/components/ButtonDelete';
import ButtonExport from '@/pages/system/role/components/ButtonExport';
import DescDetails from '@/pages/system/role/components/DescDetails';
import List from '@/pages/system/role/components/List';
import TreeData from '@/pages/system/role/components/TreeData';
import MenuTree from '@/pages/system/role/components/TreeMenu';
import { useAtomValueRoleDetails } from '@/pages/system/role/model';
import { ProCard } from '@ant-design/pro-components';
import { useResponsive } from 'ahooks';
import { Space } from 'antd';
import type { FC } from 'react';

const PageRole: FC = () => {
  const { xl } = useResponsive();
  const { open } = useAtomValueRoleDetails();

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

        {open ? (
          <ProCard
            split="horizontal"
            title="角色详情"
            extra={
              <Space>
                <ButtonDelete />
                <ButtonAssignUser />
              </Space>
            }
            className="h-full"
          >
            <ProCard>
              <DescDetails />
            </ProCard>

            <ProCard split={xl ? 'vertical' : 'horizontal'}>
              <ProCard>
                <MenuTree />
              </ProCard>

              <ProCard>
                <TreeData />
              </ProCard>
            </ProCard>
          </ProCard>
        ) : (
          <ProCard title="角色详情" className="h-full">
            <EmptySimple description="点击选择左侧角色查看详情" />
          </ProCard>
        )}
      </ProCard>
    </BasePageContainer>
  );
};

export default PageRole;
