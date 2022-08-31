import { useRoleDetailsVisibleValue } from '@/pages/system/role/model';
import { SysMenuPostTreeSelect } from '@/services/sys/SysMenuService';
import type { TreeData } from '@/utils';
import { getMenuIds, getParentIds } from '@/utils';
import { Access } from '@@/exports';
import { useMutation } from '@tanstack/react-query';
import { useRequest } from 'ahooks';
import { Button, Checkbox, Space, Tree } from 'antd';
import type { FC, Key } from 'react';
import { useEffect, useMemo, useState } from 'react';

const fieldNames = {
  title: 'label',
  key: 'id',
  children: 'children',
};

const TreeTransferMenuTree: FC<{
  selectedMenuIds: number[];
  menuCheckStrictly: boolean;
  handleEdit: (e: { menuIds: number[]; menuCheckStrictly: boolean }) => Promise<any>;
}> = ({ selectedMenuIds, menuCheckStrictly, handleEdit }) => {
  const [checkedKeys, setCheckedKeys] = useState<number[]>([]);
  const [checkStrictly, setCheckStrictly] = useState<boolean>(false);
  const [editable, setEditable] = useState(false);
  const [expandedKeys, setExpandedKeys] = useState<Key[]>([]);

  const { roleId } = useRoleDetailsVisibleValue();

  const { data } = useRequest(async () => {
    const res = (await SysMenuPostTreeSelect({})) as TreeData[];

    return {
      treeData: res,
      allIds: getMenuIds(res),
      parentIds: getParentIds(res),
      allMenuIds: res.map((item) => item.id),
    };
  });

  // 展开/折叠
  const handleExpandedAllChange = (checked: boolean) => {
    if (checked) {
      setExpandedKeys(data?.parentIds ?? []);
      return;
    }
    setExpandedKeys([]);
  };

  // 全选/全不选
  const handleCheckedAllChange = (checked: boolean) => {
    if (checked) {
      setCheckedKeys(data?.allIds ?? []);
      return;
    }
    setCheckedKeys([]);
  };

  const { isLoading, mutate } = useMutation(
    async () => {
      await handleEdit({ menuIds: checkedKeys, menuCheckStrictly: checkStrictly });
    },
    {
      onSuccess: () => {
        setEditable(false);
      },
    },
  );

  const treeData = useMemo(() => {
    return data?.treeData ?? [];
  }, [selectedMenuIds, editable, data]);

  // 切换角色后初始化菜单树
  useEffect(() => {
    if (roleId > 0) {
      setEditable(false);
    }
  }, [roleId]);

  return (
    <>
      <header className="flex justify-between mb-2">
        <Space>
          <Checkbox onChange={(e) => handleExpandedAllChange(e.target.checked)}>展开/折叠</Checkbox>
          {editable && (
            <>
              <Checkbox onChange={(e) => handleCheckedAllChange(e.target.checked)}>全选/全不选</Checkbox>
              <Checkbox value={!checkStrictly} onChange={(e) => setCheckStrictly(!e.target.checked)}>
                父子联动
              </Checkbox>
            </>
          )}
        </Space>

        <Access accessible>
          {editable ? (
            <Space>
              <Button loading={isLoading} onClick={() => setEditable(false)}>
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
                setCheckedKeys(selectedMenuIds);
                setCheckStrictly(menuCheckStrictly);
              }}
            >
              编辑权限
            </Button>
          )}
        </Access>
      </header>

      <div className="h-[400px] overflow-y-auto">
        <Tree<any>
          blockNode
          checkable={editable}
          checkStrictly={checkStrictly}
          fieldNames={fieldNames}
          checkedKeys={checkedKeys}
          treeData={treeData}
          expandedKeys={expandedKeys}
          onExpand={(keys) => setExpandedKeys(keys)}
          onCheck={(_, { checked, node: { key } }) => {
            console.log(checked);
            console.log(_);
            console.log(key);
            setCheckedKeys([key as number]);
          }}
        />
      </div>
    </>
  );
};

export default TreeTransferMenuTree;
