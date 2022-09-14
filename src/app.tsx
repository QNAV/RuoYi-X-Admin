import { BaseFooter } from '@/components';
import { SysLoginGetInfo, SysLoginGetRouters } from '@/services/sys/SysLoginService';
import type { InitialState } from '@/types';
import { checkToken } from '@/utils';
import type { ProLayoutProps } from '@ant-design/pro-components';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { history } from '@umijs/max';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import type { ReactNode } from 'react';
import { createElement } from 'react';
import type { RecoilRootProps } from 'recoil';
import { RecoilRoot } from 'recoil';

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

export const dataflowProvider = (container: ReactNode, opts: { children: ReactNode }) => {
  return createElement(
    (props) => {
      return (
        <QueryClientProvider {...props}>
          {props.children}
          <ReactQueryDevtools position="bottom-right" />
        </QueryClientProvider>
      );
    },
    { ...opts, client: queryClient },
    container,
  );
};

export const layout = ({ initialState }: { initialState?: InitialState }): ProLayoutProps => {
  if (!initialState) return {};

  return {
    title: 'RuoYi X Umi',
    onMenuHeaderClick: () => history.push('/'),
    rightContentRender: false,
    footerRender: BaseFooter,
    token: {
      pageContainer: {
        marginInlinePageContainerContent: 0,
        marginBlockPageContainerContent: 0,
      },
    },
  };
};

export const tabsLayout = {
  // local: convertRoutesToNameMap(routes),
};
