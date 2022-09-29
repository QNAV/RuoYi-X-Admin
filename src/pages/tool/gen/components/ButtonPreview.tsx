import { useShowPreviewModal } from '@/pages/tool/gen/model';
import { CodeOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import type { FC } from 'react';

const ButtonPreview: FC<{ tableId: number }> = ({ tableId }) => {
  const showPreviewModal = useShowPreviewModal();

  return (
    <Button onClick={() => showPreviewModal(tableId)} type="link" icon={<CodeOutlined />}>
      预览
    </Button>
  );
};

export default ButtonPreview;
