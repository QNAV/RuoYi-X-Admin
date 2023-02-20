import { BasePageContainer } from '@/components';
import type { FC } from 'react';

export interface PageIframeProps {
  src: string;
}

export const PageIframe: FC<PageIframeProps> = ({ src }) => {
  return (
    <BasePageContainer>
      {/* eslint-disable-next-line react/iframe-missing-sandbox */}
      <iframe src={src} className="border-0" style={{ width: '100%', height: 'calc(100vh - 80px)' }} />
    </BasePageContainer>
  );
};
