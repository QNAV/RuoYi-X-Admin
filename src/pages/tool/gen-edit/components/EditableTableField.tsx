import { useQueryDictSysJavaType, useQueryDictSysQueryType, useQueryDictSysYesNo } from '@/models';
import type { GenTable, GenTableColumn } from '@/services/gen/data-contracts';
import { CloseOutlined, EditOutlined, SaveOutlined } from '@ant-design/icons';
import type { ProColumns } from '@ant-design/pro-components';
import { EditableProTable } from '@ant-design/pro-components';
import { Button, Form } from 'antd';
import type { FC, Key } from 'react';
import { useState } from 'react';

const useColumns = (): ProColumns[] => {
  const { valueEnumSysYesNo } = useQueryDictSysYesNo();
  const { valueEnumSysQueryType } = useQueryDictSysQueryType();
  const { valueEnumSysJavaType } = useQueryDictSysJavaType();
  return [
    { title: '序号', dataIndex: 'sort', valueType: 'indexBorder', editable: false },
    {
      title: '字段名称',
      dataIndex: 'columnName',
      key: 'columnName',
      valueType: 'text',
      editable: false,
      ellipsis: true,
    },
    { title: '字段描述', dataIndex: 'columnComment', key: 'columnComment', valueType: 'text' },
    {
      title: '物理类型',
      dataIndex: 'columnType',
      key: 'columnType',
      valueType: 'text',
      editable: false,
      ellipsis: true,
    },
    {
      title: 'JAVA类型',
      dataIndex: 'javaType',
      key: 'javaType',
      valueType: 'select',
      valueEnum: valueEnumSysJavaType,
    },
    { title: 'JAVA属性', dataIndex: 'javaField', key: 'javaField', valueType: 'text' },
    {
      title: '插入',
      dataIndex: 'isInsert',
      key: 'isInsert',
      valueType: 'radioButton',
      valueEnum: valueEnumSysYesNo,
    },
    {
      title: '编辑',
      dataIndex: 'isEdit',
      key: 'isEdit',
      valueType: 'radioButton',
      valueEnum: valueEnumSysYesNo,
    },
    {
      title: '列表',
      dataIndex: 'isList',
      key: 'isList',
      valueType: 'radioButton',
      valueEnum: valueEnumSysYesNo,
    },
    {
      title: '查询',
      dataIndex: 'isQuery',
      key: 'isQuery',
      valueType: 'radioButton',
      valueEnum: valueEnumSysYesNo,
    },
    {
      title: '必填',
      dataIndex: 'isRequired',
      key: 'isRequired',
      valueType: 'radioButton',
      valueEnum: valueEnumSysYesNo,
    },
    {
      title: '查询方式',
      dataIndex: 'queryType',
      key: 'queryType',
      valueType: 'select',
      valueEnum: valueEnumSysQueryType,
    },
  ];
};

const EditableTableField: FC<{
  dataSource?: GenTableColumn[];
  loading?: boolean;
  handleEdit: (p: Partial<GenTable>) => Promise<void>;
}> = ({ dataSource, handleEdit, loading = false }) => {
  const [form] = Form.useForm();

  const [editableKeys, setEditableRowKeys] = useState<Key[]>([]);
  const isEditing = editableKeys?.length > 0;

  const columns = useColumns();

  return (
    <EditableProTable
      toolbar={{
        actions: isEditing
          ? [
              <Button key="cancelEdit" onClick={() => setEditableRowKeys([])} icon={<CloseOutlined />}>
                取消编辑
              </Button>,
              <Button
                type="primary"
                key="edit"
                loading={loading}
                icon={<SaveOutlined />}
                onClick={async () => {
                  const res = await form.validateFields();

                  await handleEdit({
                    columns: Object.keys(res).map((key) => {
                      return { ...res[key], columnId: Number(key) };
                    }),
                  });

                  setEditableRowKeys([]);
                }}
              >
                保存
              </Button>,
            ]
          : [
              <Button
                icon={<EditOutlined />}
                type="primary"
                key="edit"
                onClick={() => {
                  setEditableRowKeys(dataSource!.map((item) => item.columnId!.toString()));
                }}
              >
                编辑
              </Button>,
            ],
      }}
      rowKey="columnId"
      ghost
      size="small"
      scroll={{ x: 'max-content' }}
      columns={columns}
      value={dataSource}
      recordCreatorProps={false}
      editable={{
        form,
        editableKeys,
      }}
    />
  );
};

export default EditableTableField;
