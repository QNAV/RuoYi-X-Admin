import { ProComponentsProvider } from '@/features';
import { routes } from '@/routes';
import { checkToken } from '@/utils';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ConfigProvider } from 'antd';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import { Provider } from 'jotai';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './main.css';

const render = () => {
  const basename = import.meta.env.VITE_BASE_NAME;
  const pathname = window.location.pathname.replace(basename, '/');

  const hasToken = checkToken();
  const isLoginPage = pathname === '/login';

  if (!hasToken && !isLoginPage) {
    window.location.replace(`${basename}login?redirect=${pathname}`);
    return;
  }

  dayjs.locale('zh-cn');

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  const router = createBrowserRouter(routes, { basename });

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
