import type { IconConfig } from '@/pages/system/menu/components/DrawerIcons';
import Icon from '@icon-park/react/es/all';
import type { FC } from 'react';

const SelectableIcons: FC<{
  icons: IconConfig[];
  onSelected?: (icon: string) => void;
}> = ({ icons, onSelected }) => {
  return (
    <div className="flex flex-wrap gap-4 bg-gray-50 p-2 max-h-[calc(100vh-175px)] overflow-y-auto">
      {icons.map((icon) => {
        return (
          <div
            key={icon.id}
            className="flex flex-col items-center w-36 p-2 bg-white rounded shadow hover:shadow-lg cursor-pointer hover:text-blue-500"
            onClick={() => {
              onSelected?.(icon.name);
            }}
          >
            <Icon type={icon.name} size={20} />
            <span>{icon.title}</span>
          </div>
        );
      })}
    </div>
  );
};

export default SelectableIcons;
