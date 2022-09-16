import { BaseFooter } from '@/components';
import { ProComponentsProvider } from '@/features';
import { SysLoginGetInfo, SysLoginGetRouters } from '@/services/sys/SysLoginService';
import type { InitialState } from '@/types';
import { checkIsLoginPage, checkToken, logout } from '@/utils';
import { LogoutOutlined, SettingOutlined } from '@ant-design/icons';
import type { ProLayoutProps } from '@ant-design/pro-components';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { history } from '@umijs/max';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import type { ReactNode } from 'react';
import { createElement } from 'react';
import { RecoilRoot } from 'recoil';

dayjs.locale('zh-cn');

const queryClient = new QueryClient();

export const render = (oldRender: () => void) => {
  const hasLogin = checkToken();
  const isLoginPage = checkIsLoginPage();

  if (!hasLogin && !isLoginPage) {
    window.location.replace(`${LOGIN_PATH_NAME}?redirect=${window.location.pathname}`);
    return;
  }

  oldRender();
};

export const getInitialState = async (): Promise<InitialState | Record<any, any>> => {
  const hasLogin = checkToken();
  const isLoginPage = checkIsLoginPage();

  if (!hasLogin || isLoginPage) {
    return {};
  }

  const [userInfo, userRoutes] = await Promise.all([SysLoginGetInfo(), SysLoginGetRouters()]);

  return {
    userInfo,
    userRoutes,
  };
};

export const dataflowProvider = (container: ReactNode, opts: { children: ReactNode }) => {
  return createElement(
    (props) => {
      return (
        <RecoilRoot>
          <QueryClientProvider client={queryClient}>
            <ProComponentsProvider>{props.children}</ProComponentsProvider>
            <ReactQueryDevtools position="bottom-right" />
          </QueryClientProvider>
        </RecoilRoot>
      );
    },
    opts,
    container,
  );
};

export const layout = ({ initialState }: { initialState?: InitialState }): ProLayoutProps => {
  return {
    title: 'RuoYi X Umi',
    onMenuHeaderClick: () => history.push('/'),
    rightContentRender: false,
    footerRender: BaseFooter,
    avatarProps: {
      title: initialState?.userInfo?.user?.nickName,
      src: initialState?.userInfo?.user?.avatar,
    },
    actionsRender: () => [
      <SettingOutlined key="SettingOutlined" onClick={() => history.push('/settings')} />,
      <LogoutOutlined key="LogoutOutlined" onClick={logout} />,
    ],
    token: {
      bgLayout: 'linear-gradient(#fff, #f0f0f0)',
      pageContainer: {
        marginInlinePageContainerContent: 0,
        marginBlockPageContainerContent: 0,
      },
      sider: {
        colorBgCollapsedButton: '#fff',
        colorTextCollapsedButtonHover: 'rgba(0,0,0,0.65)',
        colorTextCollapsedButton: 'rgba(0,0,0,0.45)',
        colorMenuBackground: '#292f33',
        colorBgMenuItemCollapsedSelected: '#1890ff',
        colorMenuItemDivider: 'rgba(255,255,255,0.15)',
        colorBgMenuItemSelected: '#1890ff',
        colorTextMenuSelected: '#fff',
        colorTextMenu: 'rgba(255,255,255,0.75)',
        colorTextMenuSecondary: 'rgba(255,255,255,0.65)',
        colorTextMenuTitle: 'rgba(255,255,255,0.95)',
        colorTextMenuActive: 'rgba(255,255,255,0.95)',
        colorTextSubMenuSelected: '#fff',
      },
    },
  };
};
