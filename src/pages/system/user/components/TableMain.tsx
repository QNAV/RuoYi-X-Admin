import { BaseProTable, BaseTableAlert } from '@/components';
import ButtonAdd from '@/pages/system/user/components/ButtonAdd';
import ButtonExport from '@/pages/system/user/components/ButtonExport';
import ButtonImport from '@/pages/system/user/components/ButtonImport';
import ButtonRemove from '@/pages/system/user/components/ButtonRemove';
import TreeDept from '@/pages/system/user/components/TreeDept';
import { useActionRefMainTable, useAtomValueSelectedDeptId, useTableColumns } from '@/pages/system/user/model';
import { SysUserPostList } from '@/services/sys/SysUserService';
import { convertParams } from '@/utils';
import type { ProTableProps } from '@ant-design/pro-components';
import type { FC } from 'react';
import { useState } from 'react';

const tableAlertRender: ProTableProps<API.SysUserVo, API.SysUserPageQueryBo>['tableAlertRender'] = ({
  selectedRows,
}) => {
  return (
    <BaseTableAlert selectedNum={selectedRows.length}>
      <ButtonRemove
        disabled={selectedRows.length === 0}
        isBatch
        userId={selectedRows.map((i) => i.userId).join(',') as unknown as number}
        userName={selectedRows.map((i) => i.userName).join(',')}
      />
    </BaseTableAlert>
  );
};

const tableRender: ProTableProps<API.SysUserVo, API.SysUserPageQueryBo>['tableRender'] = (props, defaultDom) => {
  return (
    <div className="flex gap-4">
      <div className="bg-white p-4">
        <TreeDept />
      </div>

      <div className="overflow-auto w-full">{defaultDom}</div>
    </div>
  );
};

const TableMain: FC = () => {
  const actionRef = useActionRefMainTable();

  const [searchParams, setSearchParams] = useState<API.SysUserQueryBo>({});

  const selectedDeptId = useAtomValueSelectedDeptId();
  const params = selectedDeptId > 0 ? { deptId: selectedDeptId } : {};

  const columns = useTableColumns();

  return (
    <BaseProTable<API.SysUserVo, API.SysUserPageQueryBo>
      rowKey="userId"
      actionRef={actionRef}
      columns={columns}
      params={params}
      tableAlertRender={tableAlertRender}
      request={async (...p) => {
        const params = convertParams(...p);
        setSearchParams(params);
        return await SysUserPostList(params);
      }}
      toolbar={{
        actions: [
          <ButtonExport key="ButtonExport" searchParams={searchParams} />,
          <ButtonImport key="ButtonImport" />,
          <ButtonAdd key="ButtonAdd" />,
        ],
      }}
      tableRender={tableRender}
    />
  );
};

export default TableMain;
