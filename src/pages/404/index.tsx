import { Link } from '@umijs/max';
import { Result } from 'antd';
import type { FC } from 'react';

const NoFoundPage: FC = () => {
  return <Result status="404" title="404" subTitle="抱歉，您访问的页面不存在。" extra={<Link to="/">返回首页</Link>} />;
};

export default NoFoundPage;
