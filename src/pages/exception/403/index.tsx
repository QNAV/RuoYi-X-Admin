import { Result } from 'antd';
import type { FC } from 'react';
import { Link } from 'react-router-dom';

const PagePermissionDenied: FC = () => {
  return (
    <Result
      status="403"
      title="403"
      subTitle="抱歉，您无权访问此页面"
      extra={
        <Link to="/" reloadDocument>
          返回首页
        </Link>
      }
    />
  );
};

export default PagePermissionDenied;
