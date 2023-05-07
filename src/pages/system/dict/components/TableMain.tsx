import { BaseProTable } from '@/components';
import { useQueryDictSysNormalDisable } from '@/models';
import ButtonAdd from '@/pages/system/dict/components/ButtonAdd';
import ButtonEdit from '@/pages/system/dict/components/ButtonEdit';
import ButtonExport from '@/pages/system/dict/components/ButtonExport';
import ButtonQuery from '@/pages/system/dict/components/ButtonQuery';
import ButtonRefresh from '@/pages/system/dict/components/ButtonRefresh';
import ButtonRemove from '@/pages/system/dict/components/ButtonRemove';
import { useActionRefMainTable } from '@/pages/system/dict/model';
import type { SysDictTypeQueryBo, SysDictTypeVo } from '@/services/system/data-contracts';
import { sysDictTypePostList } from '@/services/system/System';
import { convertParams } from '@/utils';
import type { ProColumns, ProTableProps } from '@ant-design/pro-components';
import type { FC } from 'react';
import { useState } from 'react';

const useColumns = (): ProColumns<SysDictTypeVo>[] => {
  const { valueEnumSysNormalDisable } = useQueryDictSysNormalDisable();

  return [
    { title: '字典编号', dataIndex: 'dictId', key: 'dictId', valueType: 'text', hideInSearch: true },
    { title: '字典名称', dataIndex: 'dictName', key: 'dictName', valueType: 'text' },
    { title: '字典类型', dataIndex: 'dictType', key: 'dictType', valueType: 'text' },
    { title: '状态', dataIndex: 'status', key: 'status', valueType: 'select', valueEnum: valueEnumSysNormalDisable },
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
      render: (_dom, entity) => {
        return (
          <>
            <ButtonQuery dictType={entity.dictType} />
            <ButtonEdit record={entity} />
            <ButtonRemove dictId={[entity.dictId]} />
          </>
        );
      },
    },
  ];
};

const tableAlertOptionRender: ProTableProps<SysDictTypeVo, SysDictTypeQueryBo>['tableAlertOptionRender'] = ({
  selectedRowKeys,
}) => {
  return <ButtonRemove disabled={selectedRowKeys.length === 0} batch dictId={selectedRowKeys as number[]} />;
};

const TableMain: FC = () => {
  const actionRef = useActionRefMainTable();

  const columns = useColumns();

  const [searchParams, setSearchParams] = useState<SysDictTypeQueryBo>({});

  return (
    <BaseProTable<SysDictTypeVo, SysDictTypeQueryBo>
      rowKey="dictId"
      actionRef={actionRef}
      columns={columns}
      tableAlertOptionRender={tableAlertOptionRender}
      request={async (...p) => {
        const params = convertParams(...p);
        setSearchParams(params);
        return await sysDictTypePostList(params);
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
