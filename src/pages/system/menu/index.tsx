import MenuTree from '@/pages/system/menu/components/MenuTree';
import { ProCard } from '@ant-design/pro-components';
import { PageContainer } from '@ant-design/pro-layout';

export default function () {
  return (
    <PageContainer>
      <ProCard ghost gutter={24}>
        <ProCard title="菜单列表" colSpan="500px">
          <MenuTree />
        </ProCard>

        <ProCard title="菜单详情">菜单详情</ProCard>
      </ProCard>
    </PageContainer>
  );
}
