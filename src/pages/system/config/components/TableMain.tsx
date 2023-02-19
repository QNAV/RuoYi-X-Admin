import { BaseProTable } from '@/components';
import ButtonAdd from '@/pages/system/config/components/ButtonAdd';
import ButtonExport from '@/pages/system/config/components/ButtonExport';
import ButtonRefresh from '@/pages/system/config/components/ButtonRefresh';
import ButtonRemove from '@/pages/system/config/components/ButtonRemove';
import { useActionRefMainTable } from '@/pages/system/config/model';
import { useTableColumns } from '@/pages/system/config/model/columns';
import type { SysConfigPageQueryBo, SysConfigVo } from '@/services/system/data-contracts';
import { sysConfigPostList } from '@/services/system/System';
import { convertParams } from '@/utils';
import type { ProTableProps } from '@ant-design/pro-components';
import { isArray } from 'lodash-es';
import type { FC } from 'react';
import { useState } from 'react';

const tableAlertOptionRender: ProTableProps<SysConfigVo, SysConfigPageQueryBo>['tableAlertOptionRender'] = ({
  selectedRowKeys,
}) => {
  return <ButtonRemove disabled={selectedRowKeys.length === 0} batch configIds={selectedRowKeys as number[]} />;
};

const TableMain: FC = () => {
  const actionRef = useActionRefMainTable();

  const columns = useTableColumns();

  const [searchParams, setSearchParams] = useState<SysConfigPageQueryBo>({});

  return (
    <BaseProTable<
      SysConfigVo,
      SysConfigPageQueryBo & {
        createTimeRange?: [string, string];
      }
    >
      rowKey="configId"
      actionRef={actionRef}
      columns={columns}
      tableAlertOptionRender={tableAlertOptionRender}
      request={async (...p) => {
        const { createTimeRange, ...params } = convertParams(...p);
        if (isArray(createTimeRange)) {
          params.beginTime = createTimeRange[0];
          params.endTime = createTimeRange[1];
        }
        setSearchParams(params);
        return await sysConfigPostList(params);
      }}
      toolbar={{
        actions: [
          <ButtonRefresh key="ButtonRefresh" />,
          <ButtonExport key="ButtonExport" searchParams={searchParams} />,
          <ButtonAdd key="ButtonAdd" />,
        ],
      }}
    />
  );
};

export default TableMain;
