import { EmptySimple } from '@/components';
import { SysMenuGetRoleMenuTreeSelect } from '@/services/sys/SysMenuService';
import type { TreeData } from '@/utils';
import { filterCheckedTree, getMenuIds } from '@/utils';
import { Access } from '@@/exports';
import { CaretDownOutlined, CaretRightOutlined } from '@ant-design/icons';
import { useMutation } from '@tanstack/react-query';
import { useRequest } from 'ahooks';
import { Button, Checkbox, Space, Tree } from 'antd';
import type { FC, Key } from 'react';
import { useEffect, useState } from 'react';

const fieldNames = {
  title: 'label',
  key: 'id',
  children: 'children',
};

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

const TreeTransferMenuTree: FC<{
  roleId: number;
  handleEdit: (e: { menuIds: number[] }) => Promise<any>;
}> = ({ roleId, handleEdit }) => {
  const [checkedKeys, setCheckedKeys] = useState<number[]>([]);
  const [editable, setEditable] = useState(false);
  const [expandedKeys, setExpandedKeys] = useState<Key[]>([]);
  const [treeData, setTreeData] = useState<TreeData[]>([]);
  const [checkAll, setCheckAll] = useState(false);
  const [indeterminate, setIndeterminate] = useState(true);

  const { data, refresh } = useRequest(
    async () => {
      const { menus, checkedKeys } = (await SysMenuGetRoleMenuTreeSelect({ roleId })) as {
        menus: TreeData[];
        checkedKeys: number[];
      };

      return {
        treeData: menus,
        selectedMenuIds: checkedKeys,
        selectedTreeData: filterCheckedTree(menus, checkedKeys),
        allMenuIds: getMenuIds(menus),
      };
    },
    {
      ready: roleId > 0,
      refreshDeps: [roleId],
      onSuccess: (v) => {
        setEditable(false);
        setTreeData(v.selectedTreeData);
      },
    },
  );

  const { isLoading, mutate } = useMutation(async () => {
    await handleEdit({
      menuIds: checkedKeys,
    });

    refresh();
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
        <Space>
          {treeData.length > 0 && (
            <Button
              size="small"
              icon={isAllExpanded ? <CaretDownOutlined /> : <CaretRightOutlined />}
              onClick={() => setExpandedKeys(isAllExpanded ? [] : allExpandedKeys)}
            >
              {isAllExpanded ? '全部折叠' : '全部展开'}
            </Button>
          )}

          {editable && (
            <Checkbox
              indeterminate={indeterminate}
              onChange={(e) => handleCheckedAllChange(e.target.checked)}
              checked={checkAll}
            >
              全选/全不选
            </Checkbox>
          )}
        </Space>

        <Access accessible>
          {editable ? (
            <Space>
              <Button
                loading={isLoading}
                onClick={() => {
                  setEditable(false);
                  setTreeData(data?.selectedTreeData ?? []);
                }}
              >
                取消编辑
              </Button>
              <Button type="primary" ghost loading={isLoading} onClick={() => mutate()}>
                保存
              </Button>
            </Space>
          ) : (
            <Button
              type="primary"
              ghost
              onClick={() => {
                setEditable(true);
                setCheckedKeys(data?.selectedMenuIds ?? []);
                setTreeData(data?.treeData ?? []);
              }}
            >
              编辑权限
            </Button>
          )}
        </Access>
      </header>

      <div className="h-[390px] overflow-y-auto">
        {treeData.length > 0 ? (
          <Tree<any>
            blockNode
            showLine={{ showLeafIcon: false }}
            checkable={editable}
            checkStrictly
            fieldNames={fieldNames}
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
    </>
  );
};

export default TreeTransferMenuTree;
