import HeaderTabs from '@/layouts/components/HeaderTabs';
import type { ProLayoutProps } from '@ant-design/pro-layout';

const HeaderContent: ProLayoutProps['headerContentRender'] = () => {
  return (
    <div className="flex justify-between items-end">
      <HeaderTabs />

      <span>2</span>
    </div>
  );
};

export default HeaderContent;
