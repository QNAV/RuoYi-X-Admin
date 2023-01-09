import { Result } from 'antd';
import type { FC } from 'react';
import { Link, useRouteError } from 'react-router-dom';

export const RouteError: FC = () => {
  const e = useRouteError() as { status?: number; statusText?: string };

  if (e?.status === 404) {
    return (
      <Result
        status="404"
        title="404"
        subTitle="抱歉，您访问的页面不存在。"
        extra={
          <Link to="/" reloadDocument>
            返回首页
          </Link>
        }
      />
    );
  }

  return (
    <Result
      status="500"
      title="500"
      subTitle="抱歉，服务器出错了"
      extra={
        <Link to="/" reloadDocument>
          返回首页
        </Link>
      }
    />
  );
};
