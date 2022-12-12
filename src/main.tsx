import { ProComponentsProvider } from '@/features';
import { routes } from '@/routes';
import * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ConfigProvider } from 'antd';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import { Provider } from 'jotai';
import { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromChildren,
  matchRoutes,
  RouterProvider,
  useLocation,
  useNavigationType,
} from 'react-router-dom';
import './main.css';

const bootstrap = () => {
  dayjs.locale('zh-cn');

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  Sentry.init({
    dsn: 'https://fd72e8f1a1e8477db459c343537c5c91@o1364137.ingest.sentry.io/4503962906591232',
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

bootstrap();
