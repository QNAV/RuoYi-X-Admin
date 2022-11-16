import { Access } from '@/components';
import { useAtomValueAccess } from '@/models';
import type { SysDictDataQueryBo } from '@/services/system/data-contracts';
import { sysDictDataPostExport } from '@/services/system/System';
import { DownloadOutlined } from '@ant-design/icons';
import { useMutation } from '@tanstack/react-query';
import { Button, message } from 'antd';
import type { FC } from 'react';

const ButtonExport: FC<{ searchParams: SysDictDataQueryBo }> = ({ searchParams }) => {
  const { canExportSysPost } = useAtomValueAccess();

  const { isLoading, mutate } = useMutation(() => sysDictDataPostExport(searchParams), {
    onSuccess: () => {
      message.success('导出成功');
    },
  });

  return (
    <Access accessible={canExportSysPost}>
      <Button ghost type="primary" icon={<DownloadOutlined />} loading={isLoading} onClick={() => mutate()}>
        导出当前列表
      </Button>
    </Access>
  );
};

export default ButtonExport;
