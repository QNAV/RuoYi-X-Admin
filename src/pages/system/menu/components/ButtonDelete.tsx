import { useDeleteMenu, useSelectedMenuIdValue } from '@/pages/system/menu/model';
import { Access, useAccess } from '@@/plugin-access';
import { DeleteOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import type { FC } from 'react';

const ButtonDelete: FC = () => {
  const access = useAccess();

  const menuId = useSelectedMenuIdValue();

  const { mutate, isLoading } = useDeleteMenu();

  return (
    <Access accessible={access.canDeleteSysMenu}>
      <Button
        icon={<DeleteOutlined />}
        loading={isLoading}
        disabled={menuId === 0}
        danger
        onClick={() => mutate(menuId)}
      >
        删除
      </Button>
    </Access>
  );
};

export default ButtonDelete;
