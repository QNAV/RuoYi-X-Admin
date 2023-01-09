import { Access, PermissionDenied } from '@/components';
import MenuItem from '@/layouts/components/MenuItem';
import type { KeepAliveElements } from '@/layouts/components/TabsHeader';
import TabsHeader from '@/layouts/components/TabsHeader';
import { useQueryInitialState } from '@/models';
import type { RouteSetting } from '@/utils';
import type { ProTokenType } from '@ant-design/pro-components';
import { ProLayout } from '@ant-design/pro-components';
import type { FC } from 'react';
import { useRef, useState } from 'react';
import { matchPath, Navigate, useLocation, useNavigate, useOutlet } from 'react-router-dom';
import './index.less';

const token: ProTokenType['layout'] = {
  bgLayout: '#f5f5f5',
  colorBgAppListIconHover: 'rgba(0,0,0,0.06)',
  colorTextAppListIconHover: 'rgba(255,255,255,0.95)',
  colorTextAppListIcon: 'rgba(255,255,255,0.85)',
  pageContainer: {
    paddingBlockPageContainerContent: 0,
    paddingInlinePageContainerContent: 0,
  },
  sider: {
    colorBgCollapsedButton: '#fff',
    colorTextCollapsedButtonHover: 'rgba(0,0,0,0.65)',
    colorTextCollapsedButton: 'rgba(0,0,0,0.45)',
    colorMenuBackground: '#004FD9',
    colorBgMenuItemCollapsedHover: 'rgba(0,0,0,0.06)',
    colorBgMenuItemCollapsedSelected: 'rgba(0,0,0,0.15)',
    colorBgMenuItemCollapsedElevated: 'rgba(0,0,0,0.95)',
    colorMenuItemDivider: 'rgba(255,255,255,0.15)',
    colorBgMenuItemHover: 'rgba(0,0,0,0.06)',
    colorBgMenuItemSelected: 'rgba(0,0,0,0.15)',
    colorTextMenuSelected: '#fff',
    colorTextMenuItemHover: 'rgba(255,255,255,0.75)',
    colorTextMenu: 'rgba(255,255,255,0.75)',
    colorTextMenuSecondary: 'rgba(255,255,255,0.65)',
    colorTextMenuTitle: 'rgba(255,255,255,0.95)',
    colorTextMenuActive: 'rgba(255,255,255,0.95)',
    colorTextSubMenuSelected: '#fff',
  },
};

const Layouts: FC = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
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

  if (isError) {
    return <Navigate to="/login" replace={true} />;
  }

  return (
    <ProLayout
      title="RuoYi X Admin"
      location={{ pathname }}
      onMenuHeaderClick={() => navigate('/')}
      menu={{ loading: isLoading }}
      loading={isLoading}
      menuDataRender={() => initialState?.menus ?? []}
      menuItemRender={MenuItem}
      token={token}
      siderWidth={200}
    >
      <TabsHeader
        currRouteSettings={currRouteSettingsKey ? routeSettingMap[currRouteSettingsKey] : undefined}
        refreshElementByKey={refreshElementByKey}
        removeElementByKey={removeElementByKey}
      />
      {!isLoading && (
        <Access accessible={!!currRouteSettingsKey} fallback={<PermissionDenied />}>
          {Object.entries(keepAliveElements.current).map(([key, element]) => (
            <div key={`${key}_${cacheKeyMap?.[key] ?? '_'}`} hidden={!matchPath(key, pathname)}>
              {element}
            </div>
          ))}
          {!isKeepAlive && (
            <div
              key={`${currRouteSettingsKey ?? '_'}_${
                currRouteSettingsKey ? cacheKeyMap?.[currRouteSettingsKey] ?? '_' : '_'
              }`}
            >
              {element}
            </div>
          )}
        </Access>
      )}{' '}
    </ProLayout>
  );
};

export default Layouts;
