import SelectableIcons from '@/pages/system/menu/components/SelectableIcons';
import { useAtomValueDrawerSelectIcon, useHideDrawerSelectIcon } from '@/pages/system/menu/model';
import icons from '@icon-park/react/icons.json';
import { Drawer, Tabs } from 'antd';
import camelcase from 'camelcase';
import type { FC } from 'react';

export interface IconConfig {
  id: number;
  title: string;
  name: string;
  category: string;
  categoryCN: string;
  author: string;
  tag: string[];
  rtl: boolean;
}

export type IconCategory = Record<string, IconConfig[]>;

export const iconsConfig = icons as IconConfig[];

export const categoryObj: IconCategory = iconsConfig.reduce<IconCategory>((acc, cur) => {
  const category = cur.category;

  const camelcaseCur = { ...cur, name: camelcase(cur.name, { pascalCase: true }) };

  if (acc[category]) {
    acc[category].push(camelcaseCur);
  } else {
    acc[category] = [camelcaseCur];
  }
  return acc;
}, {});

const DrawerIcons: FC = () => {
  const { open, onSelected } = useAtomValueDrawerSelectIcon();
  const hideDrawerSelectIcon = useHideDrawerSelectIcon();
  return (
    <Drawer open={open} onClose={hideDrawerSelectIcon} placement="left" width="80%" title="图标">
      <Tabs
        items={Object.keys(categoryObj).map((category) => {
          return {
            key: category,
            label: categoryObj[category][0].categoryCN,
            children: (
              <SelectableIcons
                icons={categoryObj[category]}
                onSelected={(icon) => {
                  hideDrawerSelectIcon();
                  onSelected?.(icon);
                }}
              />
            ),
          };
        })}
      />
    </Drawer>
  );
};

export default DrawerIcons;
