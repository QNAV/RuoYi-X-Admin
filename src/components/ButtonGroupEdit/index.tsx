import { EditOutlined, SaveOutlined } from '@ant-design/icons';
import type { ButtonProps } from 'antd';
import { Button, Space } from 'antd';
import type { FC } from 'react';

export interface ButtonGroupEditProps {
  editable: boolean;
  loading?: boolean;
  editButtonTitle?: string;
  onStartEdit: ButtonProps['onClick'];
  onCancel: ButtonProps['onClick'];
  onSave: ButtonProps['onClick'];
}

export const ButtonGroupEdit: FC<ButtonGroupEditProps> = ({
  editable,
  loading,
  onStartEdit,
  onSave,
  onCancel,
  editButtonTitle = '编辑',
}) => {
  if (editable) {
    return (
      <Space wrap>
        <Button loading={loading} onClick={onCancel}>
          取消编辑
        </Button>
        <Button type="primary" ghost icon={<SaveOutlined />} loading={loading} onClick={onSave}>
          保存
        </Button>
      </Space>
    );
  }

  return (
    <Button type="primary" ghost icon={<EditOutlined />} onClick={onStartEdit}>
      {editButtonTitle}
    </Button>
  );
};
