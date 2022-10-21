import { BaseProTable } from '@/components';
import { useAtomValueMainTableActions } from '@/pages/tool/gen/model';
import { GenPostDbList, GenPostImportTable } from '@/services/gen/GenService';
import { convertParams } from '@/utils';
import { CloudUploadOutlined } from '@ant-design/icons';
import type { ActionType } from '@ant-design/pro-components';
import { useMutation } from '@tanstack/react-query';
import { useBoolean } from 'ahooks';
import { Button, message, Modal } from 'antd';
import type { FC } from 'react';
import { useRef, useState } from 'react';

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
        <BaseProTable<API.GenTableRes>
          ghost
          size="small"
          actionRef={actionRef}
          columns={[
            { title: '序号', dataIndex: 'index', key: 'index', valueType: 'indexBorder' },
            { title: '表名称', dataIndex: 'tableName', key: 'tableName', valueType: 'text' },
            { title: '表描述', dataIndex: 'tableComment', key: 'tableComment', valueType: 'text' },
            {
              title: '创建时间',
              dataIndex: 'createTime',
              key: 'createTime',
              valueType: 'dateTime',
              hideInSearch: true,
              sorter: true,
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
          ]}
          beforeSearchSubmit={(params) => {
            const { createTimeRange, ...rest } = params;

            let createTimeParams = {};

            if (createTimeRange) {
              createTimeParams = {
                beginCreateTime: createTimeRange[0],
                endCreateTime: createTimeRange[1],
              };
            }

            return {
              ...rest,
              ...createTimeParams,
            };
          }}
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
