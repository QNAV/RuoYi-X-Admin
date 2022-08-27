import { useRoleDetailsVisibleValue } from '@/pages/system/role/model';
import { SysRoleGetInfo } from '@/services/sys/SysRoleService';
import { ProDescriptions } from '@ant-design/pro-components';
import { useRequest } from 'ahooks';
import { Divider, Spin } from 'antd';
import type { FC } from 'react';

const DetailsRole: FC = () => {
  const { roleId, visible } = useRoleDetailsVisibleValue();

  const { data, loading } = useRequest(() => SysRoleGetInfo({ roleId }), {
    ready: visible,
    refreshDeps: [roleId],
  });

  return (
    <Spin spinning={loading}>
      {data?.roleId}

      <ProDescriptions column={2} columns={[]} dataSource={data} />

      <Divider />
    </Spin>
  );
};

export default DetailsRole;
