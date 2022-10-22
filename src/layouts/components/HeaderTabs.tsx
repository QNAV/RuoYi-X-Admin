import { settingsMap } from '@/routes';
import { Tabs } from 'antd';
import type { FC } from 'react';
import { useEffect, useState } from 'react';
import type { useOutlet } from 'react-router-dom';
import { matchPath, useLocation, useNavigate } from 'react-router-dom';

export type KeepAliveElements = Record<string, ReturnType<typeof useOutlet>>;

interface HeaderTabsProps {
  keepAliveElements: KeepAliveElements;
}

const HeaderTabs: FC<HeaderTabsProps> = ({ keepAliveElements }) => {
  const { pathname, search } = useLocation();
  const navigate = useNavigate();

  const [activeKey, setActiveKey] = useState<string>('');
  const [items, setItems] = useState<
    {
      key: string;
      label: string;
      pathname: string;
      search: string;
      closable: boolean;
    }[]
  >([
    {
      key: '/',
      label: '首页',
      pathname: '/',
      search,
      closable: false,
    },
  ]);

  useEffect(() => {
    const currRouteSettingsKey = Object.keys(settingsMap).find((key) => matchPath(key, pathname));

    if (currRouteSettingsKey === undefined) {
      setActiveKey('');
      return;
    }

    setItems((v = []) => {
      const { name, hideInTab, closableTab } = settingsMap[currRouteSettingsKey];

      if (v.find((item) => item.key === currRouteSettingsKey) || hideInTab) return v;

      return [...v, { key: currRouteSettingsKey, label: name, pathname, search, closable: closableTab }];
    });

    setActiveKey(currRouteSettingsKey);
  }, [pathname]);

  return (
    <Tabs
      hideAdd
      type="editable-card"
      items={items}
      activeKey={activeKey}
      onChange={(key) => {
        const { pathname, search } = items.find((item) => item.key === key)!;
        navigate(`${pathname}${search}`);
      }}
      onEdit={(targetKey) => {
        const currActiveKeyIndex = items.findIndex(({ key }) => key === targetKey);

        const { pathname, search } =
          items[currActiveKeyIndex < items.length - 1 ? currActiveKeyIndex + 1 : currActiveKeyIndex - 1];

        navigate(`${pathname}${search}`);

        setItems((v) => v.filter(({ key }) => key !== targetKey));

        if (keepAliveElements[targetKey as string] !== undefined) {
          delete keepAliveElements[targetKey as string];
        }
      }}
    />
  );
};

export default HeaderTabs;
