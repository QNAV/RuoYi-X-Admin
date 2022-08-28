import { CCreateTime, CEnableDisableStatus, CRemark, CRoleId, CRoleKey, CRoleName, CRoleSort } from '@/columns';
import { EmptySimple } from '@/components';
import { useRoleDetailsVisibleValue, useRoleListActions } from '@/pages/system/role/model';
import { SysRoleGetInfo, SysRolePostEdit } from '@/services/sys/SysRoleService';
import { useAccess } from '@@/plugin-access';
import type { ProDescriptionsProps } from '@ant-design/pro-components';
import { ProDescriptions } from '@ant-design/pro-components';
import { useMutation } from '@tanstack/react-query';
import { useRequest } from 'ahooks';
import { Divider, message, Spin } from 'antd';
import type { FC } from 'react';

const DetailsRole: FC = () => {
  const access = useAccess();

  const roleListActions = useRoleListActions();

  const { roleId, visible } = useRoleDetailsVisibleValue();

  const { data, loading, refresh } = useRequest(() => SysRoleGetInfo({ roleId }), {
    ready: visible,
    refreshDeps: [roleId],
  });

  const { mutate } = useMutation(
    async (params: Partial<API.SysRole>) => {
      await SysRolePostEdit({
        roleId,
        menuIds: data?.menuIds ?? [],
        roleKey: data!.roleKey,
        roleName: data!.roleName,
        roleSort: data!.roleSort,
        status: data!.status,
        ...params,
      });
    },
    {
      onSuccess: () => {
        refresh();
        roleListActions?.reload();
        message.success('保存成功');
      },
    },
  );

  const editable: ProDescriptionsProps['editable'] =
    access.canEditSysRole && data
      ? {
          onSave: async (key, record) => {
            mutate({
              [key as keyof API.SysRole]: record[key as keyof API.SysRole],
            });
          },
        }
      : undefined;

  if (!visible) return <EmptySimple description="点击选择左侧角色查看详情" />;

  return (
    <Spin spinning={loading}>
      <ProDescriptions
        column={2}
        columns={[CEnableDisableStatus, CCreateTime, CRemark, CRoleSort, CRoleName, CRoleId, CRoleKey]}
        dataSource={data}
        editable={editable}
      />

      <Divider />
    </Spin>
  );
};

export default DetailsRole;
