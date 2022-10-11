import { useAtomKeepAliveElements } from '@/models';
import { keepAliveLocal } from '@/routes';
import { Tabs } from 'antd';
import type { FC } from 'react';
import { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const TabsKeepAlive: FC = () => {
  const [activeKey, setActiveKey] = useState<string>('');

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [keepAliveElements, setKeepAliveElements] = useAtomKeepAliveElements();
  const dropKeepAliveElementByCacheKey = (cacheKey: string) => {
    setKeepAliveElements((elements) => {
      const newElements = { ...elements };
      delete newElements[Object.keys(newElements).find((key) => newElements[key].pathname === cacheKey)!];
      return newElements;
    });
  };

  const items = useMemo(() => {
    return Object.entries(keepAliveElements).map(([keepAliveKey, element]) => ({
      label: keepAliveLocal?.[keepAliveKey] ?? keepAliveKey,
      key: element.pathname,
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
          const tabsKey = items.map((item) => item.key);

          const currActiveKeyIndex = tabsKey.findIndex((key) => key === activeKey);

          if (currActiveKeyIndex === 0 && tabsKey.length === 1) {
            navigate('/');
          } else {
            navigate(tabsKey[currActiveKeyIndex > 0 ? currActiveKeyIndex - 1 : currActiveKeyIndex + 1]);
          }
        }

        dropKeepAliveElementByCacheKey(targetKey as string);
      }}
    />
  );
};

export default TabsKeepAlive;
