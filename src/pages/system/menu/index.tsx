import ButtonCreate from '@/pages/system/menu/components/ButtonCreate';
import ButtonDelete from '@/pages/system/menu/components/ButtonDelete';
import MenuDetails from '@/pages/system/menu/components/MenuDetails';
import MenuTree from '@/pages/system/menu/components/MenuTree';
import { ProCard } from '@ant-design/pro-components';
import { PageContainer } from '@ant-design/pro-layout';

export default function () {
  return (
    <PageContainer>
      <ProCard ghost gutter={24}>
        <ProCard
          title="菜单列表"
          colSpan="550px"
          extra={[<ButtonCreate key="ButtonCreate" />, <ButtonDelete key="ButtonDelete" />]}
        >
          <MenuTree />
        </ProCard>

        <ProCard title="菜单详情">
          <MenuDetails />
        </ProCard>
      </ProCard>
    </PageContainer>
  );
}
