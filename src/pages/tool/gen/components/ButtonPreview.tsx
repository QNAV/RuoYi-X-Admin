import { previewIdAtom } from '@/pages/tool/gen/model';
import { CodeOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import type { FC } from 'react';
import { useSetRecoilState } from 'recoil';

const ButtonPreview: FC<{ tableId: number }> = ({ tableId }) => {
  const setPreviewId = useSetRecoilState(previewIdAtom);

  return (
    <Button onClick={() => setPreviewId(tableId)} type="link" icon={<CodeOutlined />}>
      预览
    </Button>
  );
};

export default ButtonPreview;
