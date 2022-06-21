import { LogoutIcon, SettingsIcon } from '@/components';
import { reqGetUserInfo, reqGetUserRoutes } from '@/services';
import type { InitialState } from '@/types';
import { checkToken, convertUserRoutesToMenus } from '@/utils';
import type { RunTimeLayoutConfig } from '@@/plugin-layout';
import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-layout';
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
    rightContentRender: false,
    onMenuHeaderClick: () => history.push('/'),
    actionsRender: () => [<SettingsIcon key="LogoutIcon" />, <LogoutIcon key="LogoutIcon" />],
    menuDataRender: () => convertUserRoutesToMenus(userRoutes),
    footerRender: () => (
      <DefaultFooter
        links={[
          { key: 'Github', title: <GithubOutlined />, href: 'https://github.com/QNAV/RuoYi-X-Umi', blankTarget: true },
        ]}
        copyright="2022 Sushi Su"
      />
    ),
  };
};