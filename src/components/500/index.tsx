import { Result } from 'antd';
import type { FC } from 'react';
import { Link } from 'react-router-dom';

export const Error: FC = () => {
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
