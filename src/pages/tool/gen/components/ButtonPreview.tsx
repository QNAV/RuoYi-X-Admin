import { Access } from '@/components';
import { useAtomValueAccess } from '@/models';
import { useShowPreviewModal } from '@/pages/tool/gen/model';
import { CodeOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import type { FC } from 'react';

const ButtonPreview: FC<{ tableId: number }> = ({ tableId }) => {
  const { canPreviewToolGen } = useAtomValueAccess();

  const showPreviewModal = useShowPreviewModal();

  return (
    <Access accessible={canPreviewToolGen}>
      <Button onClick={() => showPreviewModal(tableId)} type="link" icon={<CodeOutlined />}>
        预览
      </Button>
    </Access>
  );
};

export default ButtonPreview;
