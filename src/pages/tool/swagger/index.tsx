import { PageIframe } from '@/features';

const src = `${import.meta.env.VITE_API_HOST}${import.meta.env.VITE_APP_SWAGGER}`;

const PageToolSwagger = () => {
  return <PageIframe src={src} />;
};

export default PageToolSwagger;
