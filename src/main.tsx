import { ProComponentsProvider } from '@/features';
import { routes } from '@/routes';
import '@/styles/nprogress.css';
import '@/styles/tailwind.css';
import { checkToken, redirectToLoginPage } from '@/utils';
import * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { App, ConfigProvider } from 'antd';
import 'antd/dist/reset.css';
import zhCN from 'antd/es/locale/zh_CN';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import { Provider } from 'jotai';
import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromChildren,
  matchRoutes,
  RouterProvider,
  useLocation,
  useNavigationType,
} from 'react-router-dom';

const bootstrap = () => {
  // 生产环境下自动跳转到 https
  if (import.meta.env.PROD && window.location.protocol === 'http:') {
    window.location.replace(`https:${window.location.href.substring(5)}`);
    return;
  }

  // 不存在 token 时跳转到登录页
  const currBasename = window.location.pathname.replace(import.meta.env.BASE_URL, '/');
  if (currBasename !== '/login' && !checkToken()) {
    redirectToLoginPage();
    return;
  }

  dayjs.locale('zh-cn');

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnWindowFocus: false,
      },
      mutations: {
        retry: false,
      },
    },
  });

  Sentry.init({
    dsn: 'https://fd72e8f1a1e8477db459c343537c5c91@o1364137.ingest.sentry.io/4503962906591232',
    enabled: import.meta.env.PROD,
    integrations: [
      new BrowserTracing({
        routingInstrumentation: Sentry.reactRouterV6Instrumentation(
          useEffect,
          useLocation,
          useNavigationType,
          createRoutesFromChildren,
          matchRoutes,
        ),
      }),
    ],
    tracesSampleRate: 1.0,
  });
  const router = Sentry.wrapCreateBrowserRouter(createBrowserRouter)(routes, { basename: import.meta.env.BASE_URL });

  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <Provider>
        <QueryClientProvider client={queryClient}>
          <ConfigProvider locale={zhCN}>
            <App>
              <ProComponentsProvider>
                <RouterProvider router={router} />
              </ProComponentsProvider>
            </App>
          </ConfigProvider>
          <ReactQueryDevtools position="bottom-right" />
        </QueryClientProvider>
      </Provider>
    </StrictMode>,
  );
};

bootstrap();
