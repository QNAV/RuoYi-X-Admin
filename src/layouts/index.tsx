import { Access, PermissionDenied } from '@/components';
import MenuItem from '@/layouts/components/MenuItem';
import type { KeepAliveElements } from '@/layouts/components/TabsHeader';
import TabsHeader from '@/layouts/components/TabsHeader';
import { useQueryInitialState } from '@/models';
import type { RouteSetting } from '@/utils';
import type { ProTokenType } from '@ant-design/pro-components';
import { ProLayout } from '@ant-design/pro-components';
import classNames from 'classnames';
import type { FC } from 'react';
import { useRef, useState } from 'react';
import { matchPath, Navigate, useLocation, useOutlet } from 'react-router-dom';
import './index.less';

const token: ProTokenType['layout'] = {
  bgLayout: '#f5f5f5',
  pageContainer: {
    paddingBlockPageContainerContent: 0,
    paddingInlinePageContainerContent: 0,
  },
  sider: {
    colorMenuBackground: '#fff',
    colorMenuItemDivider: '#dfdfdf',
    colorTextMenu: '#595959',
    colorTextMenuSelected: 'rgba(42,122,251,1)',
    colorBgMenuItemSelected: 'rgba(230,243,254,1)',
  },
};

const Layouts: FC = () => {
  const { pathname } = useLocation();
  const element = useOutlet();

  const { data: initialState, isLoading, isError } = useQueryInitialState();
  const routeSettingMap: Record<string, RouteSetting> = initialState?.routeSettingMap ?? {};

  const keepAliveElements = useRef<KeepAliveElements>({});
  const currRouteSettingsKey = Object.keys(routeSettingMap).find((key) => matchPath(key, pathname));
  const isKeepAlive = currRouteSettingsKey ? routeSettingMap[currRouteSettingsKey].isKeepAlive : false;
  if (isKeepAlive) {
    keepAliveElements.current[currRouteSettingsKey!] = element;
  }

  const [cacheKeyMap, setCacheKeyMap] = useState<Record<string, number>>({});
  const removeElementByKey = (key: string) => {
    if (keepAliveElements.current.hasOwnProperty(key)) {
      delete keepAliveElements.current[key];
      setCacheKeyMap((cacheKeyMap) => ({
        ...cacheKeyMap,
        [key]: Math.random(),
      }));
    }
  };
  const refreshElementByKey = (key: string) => {
    setCacheKeyMap((cacheKeyMap) => ({
      ...cacheKeyMap,
      [key]: Math.random(),
    }));
  };

  const [collapsed, setCollapsed] = useState(false);

  if (isError) {
    return <Navigate to="/login" replace />;
  }

  return (
    <ProLayout
      title="RuoYi X Admin"
      location={{ pathname }}
      menu={{ loading: isLoading }}
      loading={isLoading}
      menuDataRender={() => initialState?.menus ?? []}
      menuItemRender={MenuItem}
      token={token}
      siderWidth={200}
      disableMobile
      onCollapse={setCollapsed}
    >
      <header
        className={classNames(
          collapsed ? 'w-[calc(100%-60px)]' : 'w-[calc(100%-200px)]',
          'fixed',
          'top-0',
          'right-0',
          'z-10',
        )}
      >
        <TabsHeader
          currRouteSettings={currRouteSettingsKey ? routeSettingMap[currRouteSettingsKey] : undefined}
          refreshElementByKey={refreshElementByKey}
          removeElementByKey={removeElementByKey}
        />
      </header>
      {!isLoading && (
        <Access accessible={!!currRouteSettingsKey} fallback={<PermissionDenied />}>
          {Object.entries(keepAliveElements.current).map(([key, element]) => (
            <div key={`${key}_${cacheKeyMap?.[key] ?? '_'}`} hidden={!matchPath(key, pathname)} className="mt-10">
              {element}
            </div>
          ))}
          {!isKeepAlive && (
            <div key={`${currRouteSettingsKey}_${cacheKeyMap?.[currRouteSettingsKey!]}`} className="mt-10">
              {element}
            </div>
          )}
        </Access>
      )}
    </ProLayout>
  );
};

export default Layouts;
