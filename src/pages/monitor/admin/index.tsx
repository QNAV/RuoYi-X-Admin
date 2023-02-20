import { PageIframe } from '@/features';

const src = import.meta.env.VITE_APP_MONITRO_ADMIN;

const PageMonitorAdmin = () => {
  return <PageIframe src={src} />;
};

export default PageMonitorAdmin;
