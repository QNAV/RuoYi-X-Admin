import { BasePageContainer, EmptySimple } from '@/components';
import ButtonAdd from '@/pages/system/role/components/ButtonAdd';
import ButtonAssignUser from '@/pages/system/role/components/ButtonAssignUser';
import ButtonRemove from '@/pages/system/role/components/ButtonRemove';
import DescRole from '@/pages/system/role/components/DescRole';
import ListRole from '@/pages/system/role/components/ListRole';
import TreeDept from '@/pages/system/role/components/TreeDept';
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
      <ProCard ghost gutter={[16, 16]} wrap>
        <ProCard
          title="角色列表"
          colSpan={{
            xxl: 7,
            xl: 10,
            lg: 13,
            md: 24,
            sm: 24,
            xs: 24,
          }}
          extra={<ButtonAdd />}
        >
          <ListRole />
        </ProCard>

        <ProCard
          split="horizontal"
          title="角色详情"
          colSpan={{
            xxl: 17,
            xl: 14,
            lg: 11,
            md: 24,
            sm: 24,
            xs: 24,
          }}
          extra={
            <Space>
              <ButtonRemove />
              <ButtonAssignUser />
            </Space>
          }
          className="h-full"
        >
          {open ? (
            <>
              <ProCard>
                <DescRole />
              </ProCard>

              <ProCard split={xl ? 'vertical' : 'horizontal'}>
                <ProCard>
                  <MenuTree />
                </ProCard>

                <ProCard>
                  <TreeDept />
                </ProCard>
              </ProCard>
            </>
          ) : (
            <EmptySimple description="点击选择左侧角色查看详情" />
          )}
        </ProCard>
      </ProCard>
    </BasePageContainer>
  );
};

export default PageRole;
