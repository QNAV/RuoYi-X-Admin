import { EmptySimple } from '@/components';
import { useCheckAccess } from '@/hooks';
import { useQueryDictSysNormalDisable } from '@/models';
import {
  useAtomValueDeptDetails,
  useQueryDeptOptions,
  useReFetchDeptList,
  useReFetchDeptOptions,
} from '@/pages/system/dept/model';
import type { SysDeptEditBo } from '@/services/system/data-contracts';
import { sysDeptGetInfo, sysDeptPostEdit } from '@/services/system/System';
import type { ProDescriptionsProps } from '@ant-design/pro-components';
import { ProDescriptions } from '@ant-design/pro-components';
import { useMutation } from '@tanstack/react-query';
import { useRequest } from 'ahooks';
import { App, Divider, Form, Spin } from 'antd';
import type { FC } from 'react';
import { useState } from 'react';

type EditableKeys = keyof Omit<SysDeptEditBo, 'deptId'>;

const column: ProDescriptionsProps['column'] = { xs: 1, sm: 1, md: 1, lg: 1, xl: 2 };

const DescDept: FC = () => {
  const reFetchDeptList = useReFetchDeptList();
  const reFetchDeptOptions = useReFetchDeptOptions();

  const { message } = App.useApp();

  const { deptId, open } = useAtomValueDeptDetails();

  const { data: treeData } = useQueryDeptOptions();

  const { valueEnumSysNormalDisable } = useQueryDictSysNormalDisable();

  const { data, loading, refresh } = useRequest(
    async () => {
      const { ancestors, ...rest } = await sysDeptGetInfo({ deptId });

      const ancestorsArr = ancestors?.split(',') ?? [];

      return {
        ...rest,
        ancestors: Number(ancestorsArr[ancestorsArr.length - 1]),
      };
    },
    {
      ready: open && deptId > 0,
      refreshDeps: [deptId],
      onSuccess: () => {
        setEditableKeys([]);
      },
    },
  );

  const { mutateAsync } = useMutation(sysDeptPostEdit, {
    onSuccess: async () => {
      refresh();

      await Promise.all([reFetchDeptList(), reFetchDeptOptions()]);

      message.success('保存成功');
    },
  });

  const checkAccess = useCheckAccess();

  const [form] = Form.useForm();
  const [editableKeys, setEditableKeys] = useState<string[]>([]);
  const editable: ProDescriptionsProps['editable'] = checkAccess('system:dept:edit')
    ? {
        form,
        editableKeys,
        onChange: (keys, editableRows) => {
          setEditableKeys(keys as string[]);

          if (keys.length > 0) {
            const [key] = keys;
            form.setFieldsValue({
              [key]: editableRows[key as keyof typeof editableRows],
            });
          }
        },
        onSave: async (key, record) => {
          await mutateAsync({
            deptId,
            deptName: data!.deptName,
            orderNum: data!.orderNum,
            parentId: data!.parentId!,
            [key as EditableKeys]: record[key as EditableKeys],
          });
        },
      }
    : undefined;

  if (!open) {
    return <EmptySimple description="点击选择左侧部门项查看详情" />;
  }

  return (
    <Spin spinning={loading}>
      <ProDescriptions
        column={column}
        editable={editable}
        dataSource={data}
        columns={[
          {
            title: '状态',
            dataIndex: 'status',
            key: 'status',
            valueType: 'select',
            valueEnum: valueEnumSysNormalDisable,
          },
          { title: '排序', dataIndex: 'orderNum', key: 'orderNum', valueType: 'digit' },
          {
            title: '创建时间',
            dataIndex: 'createTime',
            key: 'createTime',
            valueType: 'dateTime',
            editable: false,
          },
        ]}
      />

      <Divider />

      <ProDescriptions
        column={column}
        editable={editable}
        dataSource={data}
        columns={[
          { title: '部门名称', dataIndex: 'deptName', key: 'deptName', valueType: 'text' },
          {
            title: '上级部门',
            dataIndex: 'parentId',
            key: 'parentId',
            valueType: 'treeSelect',
            fieldProps: {
              treeData,
              dropdownMatchSelectWidth: 250,
              fieldNames: {
                label: 'deptName',
                value: 'deptId',
              },
            },
          },
        ]}
      />

      <Divider />

      <ProDescriptions
        column={column}
        editable={editable}
        dataSource={data}
        columns={[
          { title: '负责人', dataIndex: 'leader', key: 'leader', valueType: 'text' },
          { title: '联系电话', dataIndex: 'phone', key: 'phone', valueType: 'text' },
          { title: '邮箱', dataIndex: 'email', key: 'email', valueType: 'text' },
        ]}
      />
    </Spin>
  );
};

export default DescDept;
