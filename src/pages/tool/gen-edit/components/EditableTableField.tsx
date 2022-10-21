import { JavaTypeMap, QueryTypeMap, YesNoStatusMap } from '@/constants';
import type { GenTableColumnRes } from '@/pages/tool/gen-edit/data';
import { CloseOutlined, EditOutlined, SaveOutlined } from '@ant-design/icons';
import { EditableProTable } from '@ant-design/pro-components';
import { Button, Form } from 'antd';
import type { FC, Key } from 'react';
import { useState } from 'react';

const EditableTableField: FC<{
  dataSource?: GenTableColumnRes[];
  loading?: boolean;
  handleEdit: (p: Partial<API.GenTableReq>) => Promise<void>;
}> = ({ dataSource, handleEdit, loading = false }) => {
  const [form] = Form.useForm();
  const [editableKeys, setEditableRowKeys] = useState<Key[]>([]);

  const isEditing = editableKeys?.length > 0;

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
                  if (dataSource) {
                    setEditableRowKeys(dataSource?.map((item) => item?.columnId?.toString() ?? ''));
                  }
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
      columns={[
        { title: '序号', dataIndex: 'sort', valueType: 'indexBorder', editable: false, width: 80 },
        {
          title: '字段名称',
          dataIndex: 'columnName',
          key: 'columnName',
          valueType: 'text',
          editable: false,
          ellipsis: true,
          width: 100,
        },
        { title: '字段描述', dataIndex: 'columnComment', key: 'columnComment', valueType: 'text', width: 250 },
        {
          title: '物理类型',
          dataIndex: 'columnType',
          key: 'columnType',
          valueType: 'text',
          editable: false,
          ellipsis: true,
          width: 100,
        },
        {
          title: 'JAVA类型',
          dataIndex: 'javaType',
          key: 'javaType',
          valueType: 'select',
          valueEnum: JavaTypeMap,
          width: 90,
        },
        { title: 'JAVA属性', dataIndex: 'javaField', key: 'javaField', valueType: 'text', width: 140 },
        {
          title: '插入',
          dataIndex: 'isInsert',
          key: 'isInsert',
          valueType: 'radioButton',
          width: 115,
          valueEnum: YesNoStatusMap,
        },
        {
          title: '编辑',
          dataIndex: 'isEdit',
          key: 'isEdit',
          valueType: 'radioButton',
          width: 115,
          valueEnum: YesNoStatusMap,
        },
        {
          title: '列表',
          dataIndex: 'isList',
          key: 'isList',
          valueType: 'radioButton',
          width: 115,
          valueEnum: YesNoStatusMap,
        },
        {
          title: '查询',
          dataIndex: 'isQuery',
          key: 'isQuery',
          valueType: 'radioButton',
          width: 115,
          valueEnum: YesNoStatusMap,
        },
        {
          title: '必填',
          dataIndex: 'isRequired',
          key: 'isRequired',
          valueType: 'radioButton',
          width: 115,
          valueEnum: YesNoStatusMap,
        },
        {
          title: '查询方式',
          dataIndex: 'queryType',
          key: 'queryType',
          valueType: 'select',
          valueEnum: QueryTypeMap,
          width: 70,
        },
      ]}
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
