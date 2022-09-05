import { useRemovePost } from '@/pages/system/post/model';
import { Access, useAccess } from '@@/plugin-access';
import { DeleteOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import type { FC } from 'react';

const ButtonRemove: FC<{
  postId: number;
}> = ({ postId }) => {
  const access = useAccess();
  const { mutate, isLoading } = useRemovePost();

  return (
    <Access accessible={access.canRemoveSysPost}>
      <Button type="link" danger icon={<DeleteOutlined />} onClick={() => mutate(postId)} loading={isLoading}>
        删除
      </Button>
    </Access>
  );
};

export default ButtonRemove;
