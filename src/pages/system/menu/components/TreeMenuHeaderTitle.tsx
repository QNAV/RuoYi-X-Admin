import { menuTypeColor } from '@/pages/system/menu/components/TreeMenu';
import { Tag } from 'antd';
import type { FC } from 'react';

const TreeMenuHeaderTitle: FC = () => (
  <div className="mb-2">
    标签含义：
    <Tag color="rgb(148 163 184)">显示顺序</Tag>
    <Tag color={menuTypeColor['DIRECTORY']}>目录</Tag>
    <Tag color={menuTypeColor['MENU']}>菜单</Tag>
    <Tag color={menuTypeColor['BUTTON']}>按钮</Tag>
    <Tag>权限标识</Tag>
  </div>
);

export default TreeMenuHeaderTitle;
