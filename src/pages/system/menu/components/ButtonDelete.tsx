import { selectedMenuIdAtom, useDeleteMenu } from '@/pages/system/menu/model';
import { DeleteOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import type { FC } from 'react';
import { useRecoilValue } from 'recoil';

const ButtonDelete: FC = () => {
  const menuId = useRecoilValue(selectedMenuIdAtom);

  const { mutate, isLoading } = useDeleteMenu();

  return (
    <Button icon={<DeleteOutlined />} loading={isLoading} disabled={menuId === 0} danger onClick={() => mutate(menuId)}>
      删除
    </Button>
  );
};

export default ButtonDelete;
