import { AccessWithState, EmptySimple } from '@/components';
import { useEditRoleDetails, useQueryRoleTree } from '@/pages/system/role/model';
import type { TreeData } from '@/utils';
import { CaretDownOutlined, CaretRightOutlined, EditOutlined, SaveOutlined } from '@ant-design/icons';
import { Button, Checkbox, Space, Spin, Tree } from 'antd';
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

  const isAllExpanded = expandedKeys.length === data?.allExpandedKeys.length;

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
              onClick={() => setExpandedKeys(isAllExpanded ? [] : data!.allExpandedKeys)}
            >
              {isAllExpanded ? '全部折叠' : '全部展开'}
            </Button>
          )}
        </Space>

        <AccessWithState accessKey="system:role:edit">
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
              <Button
                type="primary"
                ghost
                icon={<SaveOutlined />}
                loading={isLoading}
                onClick={() => mutate({ menuIds: checkedKeys })}
              >
                保存
              </Button>
            </Space>
          ) : (
            <Button
              type="primary"
              ghost
              icon={<EditOutlined />}
              onClick={() => {
                setCheckable(true);
                setCheckedKeys(data?.selectedMenuIds ?? []);
                setTreeData(data?.treeData ?? []);
              }}
            >
              编辑菜单权限
            </Button>
          )}
        </AccessWithState>
      </header>

      <Spin spinning={isFetching}>
        <div className="pl-1 mb-2">
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
          />
        ) : (
          <EmptySimple description="暂未分配菜单权限" />
        )}
      </Spin>
    </>
  );
};

export default TreeTransferMenuTree;
