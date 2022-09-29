import { ProComponentsProvider } from '@/features';
import { routes } from '@/routes';
import { checkIsLoginPage, checkToken } from '@/utils';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ConfigProvider } from 'antd';
import moment from 'moment';
import 'moment/dist/locale/zh-cn';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import './global.less';

const render = () => {
  const BASE_NAME = import.meta.env.VITE_BASE_NAME;
  const LOGIN_PATH_NAME = import.meta.env.VITE_LOGIN_PATH_NAME;

  const hasToken = checkToken();
  const isLoginPage = checkIsLoginPage();

  if (!hasToken && !isLoginPage) {
    const redirect = window.location.pathname === BASE_NAME ? '' : `?redirect=${window.location.pathname}`;
    window.location.replace(`${LOGIN_PATH_NAME}${redirect}`);
    return;
  }

  moment.locale('zh-cn');

  const queryClient = new QueryClient();

  const router = createBrowserRouter(routes, { basename: BASE_NAME });

  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ConfigProvider>
          <ProComponentsProvider>
            <RouterProvider router={router} />
          </ProComponentsProvider>
        </ConfigProvider>
        <ReactQueryDevtools position="bottom-right" />
      </QueryClientProvider>
    </RecoilRoot>,
  );
};

render();
