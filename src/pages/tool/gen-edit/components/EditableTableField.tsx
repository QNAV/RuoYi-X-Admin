import {
  CColumnComment,
  CColumnName,
  CColumnType,
  CIsEdit,
  CIsInsert,
  CIsList,
  CIsQuery,
  CIsRequired,
  CJavaField,
  CJavaType,
  CQueryType,
} from '@/columns';
import type { GenTableColumnRes } from '@/pages/tool/gen-edit/data';
import { EditableProTable } from '@ant-design/pro-components';
import { Button, Form } from 'antd';
import type { FC, Key } from 'react';
import { useState } from 'react';

const EditableTableField: FC<{
  dataSource?: GenTableColumnRes[];
  handleEdit: (p: Partial<API.GenTableReq>) => Promise<void>;
}> = ({ dataSource, handleEdit }) => {
  const [form] = Form.useForm();
  const [editableKeys, setEditableRowKeys] = useState<Key[]>([]);

  const isEditing = editableKeys?.length > 0;

  return (
    <EditableProTable
      toolbar={{
        actions: isEditing
          ? [
              <Button key="cancelEdit" onClick={() => setEditableRowKeys([])}>
                取消编辑
              </Button>,
              <Button
                type="primary"
                key="edit"
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
        {
          title: '序号',
          dataIndex: 'sort',
          valueType: 'indexBorder',
          editable: false,
          width: 80,
        },
        CColumnName,
        CColumnComment,
        CColumnType,
        CJavaType,
        CJavaField,
        CIsInsert,
        CIsEdit,
        CIsList,
        CIsQuery,
        CIsRequired,
        CQueryType,
      ]}
      value={dataSource}
      recordCreatorProps={false}
      editable={{
        form,
        editableKeys,
        onChange: (editableKeys, editableRows) => {
          console.log(editableRows);
        },
      }}
    />
  );
};

export default EditableTableField;
