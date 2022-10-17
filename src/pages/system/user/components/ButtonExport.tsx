import { Access } from '@/components';
import { useAtomValueAccess } from '@/models';
import { SysUserPostExport } from '@/services/sys/SysUserService';
import { DownloadOutlined } from '@ant-design/icons';
import { useMutation } from '@tanstack/react-query';
import { Button, message } from 'antd';
import type { FC } from 'react';

const ButtonExport: FC<{ searchParams: API.SysUserQueryBo }> = ({ searchParams }) => {
  const { canExportSysUser } = useAtomValueAccess();

  const { isLoading, mutate } = useMutation(() => SysUserPostExport(searchParams), {
    onSuccess: () => {
      message.success('导出成功');
    },
  });

  return (
    <Access accessible={canExportSysUser}>
      <Button icon={<DownloadOutlined />} loading={isLoading} onClick={() => mutate()}>
        导出
      </Button>
    </Access>
  );
};

export default ButtonExport;
