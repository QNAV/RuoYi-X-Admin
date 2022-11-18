import { ProComponentsProvider } from '@/features';
import { routes } from '@/routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ConfigProvider } from 'antd';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import { Provider } from 'jotai';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './main.css';

dayjs.locale('zh-cn');

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const router = createBrowserRouter(routes, { basename: import.meta.env.VITE_BASE_NAME });

createRoot(document.getElementById('root')!).render(
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
