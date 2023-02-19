import { useCheckAccess } from '@/hooks';
import { useAtomValueRoleListActions, useEditRoleDetails, useQueryRoleDetails } from '@/pages/system/role/model';
import { baseDescriptionsColumns, useDescriptionsColumns } from '@/pages/system/role/model/columns';
import type { SysRoleVo } from '@/services/system/data-contracts';
import type { RowEditableConfig } from '@ant-design/pro-components';
import { ProDescriptions } from '@ant-design/pro-components';
import { Divider, Form, Spin } from 'antd';
import type { FC, Key } from 'react';
import { useState } from 'react';

const DescRole: FC = () => {
  const [editableKeys, setEditableKeys] = useState<Key[]>([]);

  const [form] = Form.useForm();

  const columns = useDescriptionsColumns();

  const actions = useAtomValueRoleListActions();

  const { data, isFetching, refetch } = useQueryRoleDetails(() => {
    setEditableKeys([]);
    form.resetFields();
  });

  const { mutateAsync } = useEditRoleDetails(() => {
    refetch();
    actions?.reload();
  });

  const checkAccess = useCheckAccess();

  const editable: RowEditableConfig<SysRoleVo> | undefined = checkAccess('system:role:edit')
    ? {
        form,
        editableKeys,
        onChange: (keys, editableRows) => {
          setEditableKeys(keys);

          if (keys.length > 0) {
            const key = keys[0] as keyof SysRoleVo;

            form.setFieldsValue({
              [key]: (editableRows as SysRoleVo)[key],
            });
          }
        },
        onSave: async (key: any, record: any) => {
          await mutateAsync({
            [key]: record[key],
          });
        },
      }
    : undefined;

  return (
    <Spin spinning={isFetching}>
      <ProDescriptions column={2} columns={baseDescriptionsColumns} dataSource={data} />

      <Divider />

      <ProDescriptions<SysRoleVo> column={2} columns={columns} dataSource={data} editable={editable} />
    </Spin>
  );
};

export default DescRole;
