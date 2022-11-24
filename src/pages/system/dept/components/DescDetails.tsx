import { EmptySimple } from '@/components';
import { useQueryDict } from '@/models';
import {
  useAtomValueDeptDetails,
  useQueryDeptOptions,
  useReFetchDeptList,
  useReFetchDeptOptions,
} from '@/pages/system/dept/model';
import type { SysDeptEditBo, SysRoleVo } from '@/services/system/data-contracts';
import { sysDeptGetInfo, sysDeptPostEdit } from '@/services/system/System';
import type { ProDescriptionsProps } from '@ant-design/pro-components';
import { ProDescriptions } from '@ant-design/pro-components';
import { useRequest } from 'ahooks';
import { Divider, Form, message, Spin } from 'antd';
import type { FC, Key } from 'react';
import { useState } from 'react';

type EditableKeys = keyof Omit<SysDeptEditBo, 'deptId'>;

const column: ProDescriptionsProps['column'] = { xs: 1, sm: 1, md: 1, lg: 1, xl: 2 };

const DescDetails: FC = () => {
  const [editableKeys, setEditableKeys] = useState<Key[]>([]);

  const [form] = Form.useForm();

  const reFetchDeptList = useReFetchDeptList();
  const reFetchDeptOptions = useReFetchDeptOptions();

  const { deptId, open } = useAtomValueDeptDetails();

  const { data: treeData } = useQueryDeptOptions();

  const { data: dictSysNormalDisable } = useQueryDict('sys_normal_disable');

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

  const editable: ProDescriptionsProps['editable'] = {
    form,
    editableKeys,
    onChange: (values, editableRows) => {
      setEditableKeys(values);

      if (values.length === 1 && !Array.isArray(editableRows)) {
        form.setFieldsValue({
          [values[0]]: editableRows[values[0] as keyof SysRoleVo],
        });
      }
    },
    onSave: async (key, record) => {
      await sysDeptPostEdit({
        deptId,
        deptName: data!.deptName,
        orderNum: data!.orderNum,
        parentId: 0,
        [key as EditableKeys]: record[key as EditableKeys],
      });
      message.success('保存成功');

      refresh();
      reFetchDeptList();
      reFetchDeptOptions();
    },
  };

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
            valueEnum: dictSysNormalDisable?.mapData ?? {},
          },
          { title: '排序', dataIndex: 'orderNum', key: 'orderNum', valueType: 'digit' },
          {
            title: '创建时间',
            dataIndex: 'createTime',
            key: 'createTime',
            valueType: 'dateTime',
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

export default DescDetails;
