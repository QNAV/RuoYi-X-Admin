import { BaseProTable } from '@/components';
import { YNStatusMap } from '@/constants';
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
  const actionRef = useMainTableActionRef();
  const [searchParams, setSearchParams] = useState<API.SysConfigPageQueryBo>({});
  return (
    <BaseProTable
      rowKey={rowKey}
      actionRef={actionRef}
      columns={[
        { title: '参数主键', dataIndex: 'configId', key: 'configId', valueType: 'text', hideInSearch: true },
        { title: '参数名称', dataIndex: 'configName', key: 'configName', valueType: 'text' },
        { title: '参数键名', dataIndex: 'configKey', key: 'configKey', valueType: 'text' },
        { title: '参数键值', dataIndex: 'configValue', key: 'configValue', valueType: 'text', hideInSearch: true },
        { title: '系统内置', dataIndex: 'configType', key: 'configType', valueType: 'select', valueEnum: YNStatusMap },
        { title: '备注', dataIndex: 'remark', key: 'remark', valueType: 'textarea', hideInSearch: true },
        {
          title: '创建时间',
          dataIndex: 'createTime',
          key: 'createTime',
          valueType: 'dateTime',
          editable: false,
          hideInSearch: true,
          sorter: true,
        },
        {
          title: '创建时间',
          dataIndex: 'createTimeRange',
          key: 'createTimeRange',
          valueType: 'dateTimeRange',
          hideInTable: true,
        },
        {
          title: '操作',
          valueType: 'option',
          fixed: 'right',
          render: (dom, entity: API.SysConfigVo) => {
            return (
              <>
                <ButtonEdit record={entity} />
                <ButtonRemove configId={entity.configId} configName={entity.configName} />
              </>
            );
          },
        },
      ]}
      tableAlertOptionRender={tableAlertOptionRender}
      rowSelection={{}}
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
