import { CCreateTime, CCreateTimeRange, CIndex, CTableComment, CTableName, CUpdateTime } from '@/columns';
import { tableActionsAtom } from '@/pages/tool/gen/model';
import { GenPostDbList, GenPostImportTable } from '@/services/gen/GenService';
import type { ProItem } from '@/types';
import { convertParams, omitPaginationParams } from '@/utils';
import { CloudUploadOutlined } from '@ant-design/icons';
import type { ActionType } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { useBoolean } from 'ahooks';
import { Button, message, Modal } from 'antd';
import type { FC } from 'react';
import { useRef, useState } from 'react';
import { useMutation } from 'react-query';
import { useRecoilValue } from 'recoil';

const columns: ProItem[] = [CIndex, CTableName, CTableComment, CCreateTime, CUpdateTime, CCreateTimeRange];

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
      <Button type="primary" onClick={toggle} icon={<CloudUploadOutlined />}>
        导入
      </Button>

      <Modal
        visible={visible}
        onCancel={toggle}
        title="导入表结构"
        onOk={() => mutate({ tables: selectedRowKeys.join(',') })}
        width={900}
        okText="提交"
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
          options={false}
          request={async (params, sort, filter) => {
            console.log(sort, filter);
            const { rows, total } = await GenPostDbList(convertParams(params, sort), omitPaginationParams(params));

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
