import { Access } from '@/components';
import { useAtomValueAccess } from '@/models';
import { SysPostPostExport } from '@/services/sys/SysPostService';
import { DownloadOutlined } from '@ant-design/icons';
import { useMutation } from '@tanstack/react-query';
import { Button, message } from 'antd';
import type { FC } from 'react';

export type SearchParams = Pick<API.SysPostPageQueryBo, 'postCode' | 'postName' | 'status' | 'pageNum' | 'pageSize'>;

const ButtonExport: FC<{ searchParams: SearchParams }> = ({ searchParams }) => {
  const { canExportSysPost } = useAtomValueAccess();

  const { isLoading, mutate } = useMutation(() => SysPostPostExport(searchParams), {
    onSuccess: () => {
      message.success('导出成功');
    },
  });

  return (
    <Access accessible={canExportSysPost}>
      <Button type="primary" ghost icon={<DownloadOutlined />} loading={isLoading} onClick={() => mutate()}>
        导出当前列表
      </Button>
    </Access>
  );
};

export default ButtonExport;
