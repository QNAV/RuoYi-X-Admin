import { ProComponentsProvider } from '@/features';
import { routes } from '@/routes';
import { checkIsLoginPage, checkToken } from '@/utils';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ConfigProvider } from 'antd';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import { Provider } from 'jotai';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './global.less';

const render = () => {
  const BASE_NAME = import.meta.env.VITE_BASE_NAME;
  const LOGIN_PATH_NAME = import.meta.env.VITE_LOGIN_PATH_NAME;

  const hasToken = checkToken();
  const isLoginPage = checkIsLoginPage();

  if (!hasToken && !isLoginPage) {
    return window.location.replace(
      `${LOGIN_PATH_NAME}${window.location.pathname === BASE_NAME ? '' : `?redirect=${window.location.pathname}`}`,
    );
  }

  dayjs.locale('zh-cn');

  const queryClient = new QueryClient();

  const router = createBrowserRouter(routes, { basename: BASE_NAME });

  createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider>
      <QueryClientProvider client={queryClient}>
        <ConfigProvider>
          <ProComponentsProvider>
            <RouterProvider router={router} />
          </ProComponentsProvider>
        </ConfigProvider>
        <ReactQueryDevtools position="bottom-right" />
      </QueryClientProvider>
    </Provider>,
  );
};

render();
