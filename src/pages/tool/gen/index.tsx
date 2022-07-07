import { CClassName, CCreateTime, CCreateTimeRange, CIndex, CTableComment, CTableName, CUpdateTime } from '@/columns';
import { BasePageContainer } from '@/components';
import type { GenType } from '@/constants';
import { useInitActionType } from '@/hooks';
import ButtonDelete from '@/pages/tool/gen/components/ButtonDelete';
import ButtonDownload from '@/pages/tool/gen/components/ButtonDownload';
import ButtonEdit from '@/pages/tool/gen/components/ButtonEdit';
import ButtonImport from '@/pages/tool/gen/components/ButtonImport';
import ButtonPreview from '@/pages/tool/gen/components/ButtonPreview';
import ButtonSync from '@/pages/tool/gen/components/ButtonSync';
import ModalPreview from '@/pages/tool/gen/components/ModalPreview';
import { tableActionsAtom } from '@/pages/tool/gen/model';
import { GenPostList } from '@/services/gen/GenService';
import type { ProItem } from '@/types';
import { convertParams } from '@/utils';
import { ProTable } from '@ant-design/pro-components';
import type { FC } from 'react';
import { useState } from 'react';

const columns: ProItem[] = [
  CIndex,
  CTableName,
  CTableComment,
  CClassName,
  CCreateTime,
  CUpdateTime,
  CCreateTimeRange,
  {
    title: '操作',
    valueType: 'option',
    render: (dom, entity) => {
      return (
        <>
          <ButtonPreview tableId={entity.tableId} />

          <ButtonEdit tableId={entity.tableId} />

          <ButtonDelete tableIds={[entity.tableId]} />

          <ButtonSync tableName={entity.tableName} />

          <ButtonDownload rows={[{ tableName: entity.tableName, genType: entity.genType, genPath: entity.genPath }]} />
        </>
      );
    },
  },
];

const GenPage: FC = () => {
  const actionRef = useInitActionType(tableActionsAtom);

  const [selectedRowKeys, setSelectedRowKeys] = useState<number[]>([]);
  const [selectedRows, setSelectedRows] = useState<API.GenTableRes[]>([]);

  return (
    <BasePageContainer>
      <ProTable<API.GenTableRes>
        actionRef={actionRef}
        rowKey="tableId"
        rowSelection={{
          alwaysShowAlert: true,
          onChange: (selectedRowKeys, selectedRows) => {
            setSelectedRowKeys(selectedRowKeys as number[]);
            setSelectedRows(selectedRows);
          },
        }}
        tableAlertOptionRender={() => {
          return (
            <>
              <ButtonDelete tableIds={selectedRowKeys} isBatch />

              <ButtonDownload
                rows={selectedRows.map(({ tableName, genType, genPath }) => ({
                  tableName,
                  genType: genType as GenType,
                  genPath: genPath as string,
                }))}
                isBatch
              />
            </>
          );
        }}
        columns={columns}
        toolbar={{ actions: [<ButtonImport key="ButtonCreate" />] }}
        request={async (...params) => {
          const { total, rows } = await GenPostList(convertParams(...params));

          return {
            data: rows,
            success: true,
            total: total,
          };
        }}
      />

      <ModalPreview />
    </BasePageContainer>
  );
};

export default GenPage;
