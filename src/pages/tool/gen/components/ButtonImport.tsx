import { CCreateTime, CIndex, CTableComment, CTableName, CUpdateTime } from '@/columns';
import { tableActionsAtom } from '@/pages/tool/gen/model';
import { GenPostDbList, GenPostImportTable } from '@/services/gen/GenService';
import type { ProItem } from '@/types';
import { convertPaginationParams } from '@/utils';
import type { ActionType } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { useBoolean } from 'ahooks';
import { Button, message, Modal } from 'antd';
import type { FC } from 'react';
import { useRef, useState } from 'react';
import { useMutation } from 'react-query';
import { useRecoilValue } from 'recoil';

const columns: ProItem[] = [CIndex, CTableName, CTableComment, CCreateTime, CUpdateTime];

const ButtonImport: FC = () => {
  const actionRef = useRef<ActionType>();

  const tableActions = useRecoilValue(tableActionsAtom);

  const [visible, { toggle }] = useBoolean();

  const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>([]);

  const { mutate } = useMutation(GenPostImportTable, {
    onSuccess: () => {
      tableActions?.reload();
      toggle();
      message.success('导入成功');
      actionRef?.current?.clearSelected?.();
    },
  });

  return (
    <>
      <Button type="primary" onClick={toggle}>
        导入
      </Button>

      <Modal
        visible={visible}
        onCancel={toggle}
        title="导入表"
        onOk={() => mutate({ tables: selectedRowKeys.join(',') })}
        width={900}
      >
        <ProTable<API.GenTableRes>
          ghost
          size="small"
          actionRef={actionRef}
          pagination={{ pageSize: 10, current: 1 }}
          columns={columns}
          rowKey="tableName"
          search={{ filterType: 'light' }}
          rowSelection={{
            onChange: (selectedRowKeys) => {
              setSelectedRowKeys(selectedRowKeys as string[]);
            },
          }}
          options={{ setting: false, density: false }}
          request={async (params) => {
            const { rows, total } = await GenPostDbList(convertPaginationParams(params), {});

            return {
              data: rows,
              total: total,
            };
          }}
        />
      </Modal>
    </>
  );
};

export default ButtonImport;
