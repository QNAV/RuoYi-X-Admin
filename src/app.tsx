import { LogoutIcon, SettingsIcon } from '@/components';
import { GithubIcon } from '@/components/GithubIcon';
import { reqGetUserInfo, reqGetUserRoutes } from '@/services';
import type { InitialState } from '@/types';
import { checkToken, getUserMenus } from '@/utils';
import type { RunTimeLayoutConfig } from '@@/plugin-layout';
import { history } from '@umijs/max';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import type { ReactNode } from 'react';
import { createElement } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import type { RecoilRootProps } from 'recoil';
import { RecoilRoot } from 'recoil';

dayjs.locale('zh-cn');

const queryClient = new QueryClient();

export const render = (oldRender: () => void) => {
  const hasLogin = checkToken();
  const isLoginPage = window.location.pathname === LOGIN_PATH_NAME;

  if (!hasLogin && !isLoginPage) {
    window.location.href = LOGIN_PATH_NAME;
    return;
  }

  oldRender();
};

export const getInitialState = async (): Promise<InitialState | undefined> => {
  const hasLogin = checkToken();

  if (!hasLogin) {
    return;
  }

  const [userInfo, userRoutes] = await Promise.all([reqGetUserInfo(), reqGetUserRoutes()]);

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

export const layout: RunTimeLayoutConfig = ({ initialState }: { initialState: InitialState }) => {
  if (!initialState) return {};

  const { userInfo, userRoutes } = initialState;

  return {
    avatarProps: {
      src: userInfo.user.avatar,
      size: 'small',
      title: userInfo.user.nickName,
    },
    links: [<GithubIcon key="GithubIcon" />],
    rightContentRender: false,
    onMenuHeaderClick: () => history.push('/'),
    actionsRender: () => [<SettingsIcon key="LogoutIcon" />, <LogoutIcon key="LogoutIcon" />],
    postMenuData: () => {
      console.log(getUserMenus(userRoutes));
      return getUserMenus(userRoutes);
    },
  };
};
