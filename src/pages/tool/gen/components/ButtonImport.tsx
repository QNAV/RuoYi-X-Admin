import { CCreateTime, CCreateTimeRange, CIndex, CTableComment, CTableName, CUpdateTime } from '@/columns';
import { useAtomValueMainTableActions } from '@/pages/tool/gen/model';
import { GenPostDbList, GenPostImportTable } from '@/services/gen/GenService';
import type { ProItem } from '@/typings';
import { convertParams } from '@/utils';
import { CloudUploadOutlined } from '@ant-design/icons';
import type { ActionType } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { useMutation } from '@tanstack/react-query';
import { useBoolean } from 'ahooks';
import { Button, message, Modal } from 'antd';
import type { FC } from 'react';
import { useRef, useState } from 'react';

const columns: ProItem[] = [CIndex, CTableName, CTableComment, CCreateTime, CUpdateTime, CCreateTimeRange];

const ButtonImport: FC = () => {
  const actionRef = useRef<ActionType>();

  const tableActions = useAtomValueMainTableActions();

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
        open={visible}
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
          request={(...params) => GenPostDbList(convertParams(...params))}
        />
      </Modal>
    </>
  );
};

export default ButtonImport;
