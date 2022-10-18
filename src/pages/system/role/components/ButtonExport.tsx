import { Access } from '@/components';
import { useAtomValueAccess } from '@/models';
import { useAtomValueSearchParams } from '@/pages/system/role/model';
import { SysRolePostExport } from '@/services/sys/SysRoleService';
import { DownloadOutlined } from '@ant-design/icons';
import { useMutation } from '@tanstack/react-query';
import { Button, message } from 'antd';
import type { FC } from 'react';

const ButtonExport: FC = () => {
  const { canExportSysRole } = useAtomValueAccess();

  const searchParams = useAtomValueSearchParams();

  const { isLoading, mutate } = useMutation(() => SysRolePostExport(searchParams), {
    onSuccess: () => {
      message.success('导出成功');
    },
  });

  return (
    <Access accessible={canExportSysRole}>
      <Button ghost type="primary" icon={<DownloadOutlined />} loading={isLoading} onClick={() => mutate()}>
        导出当前列表
      </Button>
    </Access>
  );
};

export default ButtonExport;
