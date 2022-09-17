import { useDropKeepAliveElementByCacheKey, useRecoilValueKeepAliveTabsItems } from '@/hooks/keepAlive';
import { Tabs } from 'antd';
import type { FC } from 'react';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const HeaderTabs: FC = () => {
  const [activeKey, setActiveKey] = useState<string>('');
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const items = useRecoilValueKeepAliveTabsItems();
  const dropKeepAliveElementByCacheKey = useDropKeepAliveElementByCacheKey();

  useEffect(() => {
    setActiveKey(pathname);
  }, [pathname]);

  return (
    <Tabs
      hideAdd
      type="editable-card"
      items={items}
      activeKey={activeKey}
      onChange={navigate}
      onEdit={(targetKey) => {
        if (targetKey === pathname) {
          const tabsKey = items!.map((item) => item.key);

          const currActiveKeyIndex = tabsKey.findIndex((key) => key === activeKey);

          navigate(tabsKey?.[currActiveKeyIndex > 0 ? currActiveKeyIndex - 1 : currActiveKeyIndex + 1] ?? '/');
        }

        dropKeepAliveElementByCacheKey(targetKey as string);
      }}
    />
  );
};

export default HeaderTabs;
