import { useQueryMenuTree } from '@/pages/system/role/model';
import { CaretDownOutlined, CaretRightOutlined } from '@ant-design/icons';
import { ProCard } from '@ant-design/pro-components';
import type { TreeProps } from 'antd';
import { Button, Checkbox, Space, Tree } from 'antd';
import type { FC } from 'react';
import { useEffect, useState } from 'react';

const fieldNames = {
  title: 'label',
  key: 'id',
  children: 'children',
};

const MenuTree: FC<{ onChange: (checkedMenuIds: number[]) => void }> = ({ onChange }) => {
  const { data } = useQueryMenuTree();

  const [checkedKeys, setCheckedKeys] = useState<number[]>([]);
  const [expandedKeys, setExpandedKeys] = useState<TreeProps['expandedKeys']>([]);
  const [checkStrictly, setCheckStrictly] = useState<boolean>();

  const allExpandedKeys = data?.parentIds ?? [];

  const isAllExpanded = expandedKeys && expandedKeys.length > 0 && expandedKeys.length === allExpandedKeys.length;

  useEffect(() => {
    onChange(checkedKeys);
  }, [checkedKeys]);

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

        <Checkbox defaultChecked onChange={(e) => setCheckStrictly(!e.target.checked)}>
          父子联动
        </Checkbox>
      </Space>

      <Tree<any>
        checkable
        treeData={data?.treeData ?? []}
        fieldNames={fieldNames}
        checkedKeys={checkedKeys}
        onCheck={(keys) => setCheckedKeys(Array.isArray(keys) ? (keys as number[]) : (keys?.checked as number[]))}
        expandedKeys={expandedKeys}
        onExpand={setExpandedKeys}
        checkStrictly={checkStrictly}
      />
    </ProCard>
  );
};

export default MenuTree;
