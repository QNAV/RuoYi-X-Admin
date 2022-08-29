import { useQueryMenuList } from '@/pages/system/menu/model';
import { Transfer, Tree } from 'antd';
import type { FC } from 'react';

const TreeTransferMenuTree: FC = () => {
  const { data } = useQueryMenuList();

  return (
    <Transfer titles={['全部权限', '已选权限']} showSelectAll={false}>
      {({ direction, selectedKeys }) => {
        return (
          <div className="h-[300px] overflow-y-auto">
            {direction === 'left' && (
              <Tree
                blockNode
                checkable
                checkStrictly
                checkedKeys={selectedKeys}
                treeData={data?.treeData ?? []}
                fieldNames={{
                  title: 'menuName',
                  key: 'menuId',
                  children: 'children',
                }}
              />
            )}

            {direction === 'right' && (
              <Tree
                defaultExpandAll
                checkedKeys={selectedKeys}
                treeData={data?.treeData ?? []}
                fieldNames={{
                  title: 'menuName',
                  key: 'menuId',
                  children: 'children',
                }}
              />
            )}
          </div>
        );
      }}
    </Transfer>
  );
};

export default TreeTransferMenuTree;
