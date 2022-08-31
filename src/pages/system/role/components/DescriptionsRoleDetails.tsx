import { CCreateTime, CEnableDisableStatus, CRemark, CRoleId, CRoleKey, CRoleName, CRoleSort } from '@/columns';
import { EmptySimple } from '@/components';
import MenuTree from '@/pages/system/role/components/MenuTree';
import { useRoleDetailsVisibleValue, useRoleListActions } from '@/pages/system/role/model';
import { SysRoleGetInfo, SysRolePostEdit } from '@/services/sys/SysRoleService';
import { useAccess } from '@@/plugin-access';
import type { ProDescriptionsProps } from '@ant-design/pro-components';
import { ProDescriptions } from '@ant-design/pro-components';
import { useMutation } from '@tanstack/react-query';
import { useRequest } from 'ahooks';
import { Divider, Form, message, Spin } from 'antd';
import type { FC, Key } from 'react';
import { useEffect, useState } from 'react';

const DescriptionsRoleDetails: FC = () => {
  const [editableKeys, setEditableKeys] = useState<Key[]>([]);

  const [form] = Form.useForm();

  const access = useAccess();

  const roleListActions = useRoleListActions();

  const { roleId, visible } = useRoleDetailsVisibleValue();

  const { data, loading, refresh } = useRequest(() => SysRoleGetInfo({ roleId }), {
    ready: visible && roleId > 0,
    refreshDeps: [roleId],
  });

  const { mutateAsync } = useMutation(
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

  const editable: ProDescriptionsProps<API.SysRoleVo>['editable'] =
    access.canEditSysRole && data
      ? {
          form,
          editableKeys,
          onChange: (values, editableRows) => {
            setEditableKeys(values);

            if (values.length === 1 && !Array.isArray(editableRows)) {
              form.setFieldsValue({
                [values[0]]: editableRows[values[0] as keyof API.SysRoleVo],
              });
            }
          },
          onSave: async (key, record) => {
            await mutateAsync({
              [key as keyof API.SysRole]: record[key as keyof API.SysRole],
            });
          },
        }
      : undefined;

  // 切换角色后初始化编辑状态
  useEffect(() => {
    if (roleId > 0) {
      setEditableKeys([]);
    }
  }, [roleId]);

  if (!visible) return <EmptySimple description="点击选择左侧角色查看详情" />;

  return (
    <Spin spinning={loading}>
      <ProDescriptions column={2} columns={[CRoleId, CCreateTime]} dataSource={data} />

      <Divider />

      <ProDescriptions
        column={2}
        columns={[CEnableDisableStatus, CRoleSort, CRoleName, CRemark, CRoleKey]}
        dataSource={data}
        editable={editable}
      />

      <Divider />

      <MenuTree
        selectedMenuIds={data?.menuIds ?? []}
        menuCheckStrictly={!!data?.menuCheckStrictly}
        handleEdit={(e) => mutateAsync(e)}
      />
    </Spin>
  );
};

export default DescriptionsRoleDetails;
