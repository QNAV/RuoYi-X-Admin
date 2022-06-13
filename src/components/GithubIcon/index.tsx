import { GithubOutlined } from '@ant-design/icons';

export const GithubIcon = () => {
  return (
    <GithubOutlined
      style={{ cursor: 'pointer', fontSize: '18px' }}
      onClick={() => window.open('https://github.com/QNAV/RuoYi-X-Umi', '_blank')}
    />
  );
};
