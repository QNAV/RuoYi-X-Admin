import { BaseFooter, LogoutIcon, SettingsIcon } from '@/components';
import { SysLoginGetInfo, SysLoginGetRouters } from '@/services/sys/SysLoginService';
import type { InitialState } from '@/types';
import { checkToken, convertUserRoutesToMenus } from '@/utils';
import type { ProLayoutProps } from '@ant-design/pro-layout';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { history } from '@umijs/max';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import type { ReactNode } from 'react';
import { createElement } from 'react';
import type { RecoilRootProps } from 'recoil';
import { RecoilRoot } from 'recoil';
import { publicRoutes } from '../config/routes';

dayjs.locale('zh-cn');

const queryClient = new QueryClient();

export const render = (oldRender: () => void) => {
  const hasLogin = checkToken();
  const isLoginPage = window.location.pathname === LOGIN_PATH_NAME;

  if (!hasLogin && !isLoginPage) {
    window.location.replace(`${LOGIN_PATH_NAME}?redirect=${window.location.pathname}`);
    return;
  }

  oldRender();
};

export const getInitialState = async (): Promise<InitialState | undefined> => {
  const hasLogin = checkToken();

  if (!hasLogin) {
    return;
  }

  const [userInfo, userRoutes] = await Promise.all([SysLoginGetInfo(), SysLoginGetRouters()]);

  return {
    userInfo,
    userRoutes,
  };
};

export const rootContainer = (container: ReactNode, opts: RecoilRootProps) => {
  return createElement(RecoilRoot, opts, container);
};

export const dataflowProvider = (container: ReactNode) => {
  return createElement(QueryClientProvider, { client: queryClient }, container);
};

export const layout = ({ initialState }: { initialState: InitialState }): ProLayoutProps => {
  if (!initialState) return {};

  const { userInfo, userRoutes } = initialState;

  return {
    avatarProps: {
      src: userInfo.user.avatar,
      size: 'small',
      title: userInfo.user.nickName,
    },
    rightContentRender: false,
    token: {
      layoutBg: '#f5f5f5',
      header: {
        headerBgColor: '#292f33',
        headerTitleColor: '#fff',
      },
      sider: {
        menuBackgroundColor: '#fff',
        menuItemDividerColor: '#dfdfdf',
        menuTextColor: '#595959',
        menuSelectedTextColor: 'rgba(42,122,251,1)',
        menuItemSelectedBgColor: 'rgba(230,243,254,1)',
        menuItemCollapsedSelectedBgColor: 'rgba(230,243,254,1)',
      },
    },
    onMenuHeaderClick: () => history.push('/'),
    actionsRender: () => [<SettingsIcon key="SettingsIcon" />, <LogoutIcon key="LogoutIcon" />],
    menuDataRender: () => [...publicRoutes, ...convertUserRoutesToMenus(userRoutes)],
    footerRender: BaseFooter,
  };
};
