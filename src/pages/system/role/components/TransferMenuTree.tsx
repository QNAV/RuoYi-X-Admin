import { SysMenuPostTreeSelect } from '@/services/sys/SysMenuService';
import { getParentIds } from '@/utils';
import { Access } from '@@/exports';
import { useRequest } from 'ahooks';
import { Button, Checkbox, Space, Tree } from 'antd';
import type { FC, Key } from 'react';
import { useMemo, useState } from 'react';

const fieldNames = {
  title: 'label',
  key: 'id',
  children: 'children',
};

const TreeTransferMenuTree: FC<{ selectedMenuIds: number[]; menuCheckStrictly: boolean }> = ({
  selectedMenuIds,
  menuCheckStrictly,
}) => {
  const [checkedKeys, setCheckedKeys] = useState<number[]>([]);
  const [checkStrictly, setCheckStrictly] = useState<boolean>(false);
  const [editable, setEditable] = useState(false);
  const [expandedKeys, setExpandedKeys] = useState<Key[]>([]);
  console.log(checkStrictly);
  const { data } = useRequest(async () => {
    const res = await SysMenuPostTreeSelect({});

    return {
      treeData: res,
      parentIds: getParentIds(res),
      allMenuIds: res.map((item) => item.id),
    };
  });

  const treeData = useMemo(() => {
    return data?.treeData ?? [];
  }, [selectedMenuIds, data]);

  return (
    <>
      <header className="flex justify-between mb-2">
        <Space>
          <Checkbox
            onChange={(e) => {
              console.log(e.target.checked);
              if (e.target.checked) {
                console.log(data?.parentIds);
                setExpandedKeys(data?.parentIds ?? []);
                return;
              }
              setExpandedKeys([]);
            }}
          >
            展开/折叠
          </Checkbox>
          {editable && (
            <>
              <Checkbox
                onChange={(e) => {
                  if (e.target.checked) {
                    return;
                  }
                  setCheckedKeys([]);
                }}
              >
                全选/全不选
              </Checkbox>
              <Checkbox
                value={!checkStrictly}
                onChange={(e) => {
                  setCheckStrictly(!e.target.checked);
                }}
              >
                父子联动
              </Checkbox>
            </>
          )}
        </Space>

        <Access accessible>
          {editable ? (
            <Space>
              <Button
                onClick={() => {
                  setEditable(false);
                }}
              >
                取消编辑
              </Button>
              <Button
                type="primary"
                ghost
                onClick={() => {
                  setEditable(false);
                }}
              >
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
        <Tree
          blockNode
          checkable={editable}
          checkStrictly={checkStrictly}
          fieldNames={fieldNames}
          checkedKeys={checkedKeys}
          treeData={treeData}
          expandedKeys={expandedKeys}
          onExpand={(keys) => {
            setExpandedKeys(keys);
          }}
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
