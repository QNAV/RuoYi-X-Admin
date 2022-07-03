import { CClassName, CCreateTime, CIndex, CTableComment, CTableName, CUpdateTime } from '@/columns';
import { BasePageContainer } from '@/components';
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
import type { ActionType } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import type { FC } from 'react';
import { useEffect, useRef, useState } from 'react';
import { useSetRecoilState } from 'recoil';

const columns: ProItem[] = [
  CIndex,
  CTableName,
  CTableComment,
  CClassName,
  CCreateTime,
  CUpdateTime,
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

          <ButtonDownload tableNames={[entity.tableName]} />
        </>
      );
    },
  },
];

const GenPage: FC = () => {
  const actionRef = useRef<ActionType>();

  const setTableActions = useSetRecoilState(tableActionsAtom);

  const [selectedRowKeys, setSelectedRowKeys] = useState<number[]>([]);
  const [selectedRows, setSelectedRows] = useState<API.GenTableRes[]>([]);

  useEffect(() => {
    if (actionRef?.current) {
      setTableActions(actionRef.current);
    }
  }, []);

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

              <ButtonDownload tableNames={selectedRows.map((i) => i.tableName)} isBatch />
            </>
          );
        }}
        columns={columns}
        toolbar={{ actions: [<ButtonImport key="ButtonCreate" />] }}
        request={async () => {
          const { total, rows } = await GenPostList({}, {});

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
