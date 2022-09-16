import { CCreateTime, CEmail, CEnableDisableStatus, CLeader, COrderNum, CPhone, genCDeptParentId } from '@/columns';
import { CDeptName } from '@/columns/dept';
import { EmptySimple } from '@/components';
import { queryDeptListKey, useDeptDetailsVisibleValue, useQueryDeptTreeData } from '@/pages/system/dept/model';
import { SysDeptGetInfo, SysDeptPostEdit } from '@/services/sys/SysDeptService';
import { useAccess } from '@@/plugin-access';
import type { ProDescriptionsProps } from '@ant-design/pro-components';
import { ProDescriptions } from '@ant-design/pro-components';
import { useQueryClient } from '@tanstack/react-query';
import { useRequest } from 'ahooks';
import { Divider, Form, message, Spin } from 'antd';
import type { FC, Key } from 'react';
import { useState } from 'react';

type EditableKeys = keyof Omit<API.SysDeptEditBo, 'deptId'>;

const column: ProDescriptionsProps['column'] = { xs: 1, sm: 1, md: 1, lg: 1, xl: 2 };

const DescDetails: FC = () => {
  const [editableKeys, setEditableKeys] = useState<Key[]>([]);

  const access = useAccess();

  const [form] = Form.useForm();

  const queryClient = useQueryClient();

  const { deptId, visible } = useDeptDetailsVisibleValue();

  const { data: deptTreeData } = useQueryDeptTreeData();

  const CDeptParentId = genCDeptParentId(deptTreeData);

  const { data, loading, refreshAsync } = useRequest(
    async () => {
      const { ancestors, ...rest } = await SysDeptGetInfo({ deptId });

      const ancestorsArr = ancestors?.split(',') ?? [];

      return {
        ...rest,
        ancestors: Number(ancestorsArr[ancestorsArr.length - 1]),
      };
    },
    {
      ready: visible && deptId > 0,
      refreshDeps: [deptId],
      onSuccess: () => {
        setEditableKeys([]);
      },
    },
  );

  const editable: ProDescriptionsProps['editable'] = access?.canEditSysDept
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
          await SysDeptPostEdit({
            deptId,
            deptName: data!.deptName,
            orderNum: data!.orderNum,
            parentId: data!.parentId!,
            [key as EditableKeys]: record[key as EditableKeys],
          });

          await Promise.all([queryClient.invalidateQueries(queryDeptListKey), refreshAsync()]);

          message.success('保存成功');
        },
      }
    : undefined;

  if (!visible) {
    return <EmptySimple description="点击选择左侧部门项查看详情" />;
  }

  return (
    <Spin spinning={loading}>
      <ProDescriptions
        column={column}
        editable={editable}
        dataSource={data}
        columns={[CEnableDisableStatus, COrderNum, CCreateTime]}
      />

      <Divider />

      <ProDescriptions column={column} editable={editable} dataSource={data} columns={[CDeptName, CDeptParentId]} />

      <Divider />

      <ProDescriptions column={column} editable={editable} dataSource={data} columns={[CLeader, CPhone, CEmail]} />
    </Spin>
  );
};

export default DescDetails;
