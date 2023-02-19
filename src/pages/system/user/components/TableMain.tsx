import { BaseProTable } from '@/components';
import ButtonAdd from '@/pages/system/user/components/ButtonAdd';
import ButtonExport from '@/pages/system/user/components/ButtonExport';
import ButtonImport from '@/pages/system/user/components/ButtonImport';
import ButtonRemove from '@/pages/system/user/components/ButtonRemove';
import TreeDept from '@/pages/system/user/components/TreeDept';
import { useActionRefMainTable, useAtomValueSelectedDeptId, useTableColumns } from '@/pages/system/user/model';
import type { SysUserPageQueryBo, SysUserQueryBo, SysUserVo } from '@/services/system/data-contracts';
import { sysUserPostList } from '@/services/system/System';
import { convertParams } from '@/utils';
import type { ProTableProps } from '@ant-design/pro-components';
import { ProCard } from '@ant-design/pro-components';
import type { FC } from 'react';
import { useState } from 'react';

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

  const columns = useTableColumns();

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
