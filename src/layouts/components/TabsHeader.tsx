import type { RouteSetting } from '@/utils';
import { ConfigProvider, Dropdown, Tabs } from 'antd';
import type { FC } from 'react';
import { useEffect, useState } from 'react';
import type { useOutlet } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';

export type KeepAliveElements = Record<string, ReturnType<typeof useOutlet>>;

interface HeaderTabsProps {
  currRouteSettings?: RouteSetting;
  removeElementByKey: (key: string) => void;
  refreshElementByKey: (key: string) => void;
}

interface TabItem {
  key: string;
  label: string;
  pathname: string;
  search: string;
  closable: boolean;
  keepAlive: boolean;
}

const defaultTabs: TabItem[] = [
  {
    key: '/',
    label: '首页',
    pathname: '/',
    search: '',
    closable: false,
    keepAlive: true,
  },
];

const TabsHeader: FC<HeaderTabsProps> = ({ currRouteSettings, refreshElementByKey, removeElementByKey }) => {
  const { pathname, search } = useLocation();
  const navigate = useNavigate();

  const [activeKey, setActiveKey] = useState<string>();
  const [items, setItems] = useState<TabItem[]>(defaultTabs);

  const handleChange = (key: string) => {
    const { pathname, search } = items.find((item) => item.key === key)!;
    navigate(`${pathname}${search}`);
  };

  const handelRefreshTab = (targetKey: string) => {
    refreshElementByKey(targetKey);
  };

  const handleRemoveTab = (targetKey: string) => {
    const currActiveKeyIndex = items.findIndex(({ key }) => key === targetKey);

    const { pathname, search } =
      items[currActiveKeyIndex < items.length - 1 ? currActiveKeyIndex + 1 : currActiveKeyIndex - 1];

    navigate(`${pathname}${search}`);

    setItems((v) => v.filter(({ key }) => key !== targetKey));

    removeElementByKey(targetKey);
  };

  const handleRemoveOtherTabs = (targetKey: string, url: string) => {
    setItems((e) => {
      e.filter((i) => i.closable && i.key !== targetKey).forEach(({ key }) => {
        removeElementByKey(key);
      });

      return e.filter((i) => !i.closable || i.key === targetKey);
    });

    navigate(url);
  };

  const handelRemoveLeftTabs = (targetKey: string, currActiveKeyIndex: number, url: string) => {
    setItems((e) => {
      const removeKeys = e.filter((i, index) => i.closable && index < currActiveKeyIndex).map((i) => i.key);

      removeKeys.forEach((key) => {
        removeElementByKey(key);
      });

      return e.filter((i) => !removeKeys.includes(i.key));
    });

    navigate(url);
  };

  const handelRemoveRightTabs = (targetKey: string, currActiveKeyIndex: number, url: string) => {
    setItems((e) => {
      const removeKeys = e.filter((i, index) => i.closable && index > currActiveKeyIndex).map((i) => i.key);

      removeKeys.forEach((key) => {
        removeElementByKey(key);
      });

      return e.filter((i) => !removeKeys.includes(i.key));
    });

    navigate(url);
  };

  const handleRemoveAllTabs = () => {
    navigate('/');

    setItems((e) => {
      e.filter((i) => i.closable && i.keepAlive).forEach(({ key }) => {
        removeElementByKey(key);
      });

      return defaultTabs;
    });
  };

  useEffect(() => {
    if (currRouteSettings === undefined) {
      setActiveKey(undefined);
      return;
    }

    const { name: label, closableTab: closable, key, isKeepAlive } = currRouteSettings;

    setItems((v = []) => {
      // 如果当前路由不在标签页中，向标签页中添加当前路由
      if (v.every((i) => i.key !== key)) {
        return [...v, { key, label, pathname, search, closable, keepAlive: isKeepAlive }];
      }

      // 如果当前路由已经在标签页中，并且 pathname 与 search 与缓存中的一致，则直接返回
      if (v.some((i) => i.key === key && i.pathname === pathname && i.search === search)) return v;

      return v.map((i) => {
        if (i.key !== key) {
          return i;
        }

        return {
          ...i,
          search: i.search === search ? i.search : search,
          pathname: i.pathname === pathname ? i.pathname : pathname,
        };
      });
    });

    setActiveKey(key);
  }, [pathname]);

  return (
    <ConfigProvider
      theme={{
        components: {
          Tabs: {
            colorBgContainer: '#f5f5f5',
            colorFillAlter: '#fff',
            margin: 0,
          },
        },
      }}
    >
      <Tabs
        hideAdd
        type="editable-card"
        className="bg-white"
        items={items}
        activeKey={activeKey}
        onChange={handleChange}
        onEdit={(targetKey) => {
          if (typeof targetKey !== 'string') {
            return;
          }
          handleRemoveTab(targetKey);
        }}
        renderTabBar={(tabBarProps, DefaultTabBar) => (
          <DefaultTabBar {...tabBarProps}>
            {(node) => {
              const index = items.findIndex(({ key }) => key === node.key);
              const { pathname, search } = items[index];
              const url = `${pathname}${search}`;
              const isFirst = index === 0;
              const isFirstLeft = index === 1;
              const isLastRight = index === items.length - 1;
              return (
                <Dropdown
                  key={node.key}
                  menu={{
                    items: [
                      {
                        label: '重新加载',
                        key: 'refresh',
                        disabled: node.key !== activeKey,
                        onClick: () => handelRefreshTab(node.key as string),
                      },
                      {
                        type: 'divider',
                      },
                      {
                        label: '关闭左侧',
                        key: 'closeLeft',
                        disabled: isFirst || isFirstLeft,
                        onClick: () => handelRemoveLeftTabs(node.key as string, index, url),
                      },
                      {
                        label: '关闭右侧',
                        key: 'closeRight',
                        disabled: isLastRight,
                        onClick: () => handelRemoveRightTabs(node.key as string, index, url),
                      },
                      {
                        type: 'divider',
                      },
                      {
                        label: '关闭其他',
                        key: 'closeOther',
                        disabled: isFirst,
                        onClick: () => handleRemoveOtherTabs(node.key as string, url),
                      },
                      {
                        label: '关闭全部',
                        key: 'closeAll',
                        disabled: isFirst,
                        onClick: () => handleRemoveAllTabs(),
                      },
                    ],
                  }}
                  trigger={['contextMenu']}
                >
                  {node}
                </Dropdown>
              );
            }}
          </DefaultTabBar>
        )}
      />
    </ConfigProvider>
  );
};

export default TabsHeader;
