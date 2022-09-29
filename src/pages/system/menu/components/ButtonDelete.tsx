import { Access } from '@/components';
import { useAtomValueAccess } from '@/models';
import { useDeleteMenu, useValueSelectedMenuData } from '@/pages/system/menu/model';
import { DeleteOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import type { FC } from 'react';

const ButtonDelete: FC = () => {
  const access = useAtomValueAccess();

  const { hasSelected, selectedMenuId, selectedMenuName } = useValueSelectedMenuData();

  const { mutate, isLoading } = useDeleteMenu();

  return (
    <Access accessible={hasSelected && access.canRemoveSysMenu}>
      <Button
        icon={<DeleteOutlined />}
        loading={isLoading}
        danger
        onClick={() =>
          mutate({
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
