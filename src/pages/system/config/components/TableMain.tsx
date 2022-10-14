import { CCreateTime, CCreateTimeRange, CRemark } from '@/columns';
import { CConfigId, CConfigKey, CConfigName, CConfigType, CConfigValue } from '@/columns/config';
import { BaseProTable, WarpTableOption } from '@/components';
import { useRowClick } from '@/hooks';
import ButtonAdd from '@/pages/system/config/components/ButtonAdd';
import ButtonEdit from '@/pages/system/config/components/ButtonEdit';
import ButtonExport from '@/pages/system/config/components/ButtonExport';
import ButtonRefresh from '@/pages/system/config/components/ButtonRefresh';
import ButtonRemove from '@/pages/system/config/components/ButtonRemove';
import { useMainTableActionRef } from '@/pages/system/config/model';
import { SysConfigPostList } from '@/services/sys/SysConfigService';
import { convertParams } from '@/utils';
import type { ProTableProps } from '@ant-design/pro-components';
import type { FC } from 'react';
import { useState } from 'react';

const rowKey = 'configId';

const tableAlertOptionRender: ProTableProps<API.SysConfigVo, 'text'>['tableAlertOptionRender'] = ({ selectedRows }) => {
  return (
    <ButtonRemove
      disabled={selectedRows.length === 0}
      isBatch
      configId={selectedRows.map((i) => i.configId).join(',') as unknown as number}
      configName={selectedRows.map((i) => i.configName).join(',')}
    />
  );
};

const TableMain: FC = () => {
  const { rowSelection, onClick } = useRowClick<API.SysConfigVo>(rowKey);
  const actionRef = useMainTableActionRef();
  const [searchParams, setSearchParams] = useState<API.SysConfigPageQueryBo>({});
  return (
    <BaseProTable
      rowKey={rowKey}
      actionRef={actionRef}
      columns={[
        CConfigId,
        CConfigName,
        CConfigKey,
        CConfigValue,
        CConfigType,
        CRemark,
        CCreateTime,
        CCreateTimeRange,
        {
          title: '操作',
          valueType: 'option',
          fixed: 'right',
          render: (dom, entity: API.SysConfigVo) => {
            return (
              <WarpTableOption>
                <ButtonEdit record={entity} />
                <ButtonRemove configId={entity.configId} configName={entity.configName} />
              </WarpTableOption>
            );
          },
        },
      ]}
      tableAlertOptionRender={tableAlertOptionRender}
      rowSelection={rowSelection}
      onRow={(record) => {
        return {
          onClick: () => {
            onClick(record);
          },
        };
      }}
      request={async (...p) => {
        const params = convertParams(...p);
        setSearchParams(params as API.SysConfigPageQueryBo);
        return await SysConfigPostList(params);
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
