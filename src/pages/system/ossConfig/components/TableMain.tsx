import { BaseProTable } from '@/components';
import ButtonAdd from '@/pages/system/ossConfig/components/ButtonAdd';
import ButtonRemove from '@/pages/system/ossConfig/components/ButtonRemove';
import { useActionRefMainTable, useTableColumns } from '@/pages/system/ossConfig/model';
import type { SysOssConfigPageQueryBo, SysOssConfigVo } from '@/services/system/data-contracts';
import { sysOssConfigPostList } from '@/services/system/System';
import { convertParams } from '@/utils';
import type { ProTableProps } from '@ant-design/pro-components';
import type { FC } from 'react';

const tableAlertOptionRender: ProTableProps<SysOssConfigVo, SysOssConfigPageQueryBo>['tableAlertOptionRender'] = ({
  selectedRowKeys,
}) => {
  return <ButtonRemove disabled={selectedRowKeys.length === 0} batch ossConfigIds={selectedRowKeys as number[]} />;
};

const TableMain: FC = () => {
  const actionRefMainTable = useActionRefMainTable();

  const columns = useTableColumns();

  return (
    <BaseProTable
      rowKey="ossConfigId"
      actionRef={actionRefMainTable}
      columns={columns}
      request={(...p) => sysOssConfigPostList(convertParams(...p))}
      toolbar={{
        actions: [<ButtonAdd key="ButtonAdd" />],
      }}
      tableAlertOptionRender={tableAlertOptionRender}
    />
  );
};

export default TableMain;
