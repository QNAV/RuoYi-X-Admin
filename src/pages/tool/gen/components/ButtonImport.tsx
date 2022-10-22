import { Access, BaseProTable } from '@/components';
import { useAtomValueAccess } from '@/models';
import { useAtomValueMainTableActions } from '@/pages/tool/gen/model';
import { GenPostDbList, GenPostImportTable } from '@/services/gen/GenService';
import { convertParams } from '@/utils';
import { CloudUploadOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { useMutation } from '@tanstack/react-query';
import { useBoolean } from 'ahooks';
import { Button, message, Modal } from 'antd';
import type { FC } from 'react';
import { useRef, useState } from 'react';

const columns: ProColumns<API.GenTableRes>[] = [
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
];

const ButtonImport: FC = () => {
  const { canImportToolGen } = useAtomValueAccess();

  const actionRef = useRef<ActionType>();

  const tableActions = useAtomValueMainTableActions();

  const [open, { toggle }] = useBoolean();

  const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>([]);

  const { mutate, isLoading } = useMutation(GenPostImportTable, {
    onSuccess: () => {
      tableActions?.reload();
      toggle();
      message.success('导入成功');
      actionRef.current?.clearSelected?.();
    },
  });

  return (
    <Access accessible={canImportToolGen}>
      <Button type="primary" onClick={toggle} icon={<CloudUploadOutlined />}>
        导入
      </Button>

      <Modal
        open={open}
        onCancel={toggle}
        title="导入表结构"
        onOk={() => mutate({ tables: selectedRowKeys.join(',') })}
        width={900}
        okText="提交"
        confirmLoading={isLoading}
        okButtonProps={{
          disabled: selectedRowKeys.length === 0,
        }}
      >
        <BaseProTable<API.GenTableRes, API.GenTablePageQuery>
          ghost
          actionRef={actionRef}
          columns={columns}
          rowKey="tableName"
          search={{ filterType: 'light' }}
          rowSelection={{
            alwaysShowAlert: true,
            onChange: (selectedRowKeys) => {
              setSelectedRowKeys(selectedRowKeys as string[]);
            },
          }}
          tableAlertOptionRender={false}
          options={false}
          request={(...params) => GenPostDbList(convertParams(...params))}
        />
      </Modal>
    </Access>
  );
};

export default ButtonImport;
