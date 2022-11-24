import { Access } from '@/components';
import { useAtomValueSelectedMenuData, useDeleteMenu } from '@/pages/system/menu/model';
import { DeleteOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import type { FC } from 'react';

const ButtonDelete: FC = () => {
  const { hasSelected, selectedMenuId, selectedMenuName } = useAtomValueSelectedMenuData();

  const deleteMenu = useDeleteMenu();

  return (
    <Access accessible>
      <Button
        icon={<DeleteOutlined />}
        danger
        onClick={() =>
          deleteMenu({
            menuId: selectedMenuId,
            menuName: selectedMenuName,
          })
        }
      >
        删除
      </Button>
    </Access>
  );
};

export default ButtonDelete;
