import { BasePageContainer, BaseProTable } from '@/components';
import ButtonCleanUp from '@/pages/monitor/logininfor/components/ButtonCleanUp';
import ButtonExport from '@/pages/monitor/logininfor/components/ButtonExport';
import ButtonRemove from '@/pages/monitor/logininfor/components/ButtonRemove';
import { useMainTableActionRef, useTableColumns } from '@/pages/monitor/logininfor/model';
import { SysLogininforPostList } from '@/services/sys/SysLoginService';
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
        infoId={selectedRows.map((i) => i.infoId).join(',') as unknown as number}
      />
    </Space>
  );
};

const PageLoginInfo: FC = () => {
  const tableColumns = useTableColumns();

  const actionRef = useMainTableActionRef();

  const [searchParams, setSearchParams] = useState<API.SysLogininforPageQueryBo>({});

  return (
    <BasePageContainer>
      <BaseProTable
        rowKey="infoId"
        actionRef={actionRef}
        columns={tableColumns}
        request={async (...p) => {
          const params = convertParams(...p);
          setSearchParams(params as API.SysLogininforPageQueryBo);
          return await SysLogininforPostList(params);
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

export default PageLoginInfo;
