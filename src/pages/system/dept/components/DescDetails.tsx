import { CEmail, CEnableDisableStatus, CLeader, COrderNum, CPhone } from '@/columns';
import { CDeptName } from '@/columns/dept';
import { EmptySimple } from '@/components';
import { queryDeptListKey, useQueryDeptList, useSelectedDeptIdValue } from '@/pages/system/dept/model';
import { SysDeptGetInfo, SysDeptPostEdit } from '@/services/sys/SysDeptService';
import { useAccess } from '@@/plugin-access';
import type { ProDescriptionsProps } from '@ant-design/pro-components';
import { ProDescriptions } from '@ant-design/pro-components';
import { useQueryClient } from '@tanstack/react-query';
import { useRequest } from 'ahooks';
import { Divider, message, Spin } from 'antd';
import type { FC } from 'react';

type EditableKeys = keyof Omit<API.SysDeptEditBo, 'deptId'>;

const findParentIds = (list: API.SysDeptVo[], deptId: number): string => {
  const map = new Map<number, any>(list.map((item) => [item.deptId, item]));

  const parentIds: number[] = [];

  const loop = (currId: number) => {
    const parentId = map.get(currId)?.parentId;

    if (parentId) {
      parentIds.push(parentId);
      loop(parentId);
    }
  };

  loop(deptId);

  return [0, ...parentIds.reverse()].join(',');
};

const DescDetails: FC = () => {
  const access = useAccess();

  const queryClient = useQueryClient();

  const { data: deptList } = useQueryDeptList();
  const deptOptions = deptList?.treeData ?? [];

  const selectedDeptIdValue = useSelectedDeptIdValue();

  const { data, loading, refreshAsync } = useRequest(
    async () => {
      const { ancestors, ...rest } = await SysDeptGetInfo({ deptId: selectedDeptIdValue });

      const ancestorsArr = ancestors?.split(',') ?? [];

      return {
        ...rest,
        ancestors: Number(ancestorsArr[ancestorsArr.length - 1]),
      };
    },
    {
      ready: selectedDeptIdValue > 0,
      refreshDeps: [selectedDeptIdValue],
    },
  );

  const editable: ProDescriptionsProps['editable'] = access?.canEditSysDept
    ? {
        onSave: async (key, record) => {
          let value = record[key as EditableKeys];

          if (key === 'ancestors') {
            value = findParentIds(deptList?.list ?? [], value);
          }

          await SysDeptPostEdit({
            deptId: data!.deptId,
            deptName: data!.deptName,
            orderNum: data!.orderNum,
            // @ts-ignore
            parentId: data!.parentId,
            [key as EditableKeys]: value,
          });

          await Promise.all([queryClient.invalidateQueries(queryDeptListKey), refreshAsync()]);

          message.success('保存成功');
        },
      }
    : undefined;

  if (selectedDeptIdValue === 0) {
    return <EmptySimple description="点击选择左侧部门项查看详情" />;
  }

  return (
    <Spin spinning={loading}>
      <ProDescriptions editable={editable} dataSource={data} columns={[CEnableDisableStatus, COrderNum]} />

      <Divider />

      <ProDescriptions
        editable={editable}
        dataSource={data}
        columns={[
          CDeptName,
          {
            title: '上级部门',
            dataIndex: 'ancestors',
            key: 'ancestors',
            valueType: 'treeSelect',
            fieldProps: {
              span: 2,
              options: deptOptions,
              dropdownMatchSelectWidth: 300,
              fieldNames: {
                label: 'deptName',
                value: 'deptId',
                children: 'children',
              },
            },
          },
        ]}
      />

      <Divider />

      <ProDescriptions editable={editable} dataSource={data} columns={[CLeader, CPhone, CEmail]} />
    </Spin>
  );
};

export default DescDetails;
