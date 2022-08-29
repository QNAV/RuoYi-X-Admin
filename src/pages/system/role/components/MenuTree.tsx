import { useQueryMenuList } from '@/pages/system/menu/model';
import type { CheckboxProps, TreeProps } from 'antd';
import { Checkbox, Space, Tree } from 'antd';
import type { FC } from 'react';
import { useState } from 'react';

export interface MenuTreeValue {
  menuIds: number[];
  menuCheckStrictly: boolean;
}

export interface MenuTreeProps {
  value: MenuTreeValue;
  onChange: (value: MenuTreeValue) => void;
}

const MenuTree: FC<MenuTreeProps> = ({ value, onChange }) => {
  const { data } = useQueryMenuList();

  const [menuIds, setMenuIds] = useState<number[]>(value?.menuIds);
  const [expandedKeys, setExpandedKeys] = useState<TreeProps['expandedKeys']>([]);
  const [checkStrictly, setCheckStrictly] = useState<boolean>(false);

  const triggerChange = (changedValue: Partial<MenuTreeValue>) => {
    onChange({ ...value, ...changedValue });
  };

  const onCheck: TreeProps['onCheck'] = (k) => {
    const keys = Array.isArray(k) ? (k as number[]) : (k?.checked as number[]);

    setMenuIds(keys);
    triggerChange({ menuIds: keys });
  };

  const onCheckStrictlyChange: CheckboxProps['onChange'] = (e) => {
    setCheckStrictly(!e.target.checked);
    triggerChange({ menuCheckStrictly: !e.target.checked });
  };

  return (
    <>
      <Space className="mb-2">
        <Checkbox
          onChange={(e) => {
            setExpandedKeys(e.target.checked ? data?.parentIds ?? [] : []);
          }}
        >
          展开/折叠
        </Checkbox>

        <Checkbox>全选/全不选</Checkbox>

        <Checkbox onChange={onCheckStrictlyChange}>父子联动</Checkbox>
      </Space>

      <Tree<any>
        checkable
        treeData={data?.treeData ?? []}
        fieldNames={{
          title: 'menuName',
          key: 'menuId',
          children: 'children',
        }}
        checkedKeys={menuIds}
        onCheck={onCheck}
        expandedKeys={expandedKeys}
        onExpand={setExpandedKeys}
        checkStrictly={checkStrictly}
      />
    </>
  );
};

export default MenuTree;
