import RoleList from '@/pages/system/role/components/RoleList';
import { ProCard } from '@ant-design/pro-components';
import { PageContainer } from '@ant-design/pro-layout';

export default function () {
  return (
    <PageContainer>
      <ProCard ghost gutter={24}>
        <ProCard colSpan="400px" title="角色列表">
          <RoleList />
        </ProCard>

        <ProCard title="角色详情">11</ProCard>
      </ProCard>
    </PageContainer>
  );
}
