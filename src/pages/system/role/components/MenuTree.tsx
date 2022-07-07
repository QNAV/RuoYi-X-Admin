import { useQueryMenuTree } from '@/pages/system/role/model';
import { CaretDownOutlined, CaretRightOutlined } from '@ant-design/icons';
import { ProCard } from '@ant-design/pro-components';
import type { CheckboxProps, TreeProps } from 'antd';
import { Button, Checkbox, Space, Tree } from 'antd';
import type { FC } from 'react';
import { useState } from 'react';

const fieldNames = {
  title: 'label',
  key: 'id',
  children: 'children',
};

export interface MenuTreeValue {
  menuIds: number[];
  menuCheckStrictly: boolean;
}

export interface MenuTreeProps {
  value?: MenuTreeValue;
  onChange?: (value: MenuTreeValue) => void;
}

const MenuTree: FC<MenuTreeProps> = ({ value, onChange }) => {
  const { data } = useQueryMenuTree();

  const [menuIds, setMenuIds] = useState<number[]>([]);
  const [expandedKeys, setExpandedKeys] = useState<TreeProps['expandedKeys']>([]);
  const [checkStrictly, setCheckStrictly] = useState<boolean>(false);

  const triggerChange = (changedValue: Partial<MenuTreeValue>) => {
    onChange?.({ menuIds, menuCheckStrictly: checkStrictly, ...value, ...changedValue });
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

  const allExpandedKeys = data?.parentIds ?? [];
  const isAllExpanded = expandedKeys && expandedKeys.length > 0 && expandedKeys.length === allExpandedKeys.length;

  return (
    <ProCard bordered>
      <Space className="mb-2">
        <Button
          size="small"
          icon={isAllExpanded ? <CaretDownOutlined /> : <CaretRightOutlined />}
          onClick={() => setExpandedKeys(isAllExpanded ? [] : allExpandedKeys)}
        >
          {isAllExpanded ? '全部折叠' : '全部展开'}
        </Button>

        <Checkbox defaultChecked onChange={onCheckStrictlyChange}>
          父子联动
        </Checkbox>
      </Space>

      <Tree<any>
        checkable
        treeData={data?.treeData ?? []}
        fieldNames={fieldNames}
        checkedKeys={menuIds}
        onCheck={onCheck}
        expandedKeys={expandedKeys}
        onExpand={setExpandedKeys}
        checkStrictly={checkStrictly}
      />
    </ProCard>
  );
};

export default MenuTree;
