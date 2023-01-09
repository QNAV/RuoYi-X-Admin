import { settingsMap } from '@/routes';
import { ClearOutlined } from '@ant-design/icons';
import { Button, Tabs, Tooltip } from 'antd';
import type { FC } from 'react';
import { useEffect, useState } from 'react';
import type { useOutlet } from 'react-router-dom';
import { matchPath, useLocation, useNavigate } from 'react-router-dom';

export type KeepAliveElements = Record<string, ReturnType<typeof useOutlet>>;

interface HeaderTabsProps {
  keepAliveElements: KeepAliveElements;
}

interface TabItem {
  key: string;
  label: string;
  pathname: string;
  search: string;
  closable: boolean;
}

const defaultTabs: TabItem[] = [
  {
    key: '/',
    label: '首页',
    pathname: '/',
    search: '',
    closable: false,
  },
];

const TabsHeader: FC<HeaderTabsProps> = ({ keepAliveElements }) => {
  const { pathname, search } = useLocation();
  const navigate = useNavigate();

  const [activeKey, setActiveKey] = useState<string>();
  const [items, setItems] = useState<TabItem[]>(defaultTabs);

  const handleChange = (key: string) => {
    const { pathname, search } = items.find((item) => item.key === key)!;
    navigate(`${pathname}${search}`);
  };

  const handleRemoveTab = (targetKey: string) => {
    const currActiveKeyIndex = items.findIndex(({ key }) => key === targetKey);

    const { pathname, search } =
      items[currActiveKeyIndex < items.length - 1 ? currActiveKeyIndex + 1 : currActiveKeyIndex - 1];

    navigate(`${pathname}${search}`);

    setItems((v) => v.filter(({ key }) => key !== targetKey));

    if (keepAliveElements.hasOwnProperty(targetKey)) {
      delete keepAliveElements[targetKey];
    }
  };

  const handleClearTabs = () => {
    Object.keys(keepAliveElements).forEach((key) => {
      delete keepAliveElements[key];
    });
    setItems(defaultTabs);
    navigate('/');
  };

  useEffect(() => {
    const currRouteSettingsKey = Object.keys(settingsMap).find((key) => matchPath(key, pathname));

    if (currRouteSettingsKey === undefined) {
      setActiveKey(undefined);
      return;
    }

    const { name: label, hideInTab, closableTab: closable } = settingsMap[currRouteSettingsKey];

    // 如果当前路由配置在标签页中隐藏，则直接返回
    if (hideInTab) return;

    setItems((v = []) => {
      // 如果当前路由不在标签页中，向标签页中添加当前路由
      if (v.every(({ key }) => key !== currRouteSettingsKey)) {
        return [...v, { key: currRouteSettingsKey, label, pathname, search, closable }];
      }

      // 如果当前路由已经在标签页中，并且 pathname 与 search 与缓存中的一致，则直接返回
      if (v.some((item) => item.key === currRouteSettingsKey && item.pathname === pathname && item.search === search))
        return v;

      return v.map((item) => {
        if (item.key !== currRouteSettingsKey) {
          return item;
        }

        return {
          ...item,
          search: item.search === search ? item.search : search,
          pathname: item.pathname === pathname ? item.pathname : pathname,
        };
      });
    });

    setActiveKey(currRouteSettingsKey);
  }, [pathname]);

  return (
    <Tabs
      hideAdd
      type="editable-card"
      items={items}
      activeKey={activeKey}
      onChange={handleChange}
      onEdit={(targetKey) => {
        if (typeof targetKey !== 'string') {
          return;
        }
        handleRemoveTab(targetKey);
      }}
      tabBarExtraContent={
        <Tooltip title="清空标签页" placement="bottomRight">
          <Button type="text" onClick={handleClearTabs} icon={<ClearOutlined />} />
        </Tooltip>
      }
    />
  );
};

export default TabsHeader;
