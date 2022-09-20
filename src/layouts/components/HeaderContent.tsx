import HeaderDropdown from '@/layouts/components/HeaderDropdown';
import HeaderTabs from '@/layouts/components/HeaderTabs';
import type { ProLayoutProps } from '@ant-design/pro-components';

const HeaderContent: ProLayoutProps['headerContentRender'] = () => {
  return (
    <div className="flex justify-between items-end pl-5">
      <HeaderTabs />

      <HeaderDropdown />
    </div>
  );
};

export default HeaderContent;
