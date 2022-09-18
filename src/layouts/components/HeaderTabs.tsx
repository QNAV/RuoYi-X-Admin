import { useDropKeepAliveElementByCacheKey, useRecoilValueKeepAliveElements } from '@/models';
import { keepAliveLocal } from '@/routes';
import { Tabs } from 'antd';
import type { FC } from 'react';
import { memo, useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const HeaderTabs: FC = () => {
  const [activeKey, setActiveKey] = useState<string>('');
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const keepAliveElements = useRecoilValueKeepAliveElements();
  const dropKeepAliveElementByCacheKey = useDropKeepAliveElementByCacheKey();

  const items = useMemo(() => {
    const keys = Object.keys(keepAliveElements);

    if (keys.length > 5) {
      dropKeepAliveElementByCacheKey(keys[0]);
      keys.shift();
    }

    return keys.map((key) => ({
      label: keepAliveLocal?.[Object.keys(keepAliveLocal).find((k) => k === key) ?? ''] ?? key,
      key,
    }));
  }, [keepAliveElements]);

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

export default memo(HeaderTabs);
