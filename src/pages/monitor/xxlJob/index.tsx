import { PageIframe } from '@/features';

const src = import.meta.env.VITE_APP_XXL_JOB_ADMIN;

const PageMonitorXxlJob = () => {
  return <PageIframe src={src} />;
};

export default PageMonitorXxlJob;
