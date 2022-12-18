import { ButtonExpand, ButtonGroupEdit, EmptySimple } from '@/components';
import { AccessWithState } from '@/features';
import { useEditRoleDetails, useQueryRoleTree } from '@/pages/system/role/model';
import type { TreeData } from '@/utils';
import { Checkbox, Spin, Tree } from 'antd';
import type { FC, Key } from 'react';
import { useEffect, useState } from 'react';

const TreeTransferMenuTree: FC = () => {
  const [checkedKeys, setCheckedKeys] = useState<number[]>([]);
  const [checkable, setCheckable] = useState(false);

  const [expandedKeys, setExpandedKeys] = useState<Key[]>([]);

  const [treeData, setTreeData] = useState<TreeData[]>([]);

  const [checkAll, setCheckAll] = useState(false);
  const [indeterminate, setIndeterminate] = useState(true);

  const { isFetching, data, refetch } = useQueryRoleTree((selectedTreeData) => {
    setCheckable(false);
    setTreeData(selectedTreeData);
  });

  const { isLoading, mutate } = useEditRoleDetails(() => {
    refetch();
  });

  // 全选/全不选
  const handleCheckedAllChange = (checked: boolean) => {
    if (checked || indeterminate) {
      setCheckedKeys(data?.allMenuIds ?? []);
      return;
    }

    setCheckedKeys([]);
  };

  useEffect(() => {
    if (data?.allMenuIds.length === checkedKeys.length) {
      setCheckAll(true);
      setIndeterminate(false);
      return;
    }

    if (checkedKeys.length === 0) {
      setCheckAll(false);
      setIndeterminate(false);
      return;
    }

    setIndeterminate(true);
  }, [data?.allMenuIds, checkedKeys]);

  return (
    <>
      <header className="flex justify-between items-end mb-2">
        <ButtonExpand
          expanded={expandedKeys.length === data?.allExpandedKeys.length}
          onChange={(expanded) => {
            setExpandedKeys(expanded ? data?.allExpandedKeys ?? [] : []);
          }}
        />

        <AccessWithState accessKey="system:role:edit">
          <ButtonGroupEdit
            editable={checkable}
            loading={isLoading}
            onCancel={() => {
              setCheckable(false);
              setTreeData(data?.selectedTreeData ?? []);
            }}
            onSave={() => mutate({ menuIds: checkedKeys })}
            onStartEdit={() => {
              setCheckable(true);
              setCheckedKeys(data?.selectedMenuIds ?? []);
              setTreeData(data?.treeData ?? []);
            }}
          />
        </AccessWithState>
      </header>

      <Spin spinning={isFetching}>
        <div className="pl-1 mb-1">
          {checkable && (
            <Checkbox
              indeterminate={indeterminate}
              onChange={(e) => handleCheckedAllChange(e.target.checked)}
              checked={checkAll}
            >
              全选/全不选
            </Checkbox>
          )}
        </div>

        {treeData.length > 0 ? (
          <Tree<any>
            blockNode
            showLine={{ showLeafIcon: false }}
            checkable={checkable}
            checkStrictly
            fieldNames={{
              title: 'label',
              key: 'id',
            }}
            checkedKeys={checkedKeys}
            treeData={treeData}
            expandedKeys={expandedKeys}
            onExpand={(keys) => setExpandedKeys(keys)}
            onCheck={(_) => {
              setCheckedKeys((_ as { checked: number[] }).checked);
            }}
            height={500}
          />
        ) : (
          <EmptySimple description="暂未分配菜单权限" />
        )}
      </Spin>
    </>
  );
};

export default TreeTransferMenuTree;
