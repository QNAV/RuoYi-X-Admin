import { Access } from '@/components';
import { useShowPreviewModal } from '@/pages/tool/gen/model';
import { CodeOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import type { FC } from 'react';

const ButtonPreview: FC<{ tableId: number }> = ({ tableId }) => {
  const showPreviewModal = useShowPreviewModal();

  return (
    <Access accessible>
      <Button onClick={() => showPreviewModal(tableId)} type="link" icon={<CodeOutlined />}>
        预览
      </Button>
    </Access>
  );
};

export default ButtonPreview;
