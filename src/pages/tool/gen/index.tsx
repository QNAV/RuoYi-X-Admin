import { BasePageContainer, BaseProTable } from '@/components';
import ButtonDelete from '@/pages/tool/gen/components/ButtonDelete';
import ButtonDownload from '@/pages/tool/gen/components/ButtonDownload';
import ButtonEdit from '@/pages/tool/gen/components/ButtonEdit';
import ButtonImport from '@/pages/tool/gen/components/ButtonImport';
import ButtonPreview from '@/pages/tool/gen/components/ButtonPreview';
import ButtonSync from '@/pages/tool/gen/components/ButtonSync';
import ModalPreview from '@/pages/tool/gen/components/ModalPreview';
import { useActionRefMainTable } from '@/pages/tool/gen/model';
import type { GenTable, GenTablePageQuery } from '@/services/gen/data-contracts';
import { genPostList } from '@/services/gen/Tool';
import { convertParams } from '@/utils';
import type { ProColumns, ProTableProps } from '@ant-design/pro-components';
import type { FC } from 'react';

const columns: ProColumns<GenTable>[] = [
  { title: '序号', dataIndex: 'index', key: 'index', valueType: 'indexBorder' },
  { title: '表名称', dataIndex: 'tableName', key: 'tableName', valueType: 'text' },
  { title: '表描述', dataIndex: 'tableComment', key: 'tableComment', valueType: 'text' },
  { title: '实体名称', dataIndex: 'className', key: 'className', valueType: 'text', hideInSearch: true },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    key: 'createTime',
    valueType: 'dateTime',
    hideInSearch: true,
    sorter: false,
  },
  {
    title: '更新时间',
    dataIndex: 'updateTime',
    key: 'updateTime',
    valueType: 'dateTime',
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
          <ButtonPreview tableId={entity.tableId!} />

          <ButtonEdit tableId={entity.tableId!} />

          <ButtonSync tableName={entity.tableName} />

          <ButtonDownload tableName={entity.tableName} />

          <ButtonDelete tableIds={[entity.tableId!]} />
        </>
      );
    },
  },
];

const tableAlertOptionRender: ProTableProps<GenTable, 'text'>['tableAlertOptionRender'] = ({
  selectedRows,
  selectedRowKeys,
}) => {
  return (
    <>
      <ButtonDelete tableIds={selectedRowKeys as number[]} batch disabled={selectedRowKeys.length === 0} />

      <ButtonDownload
        tableName={selectedRows.map(({ tableName }) => tableName).join(',')}
        batch
        disabled={selectedRowKeys.length === 0}
      />
    </>
  );
};

const GenPage: FC = () => {
  const actionRef = useActionRefMainTable();

  return (
    <BasePageContainer>
      <BaseProTable<GenTable, GenTablePageQuery>
        rowKey="tableId"
        actionRef={actionRef}
        tableAlertOptionRender={tableAlertOptionRender}
        columns={columns}
        toolbar={{ actions: [<ButtonImport key="ButtonImport" />] }}
        request={(...params) => genPostList(convertParams(...params))}
      />

      <ModalPreview />
    </BasePageContainer>
  );
};

export default GenPage;
