import type { PageContainerProps } from '@ant-design/pro-layout';
import { PageContainer } from '@ant-design/pro-layout';
import type { FC } from 'react';
import { cloneElement } from 'react';

export const BasePageContainer: FC<PageContainerProps> = (props) => {
  return cloneElement(
    <PageContainer
      header={{
        title: '',
      }}
    >
      {props.children}
    </PageContainer>,
    props,
  );
};
