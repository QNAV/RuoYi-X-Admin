import { BaseProTable } from '@/components';
import { useQueryDict } from '@/models';
import ButtonAdd from '@/pages/system/config/components/ButtonAdd';
import ButtonEdit from '@/pages/system/config/components/ButtonEdit';
import ButtonExport from '@/pages/system/config/components/ButtonExport';
import ButtonRefresh from '@/pages/system/config/components/ButtonRefresh';
import ButtonRemove from '@/pages/system/config/components/ButtonRemove';
import { useActionRefMainTable } from '@/pages/system/config/model';
import type { SysConfigPageQueryBo, SysConfigVo } from '@/services/system/data-contracts';
import { sysConfigPostList } from '@/services/system/System';
import { convertParams } from '@/utils';
import type { ProColumns, ProTableProps } from '@ant-design/pro-components';
import type { FC } from 'react';
import { useState } from 'react';

const useColumns = (): ProColumns<SysConfigVo>[] => {
  const { data } = useQueryDict('sys_yes_no');

  return [
    { title: '参数主键', dataIndex: 'configId', key: 'configId', valueType: 'text', hideInSearch: true },
    { title: '参数名称', dataIndex: 'configName', key: 'configName', valueType: 'text' },
    { title: '参数键名', dataIndex: 'configKey', key: 'configKey', valueType: 'text' },
    { title: '参数键值', dataIndex: 'configValue', key: 'configValue', valueType: 'text', hideInSearch: true },
    {
      title: '系统内置',
      dataIndex: 'configType',
      key: 'configType',
      valueType: 'select',
      valueEnum: data?.mapData ?? {},
    },
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
      render: (dom, entity) => {
        return (
          <>
            <ButtonEdit record={entity} />
            <ButtonRemove configId={entity.configId} />
          </>
        );
      },
    },
  ];
};

const tableAlertOptionRender: ProTableProps<SysConfigVo, SysConfigPageQueryBo>['tableAlertOptionRender'] = ({
  selectedRows,
}) => {
  return (
    <ButtonRemove
      disabled={selectedRows.length === 0}
      isBatch
      configId={selectedRows.map((i) => i.configId).join(',') as unknown as number}
    />
  );
};

const TableMain: FC = () => {
  const actionRef = useActionRefMainTable();

  const columns = useColumns();

  const [searchParams, setSearchParams] = useState<SysConfigPageQueryBo>({});

  return (
    <BaseProTable
      rowKey="configId"
      actionRef={actionRef}
      columns={columns}
      tableAlertOptionRender={tableAlertOptionRender}
      request={async (...p) => {
        const params = convertParams(...p);
        setSearchParams(params as SysConfigPageQueryBo);
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
