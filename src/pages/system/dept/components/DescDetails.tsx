import {
  CCreateTime,
  CDeptName,
  CEmail,
  CEnableDisableStatus,
  CLeader,
  COrderNum,
  CPhone,
  genCDeptParentId,
} from '@/columns';
import { EmptySimple } from '@/components';
import {
  useQueryDeptOptions,
  useReFetchDeptList,
  useReFetchDeptOptions,
  useValueDeptDetails,
} from '@/pages/system/dept/model';
import { SysDeptGetInfo, SysDeptPostEdit } from '@/services/sys/SysDeptService';

import { useAtomValueAccess } from '@/models';
import type { ProDescriptionsProps } from '@ant-design/pro-components';
import { ProDescriptions } from '@ant-design/pro-components';
import { useRequest } from 'ahooks';
import { Divider, Form, message, Spin } from 'antd';
import type { FC, Key } from 'react';
import { useState } from 'react';

type EditableKeys = keyof Omit<API.SysDeptEditBo, 'deptId'>;

const column: ProDescriptionsProps['column'] = { xs: 1, sm: 1, md: 1, lg: 1, xl: 2 };

const DescDetails: FC = () => {
  const [editableKeys, setEditableKeys] = useState<Key[]>([]);

  const access = useAtomValueAccess();

  const [form] = Form.useForm();

  const reFetchDeptList = useReFetchDeptList();
  const reFetchDeptOptions = useReFetchDeptOptions();

  const { deptId, open } = useValueDeptDetails();

  const { data: treeData } = useQueryDeptOptions();

  const CDeptParentId = genCDeptParentId(treeData);

  const { data, loading, refresh } = useRequest(
    async () => {
      const { ancestors, ...rest } = await SysDeptGetInfo({ deptId });

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
            parentId: 0,
            [key as EditableKeys]: record[key as EditableKeys],
          });
          message.success('保存成功');

          refresh();
          reFetchDeptList();
          reFetchDeptOptions();
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
