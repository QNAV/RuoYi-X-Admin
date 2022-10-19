import { Access, EmptySimple } from '@/components';
import { useAtomValueAccess } from '@/models';
import { useEditRoleDetails, useQueryRoleTree } from '@/pages/system/role/model';
import type { TreeData } from '@/utils';
import { CaretDownOutlined, CaretRightOutlined } from '@ant-design/icons';
import { Button, Checkbox, Space, Spin, Tree } from 'antd';
import type { FC, Key } from 'react';
import { useEffect, useState } from 'react';

const getExpandedKeys = (list: TreeData[]) => {
  const result: number[] = [];

  list.forEach(({ id, children }) => {
    result.push(id);

    if (children) {
      result.push(...getExpandedKeys(children));
    }
  });

  return result;
};

const TreeTransferMenuTree: FC = () => {
  const [checkedKeys, setCheckedKeys] = useState<number[]>([]);
  const [checkable, setCheckable] = useState(false);
  const [expandedKeys, setExpandedKeys] = useState<Key[]>([]);
  const [treeData, setTreeData] = useState<TreeData[]>([]);
  const [checkAll, setCheckAll] = useState(false);
  const [indeterminate, setIndeterminate] = useState(true);

  const { canEditSysRole } = useAtomValueAccess();

  const {
    isLoading: queryLoading,
    data,
    refetch,
  } = useQueryRoleTree((selectedTreeData) => {
    setCheckable(false);
    setTreeData(selectedTreeData);
  });

  const { isLoading, mutate } = useEditRoleDetails(() => {
    refetch();
  });

  const allExpandedKeys = getExpandedKeys(data?.treeData ?? []);
  const isAllExpanded = expandedKeys?.length !== 0 && expandedKeys?.length === allExpandedKeys?.length;

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
      <header className="flex justify-between mb-2">
        <Space wrap>
          {treeData.length > 0 && (
            <Button
              size="small"
              icon={isAllExpanded ? <CaretDownOutlined /> : <CaretRightOutlined />}
              onClick={() => setExpandedKeys(isAllExpanded ? [] : allExpandedKeys)}
            >
              {isAllExpanded ? '全部折叠' : '全部展开'}
            </Button>
          )}

          {checkable && (
            <Checkbox
              indeterminate={indeterminate}
              onChange={(e) => handleCheckedAllChange(e.target.checked)}
              checked={checkAll}
            >
              全选/全不选
            </Checkbox>
          )}
        </Space>

        <Access accessible={canEditSysRole}>
          {checkable ? (
            <Space wrap>
              <Button
                loading={isLoading}
                onClick={() => {
                  setCheckable(false);
                  setTreeData(data?.selectedTreeData ?? []);
                }}
              >
                取消编辑
              </Button>
              <Button type="primary" ghost loading={isLoading} onClick={() => mutate({ menuIds: checkedKeys })}>
                保存
              </Button>
            </Space>
          ) : (
            <Button
              type="primary"
              ghost
              onClick={() => {
                setCheckable(true);
                setCheckedKeys(data?.selectedMenuIds ?? []);
                setTreeData(data?.treeData ?? []);
              }}
            >
              编辑菜单权限
            </Button>
          )}
        </Access>
      </header>

      <Spin spinning={queryLoading}>
        <div className="h-[calc(100vh-450px)] overflow-y-auto">
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
                setCheckedKeys((_ as { checked: number[]; halfChecked: number[] }).checked);
              }}
            />
          ) : (
            <EmptySimple description="暂未分配权限" />
          )}
        </div>
      </Spin>
    </>
  );
};

export default TreeTransferMenuTree;
