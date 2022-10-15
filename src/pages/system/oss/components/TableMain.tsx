import { BaseProTable } from '@/components';
import { useMainTableActionRef } from '@/pages/system/oss/model';
import { SysOssPostList } from '@/services/sys/SysOssService';
import { convertParams } from '@/utils';
import type { FC } from 'react';

const TableMain: FC = () => {
  const actionRef = useMainTableActionRef();

  return <BaseProTable actionRef={actionRef} request={(...p) => SysOssPostList(convertParams(...p))} />;
};

export default TableMain;
