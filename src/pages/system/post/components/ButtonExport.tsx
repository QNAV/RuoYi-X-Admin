import { Access } from '@/components';
import type { SysPostPageQueryBo, SysPostQueryBo } from '@/services/system/data-contracts';
import { sysPostPostExportSkipErrorHandler } from '@/services/system/System';
import { download } from '@/utils';
import { DownloadOutlined } from '@ant-design/icons';
import { useMutation } from '@tanstack/react-query';
import { App, Button } from 'antd';
import type { FC } from 'react';

export type SearchParams = Pick<SysPostPageQueryBo, 'postCode' | 'postName' | 'status' | 'pageNum' | 'pageSize'>;

const handleExport = async (searchParams: SysPostQueryBo) => {
  const { data } = await sysPostPostExportSkipErrorHandler(searchParams, {
    format: 'blob',
  });

  await download(data, `post_${new Date().getTime()}.xlsx`);
};

const ButtonExport: FC<{ searchParams: SysPostQueryBo }> = ({ searchParams }) => {
  const { message } = App.useApp();

  const { isLoading, mutate } = useMutation(handleExport, {
    onSuccess: () => {
      message.success('导出成功');
    },
  });

  return (
    <Access accessible>
      <Button type="primary" ghost icon={<DownloadOutlined />} loading={isLoading} onClick={() => mutate(searchParams)}>
        导出当前列表
      </Button>
    </Access>
  );
};

export default ButtonExport;
