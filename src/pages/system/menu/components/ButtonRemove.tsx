import { AccessWithState, BaseButtonRemove } from '@/components';
import { useAtomValueSelectedMenuData, useDeleteMenu } from '@/pages/system/menu/model';
import type { FC } from 'react';

const ButtonRemove: FC = () => {
  const { hasSelected, selectedMenuId, selectedMenuName } = useAtomValueSelectedMenuData();

  const deleteMenu = useDeleteMenu();

  return (
    <AccessWithState accessKey="system:menu:remove">
      <BaseButtonRemove
        disabled={!hasSelected}
        type="primary"
        size="middle"
        onClick={() =>
          deleteMenu({
            menuId: selectedMenuId,
            menuName: selectedMenuName,
          })
        }
      />
    </AccessWithState>
  );
};

export default ButtonRemove;
