import { LogoutIcon, SettingsIcon } from '@/components';
import { reqGetUserInfo, reqGetUserRoutes } from '@/services';
import type { InitialState } from '@/types';
import { checkToken, getUserMenus } from '@/utils';
import { GithubOutlined } from '@ant-design/icons';
import type { ProLayoutProps } from '@ant-design/pro-layout/es/ProLayout';
import type { MenuDataItem } from '@ant-design/pro-layout/es/typings';
import { history } from '@umijs/max';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import type { ReactNode } from 'react';
import { createElement } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

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
    links: [
      <GithubOutlined
        key="GithubOutlined"
        style={{ fontSize: '18px' }}
        onClick={() => window.open(GITHUB_URL, '_blank')}
      />,
    ],
    rightContentRender: false,
    onMenuHeaderClick: () => history.push('/'),
    actionsRender: () => [<SettingsIcon key="LogoutIcon" />, <LogoutIcon key="LogoutIcon" />],
    postMenuData: (menusData: MenuDataItem[] = []) => {
      const menus = getUserMenus(userRoutes);

      if (menus.length === 0) {
        return menusData;
      }

      return [...menusData, ...menus];
    },
  };
};
