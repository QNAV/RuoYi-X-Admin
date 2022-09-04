import { CCreateTime, CEmail, CEnableDisableStatus, CLeader, COrderNum, CPhone, useCDeptParentId } from '@/columns';
import { CDeptName } from '@/columns/dept';
import { EmptySimple } from '@/components';
import { queryDeptListKey, useDeptDetailsVisibleValue } from '@/pages/system/dept/model';
import { SysDeptGetExcludeChild, SysDeptGetInfo, SysDeptPostEdit } from '@/services/sys/SysDeptService';
import { useAccess } from '@@/plugin-access';
import type { ProDescriptionsProps } from '@ant-design/pro-components';
import { ProDescriptions } from '@ant-design/pro-components';
import { useQueryClient } from '@tanstack/react-query';
import { useRequest } from 'ahooks';
import { Divider, message, Spin } from 'antd';
import type { FC } from 'react';

type EditableKeys = keyof Omit<API.SysDeptEditBo, 'deptId'>;

const DescDetails: FC = () => {
  const access = useAccess();

  const queryClient = useQueryClient();

  const { deptId, visible } = useDeptDetailsVisibleValue();

  const { data: deptTreeData } = useRequest(async () => {
    const data = await SysDeptGetExcludeChild({ deptId });
    return data;
  });
  const CDeptParentId = useCDeptParentId(deptTreeData);

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
    },
  );

  const editable: ProDescriptionsProps['editable'] = access?.canEditSysDept
    ? {
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
      <ProDescriptions editable={editable} dataSource={data} columns={[CEnableDisableStatus, COrderNum, CCreateTime]} />

      <Divider />

      <ProDescriptions editable={editable} dataSource={data} columns={[CDeptName, CDeptParentId]} />

      <Divider />

      <ProDescriptions editable={editable} dataSource={data} columns={[CLeader, CPhone, CEmail]} />
    </Spin>
  );
};

export default DescDetails;
