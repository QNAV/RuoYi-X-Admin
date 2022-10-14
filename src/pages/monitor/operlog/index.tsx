import { BasePageContainer, BaseProTable } from '@/components';
import ButtonCleanUp from '@/pages/monitor/operlog/components/ButtonCleanUp';
import ButtonExport from '@/pages/monitor/operlog/components/ButtonExport';
import ButtonRemove from '@/pages/monitor/operlog/components/ButtonRemove';
import { useMainTableActionRef, useTableColumns } from '@/pages/monitor/operlog/model';
import { SysOperLogPostList } from '@/services/sys/SysOperlogService';
import { convertParams } from '@/utils';
import type { ProTableProps } from '@ant-design/pro-components';
import { Space } from 'antd';
import type { FC } from 'react';
import { useState } from 'react';

const tableAlertRender: ProTableProps<any, any>['tableAlertRender'] = ({ selectedRows }) => {
  return (
    <Space>
      <span>已选择 {selectedRows.length} 项</span>

      <ButtonRemove
        isBatch
        disabled={selectedRows.length === 0}
        title={selectedRows.map((i) => i.operId).join(',')}
        operId={selectedRows.map((i) => i.title).join(',') as unknown as number}
      />
    </Space>
  );
};

const PageOperlog: FC = () => {
  const tableColumns = useTableColumns();

  const actionRef = useMainTableActionRef();

  const [searchParams, setSearchParams] = useState<API.SysOperLogPageQueryBo>({});

  return (
    <BasePageContainer>
      <BaseProTable
        rowKey="operId"
        actionRef={actionRef}
        columns={tableColumns}
        request={async (...p) => {
          const params = convertParams(...p);
          setSearchParams(params as API.SysOperLogPageQueryBo);
          return await SysOperLogPostList(params);
        }}
        toolbar={{
          actions: [
            <ButtonCleanUp key="ButtonCleanUp" />,
            <ButtonExport key="ButtonExport" searchParams={searchParams} />,
          ],
        }}
        rowSelection={{
          alwaysShowAlert: true,
        }}
        tableAlertRender={tableAlertRender}
      />
    </BasePageContainer>
  );
};

export default PageOperlog;
