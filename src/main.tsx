import { ProComponentsProvider } from '@/features';
import { Element } from '@/routes';
import { checkIsLoginPage, checkToken } from '@/utils';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ConfigProvider } from 'antd';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import './global.less';

const LOGIN_PATH_NAME = import.meta.env.VITE_LOGIN_PATH_NAME;

const render = () => {
  const hasToken = checkToken();
  const isLoginPage = checkIsLoginPage();

  if (!hasToken && !isLoginPage) {
    window.location.replace(LOGIN_PATH_NAME);
    return;
  }

  const basename = LOGIN_PATH_NAME.replace('login', '');
  const queryClient = new QueryClient();

  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <StrictMode>
      <BrowserRouter basename={basename}>
        <RecoilRoot>
          <QueryClientProvider client={queryClient}>
            <ConfigProvider>
              <ProComponentsProvider>
                <Element />
              </ProComponentsProvider>
            </ConfigProvider>
            <ReactQueryDevtools position="bottom-right" />
          </QueryClientProvider>
        </RecoilRoot>
      </BrowserRouter>
    </StrictMode>,
  );
};

render();
