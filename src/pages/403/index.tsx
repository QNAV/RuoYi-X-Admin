import { Link } from '@umijs/max';
import { Result } from 'antd';
import type { FC } from 'react';

const PermissionDeniedPage: FC = () => {
  return <Result status="403" title="403" subTitle="抱歉，您无权访问此页面" extra={<Link to="/">返回首页</Link>} />;
};

export default PermissionDeniedPage;
