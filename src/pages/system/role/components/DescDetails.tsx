import { DCreateTime, DRemark, DRoleId, DRoleKey, DRoleName, DRoleSort, useStatusNormalDisable } from '@/columns';
import { EmptySimple } from '@/components';
import { useAtomValueAccess } from '@/models';
import { useAtomValueRoleDetails, useEditRoleDetails, useQueryRoleDetails } from '@/pages/system/role/model';
import type { ProDescriptionsProps } from '@ant-design/pro-components';
import { ProDescriptions } from '@ant-design/pro-components';
import { Divider, Form, Spin } from 'antd';
import type { FC, Key } from 'react';
import { useState } from 'react';

const DescDetails: FC = () => {
  const [editableKeys, setEditableKeys] = useState<Key[]>([]);

  const [form] = Form.useForm();

  const access = useAtomValueAccess();

  const { open } = useAtomValueRoleDetails();

  const [, , DStatusNormalDisable] = useStatusNormalDisable();

  const { data, loading } = useQueryRoleDetails();

  const { mutateAsync } = useEditRoleDetails();

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

  if (!open) return <EmptySimple description="点击选择左侧角色查看详情" />;

  return (
    <Spin spinning={loading}>
      <ProDescriptions column={2} columns={[DRoleId, DCreateTime]} dataSource={data} />

      <Divider />

      <ProDescriptions
        column={2}
        columns={[DStatusNormalDisable, DRoleSort, DRoleName, DRemark, DRoleKey]}
        dataSource={data}
        editable={editable}
      />
    </Spin>
  );
};

export default DescDetails;
