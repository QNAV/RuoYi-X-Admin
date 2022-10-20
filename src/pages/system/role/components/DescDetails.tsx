import { DCreateTime, DRemark, DRoleId, DRoleKey, DRoleName, DRoleSort, useStatusNormalDisable } from '@/columns';
import { useAtomValueAccess } from '@/models';
import { useAtomValueRoleListActions, useEditRoleDetails, useQueryRoleDetails } from '@/pages/system/role/model';
import type { RowEditableConfig } from '@ant-design/pro-components';
import { ProDescriptions } from '@ant-design/pro-components';
import { Divider, Form, Spin } from 'antd';
import type { FC, Key } from 'react';
import { useState } from 'react';

const DescDetails: FC = () => {
  const [editableKeys, setEditableKeys] = useState<Key[]>([]);

  const [form] = Form.useForm();

  const access = useAtomValueAccess();

  const [, , DStatusNormalDisable] = useStatusNormalDisable();

  const actions = useAtomValueRoleListActions();

  const { data, isFetching, refetch } = useQueryRoleDetails(() => {
    setEditableKeys([]);
    form.resetFields();
  });

  const { mutateAsync } = useEditRoleDetails(() => {
    refetch();
    actions?.reload();
  });

  const editable: RowEditableConfig<API.SysRoleVo> | undefined =
    access.canEditSysRole && data
      ? {
          form,
          editableKeys,
          onChange: (keys, editableRows) => {
            setEditableKeys(keys);

            const key = keys[0] as keyof API.SysRoleVo;

            form.setFieldsValue({
              [key]: (editableRows as API.SysRoleVo)[key],
            });
          },
          onSave: async (key, record) => {
            await mutateAsync({
              [key as keyof API.SysRole]: record[key as keyof API.SysRole],
            });
          },
        }
      : undefined;

  return (
    <Spin spinning={isFetching}>
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
