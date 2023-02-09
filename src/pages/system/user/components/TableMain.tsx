import { BaseProTable } from '@/components';
import { useQueryDict } from '@/models';
import ButtonAdd from '@/pages/system/user/components/ButtonAdd';
import ButtonEdit from '@/pages/system/user/components/ButtonEdit';
import ButtonExport from '@/pages/system/user/components/ButtonExport';
import ButtonImport from '@/pages/system/user/components/ButtonImport';
import ButtonRemove from '@/pages/system/user/components/ButtonRemove';
import ButtonResetPwd from '@/pages/system/user/components/ButtonResetPwd';
import TreeDept from '@/pages/system/user/components/TreeDept';
import { useActionRefMainTable, useAtomValueSelectedDeptId } from '@/pages/system/user/model';
import type { SysUserPageQueryBo, SysUserQueryBo, SysUserVo } from '@/services/system/data-contracts';
import { sysUserPostList } from '@/services/system/System';
import { convertParams } from '@/utils';
import type { ProColumns, ProTableProps } from '@ant-design/pro-components';
import { ProCard } from '@ant-design/pro-components';
import type { FC } from 'react';
import { useState } from 'react';

const useColumns = (): ProColumns<SysUserVo>[] => {
  const { data } = useQueryDict('sys_normal_disable');

  return [
    {
      dataIndex: 'userId',
      key: 'userId',
      title: '用户编号',
      valueType: 'text',
      hideInSearch: true,
    },
    { dataIndex: 'userName', key: 'userName', title: '用户名称', valueType: 'text' },
    { dataIndex: 'nickName', key: 'nickName', title: '用户昵称', valueType: 'text', hideInSearch: true },
    {
      dataIndex: ['dept', 'deptName'],
      key: 'deptDeptName',
      title: '部门名称',
      valueType: 'text',
      hideInSearch: true,
    },
    { dataIndex: 'phoneNumber', key: 'phoneNumber', title: '手机号码', valueType: 'text', copyable: true },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      valueType: 'select',
      valueEnum: data?.valueEnum ?? {},
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      key: 'createTime',
      valueType: 'dateTime',
      hideInSearch: true,
      sorter: true,
    },
    {
      title: '操作',
      valueType: 'option',
      render: (dom, entity) => {
        if (entity.userId === 1) {
          return null;
        }

        return (
          <>
            <ButtonEdit userId={entity.userId} />

            <ButtonRemove userIds={[entity.userId]} />

            <ButtonResetPwd record={entity} />
          </>
        );
      },
      fixed: 'right',
      width: 300,
    },
    {
      title: '创建时间',
      dataIndex: 'createTimeRange',
      key: 'createTimeRange',
      valueType: 'dateTimeRange',
      hideInTable: true,
    },
  ];
};

const tableAlertOptionRender: ProTableProps<SysUserVo, SysUserPageQueryBo>['tableAlertOptionRender'] = ({
  selectedRows,
}) => {
  return <ButtonRemove disabled={selectedRows.length === 0} batch userIds={selectedRows.map((i) => i.userId)} />;
};

const tableRender: ProTableProps<SysUserVo, SysUserPageQueryBo>['tableRender'] = (props, defaultDom) => {
  return (
    <div className="flex gap-4">
      <ProCard className="w-80">
        <TreeDept />
      </ProCard>

      <div className="overflow-auto w-full">{defaultDom}</div>
    </div>
  );
};

const TableMain: FC = () => {
  const actionRef = useActionRefMainTable();

  const [searchParams, setSearchParams] = useState<SysUserQueryBo>({});

  const columns = useColumns();

  const selectedDeptId = useAtomValueSelectedDeptId();
  const params = selectedDeptId > 0 ? { deptId: selectedDeptId } : {};

  return (
    <BaseProTable<SysUserVo, SysUserPageQueryBo>
      rowKey="userId"
      actionRef={actionRef}
      columns={columns}
      params={params}
      request={async (...p) => {
        const params = convertParams(...p);
        setSearchParams(params);
        return await sysUserPostList(params);
      }}
      toolbar={{
        actions: [
          <ButtonExport key="ButtonExport" searchParams={searchParams} />,
          <ButtonImport key="ButtonImport" />,
          <ButtonAdd key="ButtonAdd" />,
        ],
      }}
      tableRender={tableRender}
      tableAlertOptionRender={tableAlertOptionRender}
    />
  );
};

export default TableMain;
